Rect = require "../rect"

class TextBox extends Rect
  constructor: (options = {}) ->
    super(options)
    @_textString = options.textString ? ""
    @fill        = options.fill ? "#000"
    @font        = options.font ? "36px monospace"
    @maxWidth    = options.maxWidth ? 200   # we want this to be undefined

  setText: (str) ->
    @_textString = str

  setFill: (fillStr) ->
    @fill = fillStr

  draw: (ctx) ->
    {x, y, rotation} = @position
    ctx.save()

    ctx.translate(x<<0, y<<0)
    ctx.rotate(rotation)

    ctx.fillStyle = @fill
    ctx.font      = @font
    ctx.fillText(@_textString, 0, 0, @maxWidth)
    ctx.restore()
    return

module.exports = TextBox
