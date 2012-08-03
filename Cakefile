require("coffee-script")
stitch  = require 'stitch'
fs      = require 'fs'

task 'build', 'Build CS', ->
  package = stitch.createPackage
    paths: [__dirname + '/lib']

  package.compile (err, source) ->
    fs.writeFile 'public/js/chat.js', source, (err) ->
      throw err if err
      console.log 'Compiled public/js/chat.js'

