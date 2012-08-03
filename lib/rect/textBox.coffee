Rect = require "../rect"

class TextBox extends Rect
  constructor: (options = {}) ->
    super(options)
    @_textString = options.textString ? ""
    @fill        = options.fill ? "#000"
    @font        = options.font ? "12px monospace"
    @maxWidth    = options.maxWidth ? 200   # we want this to be undefined

  setText: (str) ->
    @_textString = str

  setFill: (fillStr) ->
    @fill = fillStr

  draw: (ctx) ->
    {x, y} = @position
    ctx.save()
    ctx.fillStyle = @fill
    ctx.font      = @font
    ctx.fillText(@_textString, x, y, @maxWidth)
    ctx.restore()

module.exports = TextBox
