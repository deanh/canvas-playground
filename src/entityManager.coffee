# Just use a simple array for simplicity
class ArrayEntityManager
  constructor: ->
    @entities = []

  addEntity: (e) ->
    @entities.push(e)

  removeEntity: (e) ->
    idx = @enities.indexOf(e)
    @entities.splice(idx, 1)

  toArray: ->
    @entities.slice()

module.exports = ArrayEntityManager