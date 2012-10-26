class CanvasPool
  constructor: (num) ->
    @_canvases = []

    for i in [1..num]
      do =>
        cvs = document.createElement("canvas")
        cvs.height = 128
        cvs.width  = 128
        @_canvases.push cvs

module.exports = CanvasPool
