##
# Rect: Drawing primitive which can be rendered in the DOM or on canvas.

class Rect
  constructor: (options = {}) ->
    @visible  = options?.visible ? true
    @width    = options?.width ? 1
    @height   = options?.height ? 1

    {x, y, rotation} = options

    @position = {x: x, y: y}

    @needsRedraw = true

  isVisible: ->
    (@visible && @width > 0 && @height > 0)

  draw: (canvasCtx) ->
    return unless @isVisible()
    throw new Error("You need to implement draw()")

  ##
  # Basic, rectangular containment.
  contains: (otherX, otherY) ->
    {x, y} = @position
    (otherX >= x && otherX <= x + @width) and (otherY >= y && otherY <= y + @height)

module.exports = Rect

