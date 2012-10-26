express = require "express"
http    = require "http"
stitch  = require "stitch"
io      = require "socket.io"
coffee  = require "coffee-script"
argv    = process.argv.slice(2)

pkg = stitch.createPackage(
  paths: [
    __dirname + "/src",
    __dirname + "/node_modules/underscore"
  ]
  dependencies: []
)

app = express()

app.configure ->
  app.use express.static(__dirname + "/public")
  app.get "/js/playground.js", pkg.createServer()

port = argv[0] or process.env.PORT or 4000
console.log "Starting server on port: #{port}"
app.listen port