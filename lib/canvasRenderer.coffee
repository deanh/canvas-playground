class CanvasRenderer
  constructor: (el) ->
    @screenBuffer = el.getContext('2d')
    @width  = parseInt(window.getComputedStyle(el).getPropertyValue("width"), 10)
    @height = parseInt(window.getComputedStyle(el).getPropertyValue("height"), 10)

  clearFrame: ->
    @screenBuffer.clearRect(0, 0, @width, @height)

  render: (renderQueue) ->
    ctx = @screenBuffer
    @clearFrame()
    for rect in renderQueue
      rect.drawCanvasImmediate(ctx)

module.exports = CanvasRenderer
