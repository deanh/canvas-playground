# Game level object
class Entity
  # @params: {rect} The entity's drawing primitive
  constructor: (options = {}) ->
    @rect            = options.rect ? null
    {x, y, rotation} = options
    @position        = {x: x, y: y, rotation: rotation}

    if @rect? and options.linkedRect?
      @rect.position = @position

  moveTo: (pt) ->
    if pt.x? and pt.y?
      @position = pt

  update: (tick, coeff) ->
    # do something interesting here.

  draw: (ctx) ->
    @rect.draw(ctx)

  contains: (x, y) ->
    @rect.contains(x, y) if @rect? and @linkedRect

module.exports = Entity
