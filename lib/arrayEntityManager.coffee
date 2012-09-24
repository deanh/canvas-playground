# Just use an array for simplicity
class ArrayEntityManager
  constructor: ->
    @entities = []

  addEntity: (e) ->
    @entities.push(e)
    return

  removeEntity: (e) ->
    idx = @enities.indexOf(e)
    @entities.splice(idx, 1)

  getEntityById: (id) ->
    # just do a linear search for now
    return ent for ent in @entities when ent.id == id

  getRenderQueue: ->
    @toArray()

  update: (tick, time) ->
    i = 0
    while i < @entities.length
      @entities[i].update?(tick, time)
      i++
    return

  toArray: ->
    @entities

module.exports = ArrayEntityManager
