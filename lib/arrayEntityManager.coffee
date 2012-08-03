# Just use an array for simplicity
class ArrayEntityManager
  constructor: ->
    @entities = []

  addEntity: (e) ->
    @entities.push(e)

  removeEntity: (e) ->
    idx = @enities.indexOf(e)
    @entities.splice(idx, 1)

  getEntityById: (id) ->
    # just do a linear search for now
    return ent for ent in @entities when ent.id == id

  getRenderQueue: ->
    @toArray()

  update: (tick, time) ->
    for ent in @entities
      ent.update?(tick, time)

  toArray: ->
    @entities.slice()

module.exports = ArrayEntityManager