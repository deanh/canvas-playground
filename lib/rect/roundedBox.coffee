Rect = require "../rect"

class RoundedBox extends Rect
  constructor: (options = {}) ->
    super(options)
    @radius = options.radius ? 5
    @fill   = options.fill   ? "rgba(0, 0, 0, 0.8)"

  draw: (ctx) ->
    {x, y} = @position

    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x + @radius, y);
    ctx.lineTo(x + @width - @radius, y)
    ctx.quadraticCurveTo(x + @width, y, x + @width, y + @radius)
    ctx.lineTo(x + @width, y + @height - @radius)
    ctx.quadraticCurveTo(x + @width, y + @height, x + @width - @radius, y + @height)
    ctx.lineTo(x + @radius, y + @height);
    ctx.quadraticCurveTo(x, y + @height, x, y + @height - @radius)
    ctx.lineTo(x, y + @radius)
    ctx.quadraticCurveTo(x, y, x + @radius, y)
    ctx.closePath()

    if (@stroke)
      ctx.stroke()
    ctx.fillStyle = @fill
    ctx.fill()
    ctx.restore()

module.exports = RoundedBox
