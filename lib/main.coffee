GameLoop       = require "gameLoop"
Entity         = require "entity"

class Main
  @start: (canvasElement) ->
    cvs = document.getElementById(canvasElement)
    console.log cvs

    gameLoop = new GameLoop(cvs)
    window._game = gameLoop

    gameLoop.start()

module.exports = Main
