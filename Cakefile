require("coffee-script")
stitch  = require 'stitch'
fs      = require 'fs'

task 'build', 'Build CS', ->
  pkg = stitch.createPackage
    paths: [__dirname + '/src']

  pkg.compile (err, source) ->
    fs.writeFile 'public/js/playground.js', source, (err) ->
      throw err if err
      console.log 'Compiled public/js/playground.js'

