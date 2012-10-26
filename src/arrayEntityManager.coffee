# Just use an array for simplicity
class ArrayEntityManager
  constructor: ->
    @_entities = []
    @_visitors = {}

  addVisitor: (name, visitor) ->
    @_visitors[name] = visitor

  removeVisitor: (name) ->
    @_visitors[name] = undefined

  getVisitors: ->
    v for k, v of @_visitors

  addEntity: (e) ->
    @_entities.push(e)
    return

  removeEntity: (e) ->
    idx = @_enities.indexOf(e)
    @_entities.splice(idx, 1)

  getEntityById: (id) ->
    # just do a linear search for now
    return ent for ent in @_entities when ent.id == id

  getRenderQueue: ->
    @toArray()

  update: (tick, time) ->
    i = @_entities.length
    while i-- > 0
      e = @_entities[i]
      v.actOn(e, tick, time) for k, v of @_visitors.pre when v.condition(e)
      e.update?(tick, time)
    return

  toArray: ->
    @_entities.slice()

module.exports = ArrayEntityManager
