GameLoop       = require "gameLoop"
Entity         = require "entity"
Text           = require "rect/textBox"
CanvasPool     = require "canvasPool"

class Main
  @start: (canvasElement) ->
    cvs = document.getElementById(canvasElement)
    console.log cvs

    pool = new CanvasPool(300)

    gameLoop = new GameLoop(cvs)
    window._game = gameLoop

    helloRect = new Text textString: "Hello, Cascadia!", maxWidth: 300

    hello = new Entity
      x: 300
      y: 300
      rotation: 0
      rect: helloRect
      linkedRect: true

    hello.update = ->
      @position.rotation = @position.rotation + Math.PI / 180
      return

    gameLoop.addEntity(hello)

    gameLoop.start()

module.exports = Main
