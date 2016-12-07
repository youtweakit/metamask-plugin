var fs = require('fs')
var path = require('path')
var prompt = require('prompt')
var open = require('open')

var id = 0
var date = new Date().toDateString()

fs.readdir('notices', (err, files) => {
  files.forEach(file => {
    id++
  })
})

prompt.start()

prompt.get(['title'], function (err, result) {
  fs.writeFile(`notices/notice_${id}.md`, `# ${result.title}\n### ${date}\n[Message Goes Here]\n`, function (err) {
    if (err) {
      return console.log(err)
    } else {
      open(`notices/notice_${id}.md`)
    }
  })
})
