CanvasRenderer = require "canvasRenderer"
EntityManager  = require "arrayEntityManager"

##
# Set-up polyfills for unevenly supported features

##
# requestAnimationFrame
# http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/RequestAnimationFrame/Overview.html
root = window ? global
root.requestAnimationFrame ||=
  root.webkitRequestAnimationFrame ||
  root.mozRequestAnimationFrame    ||
  root.oRequestAnimationFrame      ||
  root.msRequestAnimationFrame     ||
  (cb, elt) ->
    ##
    # Default to setTimeout. May we never execute this code.
    root.setTimeout( ->
      cb(+new Date())
    , 1000 / 60)

root.cancelAnimationFrame ||=
  root.webkitCancelRequestAnimationFrame ||
  root.mozCancelRequestAnimationFrame    ||
  root.oCancelRequestAnimationFrame      ||
  root.msCancelRequestAnimationFrame     ||
  (id) ->
    clearTimeout(id)

##
# High resolution time
# http://www.w3.org/TR/hr-time/#sec-high-resolution-time
root.performance ||= {}
perf = root.performance
perf.now  ||=
  perf.webkitNow ||
  perf.mozNow    ||
  perf.msNow     ||
  perf.oNow      ||
  ->
    # this is only compatable for relative caomparisons
    +(new Date())

class GameLoop
  constructor: (cvs) ->
    @renderer = new CanvasRenderer(cvs)
    @entityManager = new EntityManager
    @tick     = 0
    @frameId  = null
    @timer    = new DumbTimer

  start: ->
    @frameId = root.requestAnimationFrame @run

  stop: ->
    root.cancelAnimationFrame(@frameId)

  run: (time = perf.now()) =>
    em = @entityManager
    @timer.setLastFrameInfo(time, @tick++)

    @frameId = root.requestAnimationFrame(@run)

    ##
    # Update entities
    em.update(@tick, time)

    ##
    # Get render queue
    renderQueue = em.getRenderQueue()

    ##
    # Draw!
    @renderer.render(renderQueue)

class DumbTimer
  constructor: ->
    @lastFrameTime = null
    @lastTick      = null

  setLastFrameInfo: (@lastFrameTime, @lastTick) ->

module.exports = GameLoop
