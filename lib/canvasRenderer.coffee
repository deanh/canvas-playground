class CanvasRenderer
  constructor: (el) ->
    @screenBuffer    = el
    @screenBufferCtx = @screenBuffer.getContext('2d')

    @width  = parseInt(window.getComputedStyle(el).getPropertyValue("width"), 10)
    @height = parseInt(window.getComputedStyle(el).getPropertyValue("height"), 10)

    @backBuffer      = document.createElement("canvas")
    @backBuffer.height = @height
    @backBuffer.width  = @width
    @backBufferCtx   = @backBuffer.getContext('2d')

  clearFrame: (ctx) ->
    ctx.clearRect(0, 0, @width, @height)

  render: (renderQueue) ->
    ctx = @screenBufferCtx
    @clearFrame(ctx)
    ctx.drawImage(@backBuffer, 0, 0)

    backCtx = @backBufferCtx
    @clearFrame(backCtx)

    i = 0
    while i < renderQueue.length
      renderQueue[i].draw(ctx)
      i++

    return

module.exports = CanvasRenderer
