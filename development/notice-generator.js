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
      var newNotice = {
        id: id,
        read: false,
        title: result.title,
      }
      notices.push(newNotice)
      return fs.writeFile(`development/notices.json`, JSON.stringify(notices))
    }).then((err) => {
      open(`notices/notice_${id}.md`)
      return Promise.resolve()
    }).catch(err) => {
      return console.err(err)
    })
})
