Rect = require "../rect"

# # CompositeRect
#
# Although are we many, draw us as one. Drawing is FIFO.
class CompositeRect extends Rect
  constructor: (options = {}) ->
    super(options)
    @_rects = []

  addRect: (rect) ->
    @_rects.push rect

  removeRect: (rect) ->
    idx = @_rects.indexOf(rect)
    @_rects.splice(idx, 1)
    rect

  # If any are visible, this is true
  isVisible: ->
    for rect in @_rects
      return true if rect.isVisible

  draw: (canvasCtx) ->
    rect.draw(canvasCtx) for rect in @_rects

  # If any intersect, this is true
  intersects: (other) ->
    for rect in @_rects
      return true if rect.intersects(other)

  # If this point is contained by any of the rects this is true
  contains: (otherX, otherY) ->
    for rect in @_rects
      return true if rect.contains(otherX, otherY)

module.exports = CompositeRect
