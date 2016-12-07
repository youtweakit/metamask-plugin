var fs = require('fs-promise')
var path = require('path')
var prompt = require('prompt')
var open = require('open')
var extend = require('extend')
var notices = require('./notices.json')

var id = 0
var date = new Date().toDateString()

fs.readdir('notices', (err, files) => {
  files.forEach(file => {
    id++
  })
})

prompt.start()

prompt.get(['title'], function (err, result) {
  fs.writeFile(`notices/notice_${id}.md`, `# ${result.title}\n### ${date}\n\n[Message Goes Here]\n`)
    .then(() =>  {
      var newNotice = {}
      newNotice[id] = {
        read: false,
        title: result.title,
      }
      var combinedNotices = extend(notices, newNotice)
      return fs.writeFile(`development/notices.json`, JSON.stringify(combinedNotices))
    }).then((err) => {
      open(`notices/notice_${id}.md`)
      return Promise.resolve()
    })
})
