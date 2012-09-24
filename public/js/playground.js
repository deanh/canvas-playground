
(function(/*! Stitch !*/) {
  if (!this.require) {
    var modules = {}, cache = {}, require = function(name, root) {
      var path = expand(root, name), altPath = expand(path, './index'), module = cache[path], altModule = cache[altPath], fn;
      if (module) {
        return module.exports;
      }
      else if (altModule){
        return altModule.exports
      } else if (fn = modules[path] || modules[path = altPath]) {
        module = {id: path, exports: {}};
        try {
          cache[path] = module;
          fn(module.exports, function(name) {
            return require(name, dirname(path));
          }, module);
          return module.exports;
        } catch (err) {
          delete cache[path];
          throw err;
        }
      } else {
        throw 'module \'' + name + '\' not found';
      }
    }, expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    }, dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };
    this.require = function(name) {
      return require(name, '');
    }
    this.require.define = function(bundle) {
      for (var key in bundle)
        modules[key] = bundle[key];
    };
  }
  return this.require.define;
}).call(this)({"arrayEntityManager": function(exports, require, module) {(function() {
  var ArrayEntityManager;

  ArrayEntityManager = (function() {

    function ArrayEntityManager() {
      this.entities = [];
    }

    ArrayEntityManager.prototype.addEntity = function(e) {
      this.entities.push(e);
    };

    ArrayEntityManager.prototype.removeEntity = function(e) {
      var idx;
      idx = this.enities.indexOf(e);
      return this.entities.splice(idx, 1);
    };

    ArrayEntityManager.prototype.getEntityById = function(id) {
      var ent, _i, _len, _ref;
      _ref = this.entities;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ent = _ref[_i];
        if (ent.id === id) return ent;
      }
    };

    ArrayEntityManager.prototype.getRenderQueue = function() {
      return this.toArray();
    };

    ArrayEntityManager.prototype.update = function(tick, time) {
      var i, _base;
      i = 0;
      while (i < this.entities.length) {
        if (typeof (_base = this.entities[i]).update === "function") {
          _base.update(tick, time);
        }
        i++;
      }
    };

    ArrayEntityManager.prototype.toArray = function() {
      return this.entities;
    };

    return ArrayEntityManager;

  })();

  module.exports = ArrayEntityManager;

}).call(this);
}, "canvasPool": function(exports, require, module) {(function() {
  var CanvasPool;

  CanvasPool = (function() {

    function CanvasPool(num) {
      var i, _fn,
        _this = this;
      this._canvases = [];
      _fn = function() {
        var cvs;
        cvs = document.createElement("canvas");
        cvs.height = 128;
        cvs.width = 128;
        return _this._canvases.push(cvs);
      };
      for (i = 1; 1 <= num ? i <= num : i >= num; 1 <= num ? i++ : i--) {
        _fn();
      }
    }

    return CanvasPool;

  })();

  module.exports = CanvasPool;

}).call(this);
}, "canvasRenderer": function(exports, require, module) {(function() {
  var CanvasRenderer;

  CanvasRenderer = (function() {

    function CanvasRenderer(el) {
      this.screenBuffer = el;
      this.screenBufferCtx = this.screenBuffer.getContext('2d');
      this.width = parseInt(window.getComputedStyle(el).getPropertyValue("width"), 10);
      this.height = parseInt(window.getComputedStyle(el).getPropertyValue("height"), 10);
      this.backBuffer = document.createElement("canvas");
      this.backBuffer.height = this.height;
      this.backBuffer.width = this.width;
      this.backBufferCtx = this.backBuffer.getContext('2d');
    }

    CanvasRenderer.prototype.clearFrame = function(ctx) {
      return ctx.clearRect(0, 0, this.width, this.height);
    };

    CanvasRenderer.prototype.render = function(renderQueue) {
      var backCtx, ctx, i;
      ctx = this.screenBufferCtx;
      this.clearFrame(ctx);
      ctx.drawImage(this.backBuffer, 0, 0);
      backCtx = this.backBufferCtx;
      this.clearFrame(backCtx);
      i = 0;
      while (i < renderQueue.length) {
        renderQueue[i].draw(ctx);
        i++;
      }
    };

    return CanvasRenderer;

  })();

  module.exports = CanvasRenderer;

}).call(this);
}, "entity": function(exports, require, module) {(function() {
  var Entity;

  Entity = (function() {

    function Entity(options) {
      var rotation, x, y, _ref;
      if (options == null) options = {};
      this.rect = (_ref = options.rect) != null ? _ref : null;
      x = options.x, y = options.y, rotation = options.rotation;
      this.position = {
        x: x,
        y: y,
        rotation: rotation
      };
      if ((this.rect != null) && (options.linkedRect != null)) {
        this.rect.position = this.position;
      }
    }

    Entity.prototype.moveTo = function(pt) {
      if ((pt.x != null) && (pt.y != null)) return this.position = pt;
    };

    Entity.prototype.update = function(tick, coeff) {};

    Entity.prototype.draw = function(ctx) {
      return this.rect.draw(ctx);
    };

    Entity.prototype.contains = function(x, y) {
      if ((this.rect != null) && this.linkedRect) return this.rect.contains(x, y);
    };

    return Entity;

  })();

  module.exports = Entity;

}).call(this);
}, "entityManager": function(exports, require, module) {(function() {
  var ArrayEntityManager;

  ArrayEntityManager = (function() {

    function ArrayEntityManager() {
      this.entities = [];
    }

    ArrayEntityManager.prototype.addEntity = function(e) {
      return this.entities.push(e);
    };

    ArrayEntityManager.prototype.removeEntity = function(e) {
      var idx;
      idx = this.enities.indexOf(e);
      return this.entities.splice(idx, 1);
    };

    ArrayEntityManager.prototype.toArray = function() {
      return this.entities.slice();
    };

    return ArrayEntityManager;

  })();

  module.exports = ArrayEntityManager;

}).call(this);
}, "gameLoop": function(exports, require, module) {(function() {
  var CanvasRenderer, EntityManager, GameLoop, perf, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  CanvasRenderer = require("canvasRenderer");

  EntityManager = require("arrayEntityManager");

  root = typeof window !== "undefined" && window !== null ? window : global;

  root.requestAnimationFrame || (root.requestAnimationFrame = root.webkitRequestAnimationFrame || root.mozRequestAnimationFrame || root.oRequestAnimationFrame || root.msRequestAnimationFrame || function(cb, elt) {
    return root.setTimeout(function() {
      return cb(+new Date());
    }, 1000 / 60);
  });

  root.cancelAnimationFrame || (root.cancelAnimationFrame = root.webkitCancelRequestAnimationFrame || root.mozCancelRequestAnimationFrame || root.oCancelRequestAnimationFrame || root.msCancelRequestAnimationFrame || function(id) {
    return clearTimeout(id);
  });

  root.performance || (root.performance = {});

  perf = root.performance;

  perf.now || (perf.now = perf.webkitNow || perf.mozNow || perf.msNow || perf.oNow || function() {
    return +(new Date());
  });

  GameLoop = (function() {

    function GameLoop(cvs) {
      this.run = __bind(this.run, this);      this.renderer = new CanvasRenderer(cvs);
      this.entityManager = new EntityManager;
      this.tick = 0;
      this.frameId = null;
    }

    GameLoop.prototype.addEntity = function(e) {
      this.entityManager.addEntity(e);
    };

    GameLoop.prototype.start = function() {
      this.frameId = root.requestAnimationFrame(this.run);
    };

    GameLoop.prototype.stop = function() {
      return root.cancelAnimationFrame(this.frameId);
    };

    GameLoop.prototype.run = function(time) {
      var em, renderQueue;
      if (time == null) time = perf.now();
      em = this.entityManager;
      this.frameId = root.requestAnimationFrame(this.run);
      em.update(this.tick, time);
      renderQueue = em.getRenderQueue();
      this.renderer.render(renderQueue);
    };

    return GameLoop;

  })();

  module.exports = GameLoop;

}).call(this);
}, "main": function(exports, require, module) {(function() {
  var CanvasPool, Entity, GameLoop, Main, Text;

  GameLoop = require("gameLoop");

  Entity = require("entity");

  Text = require("rect/textBox");

  CanvasPool = require("canvasPool");

  Main = (function() {

    function Main() {}

    Main.start = function(canvasElement) {
      var cvs, gameLoop, hello, helloRect, pool;
      cvs = document.getElementById(canvasElement);
      console.log(cvs);
      pool = new CanvasPool(300);
      gameLoop = new GameLoop(cvs);
      window._game = gameLoop;
      helloRect = new Text({
        textString: "Hello, Cascadia!",
        maxWidth: 300
      });
      hello = new Entity({
        x: 300,
        y: 300,
        rotation: 0,
        rect: helloRect,
        linkedRect: true
      });
      hello.update = function() {
        this.position.rotation = this.position.rotation + Math.PI / 180;
      };
      gameLoop.addEntity(hello);
      return gameLoop.start();
    };

    return Main;

  })();

  module.exports = Main;

}).call(this);
}, "rect": function(exports, require, module) {(function() {
  var Rect;

  Rect = (function() {

    function Rect(options) {
      var rotation, x, y, _ref, _ref2, _ref3;
      if (options == null) options = {};
      this.visible = (_ref = options != null ? options.visible : void 0) != null ? _ref : true;
      this.width = (_ref2 = options != null ? options.width : void 0) != null ? _ref2 : 1;
      this.height = (_ref3 = options != null ? options.height : void 0) != null ? _ref3 : 1;
      x = options.x, y = options.y, rotation = options.rotation;
      this.position = {
        x: x,
        y: y
      };
      this.needsRedraw = true;
    }

    Rect.prototype.isVisible = function() {
      return this.visible && this.width > 0 && this.height > 0;
    };

    Rect.prototype.draw = function(canvasCtx) {
      if (!this.isVisible()) return;
      throw new Error("You need to implement draw()");
    };

    Rect.prototype.contains = function(otherX, otherY) {
      var x, y, _ref;
      _ref = this.position, x = _ref.x, y = _ref.y;
      return (otherX >= x && otherX <= x + this.width) && (otherY >= y && otherY <= y + this.height);
    };

    return Rect;

  })();

  module.exports = Rect;

}).call(this);
}, "rect/compositeRect": function(exports, require, module) {(function() {
  var CompositeRect, Rect,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Rect = require("../rect");

  CompositeRect = (function(_super) {

    __extends(CompositeRect, _super);

    function CompositeRect(options) {
      if (options == null) options = {};
      CompositeRect.__super__.constructor.call(this, options);
      this._rects = [];
    }

    CompositeRect.prototype.addRect = function(rect) {
      return this._rects.push(rect);
    };

    CompositeRect.prototype.removeRect = function(rect) {
      var idx;
      idx = this._rects.indexOf(rect);
      this._rects.splice(idx, 1);
      return rect;
    };

    CompositeRect.prototype.isVisible = function() {
      var rect, _i, _len, _ref;
      _ref = this._rects;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        rect = _ref[_i];
        if (rect.isVisible) return true;
      }
    };

    CompositeRect.prototype.draw = function(canvasCtx) {
      var rect, _i, _len, _ref, _results;
      _ref = this._rects;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        rect = _ref[_i];
        _results.push(rect.draw(canvasCtx));
      }
      return _results;
    };

    CompositeRect.prototype.intersects = function(other) {
      var rect, _i, _len, _ref;
      _ref = this._rects;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        rect = _ref[_i];
        if (rect.intersects(other)) return true;
      }
    };

    CompositeRect.prototype.contains = function(otherX, otherY) {
      var rect, _i, _len, _ref;
      _ref = this._rects;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        rect = _ref[_i];
        if (rect.contains(otherX, otherY)) return true;
      }
    };

    return CompositeRect;

  })(Rect);

  module.exports = CompositeRect;

}).call(this);
}, "rect/roundedBox": function(exports, require, module) {(function() {
  var Rect, RoundedBox,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Rect = require("../rect");

  RoundedBox = (function(_super) {

    __extends(RoundedBox, _super);

    function RoundedBox(options) {
      var _ref, _ref2;
      if (options == null) options = {};
      RoundedBox.__super__.constructor.call(this, options);
      this.radius = (_ref = options.radius) != null ? _ref : 5;
      this.fill = (_ref2 = options.fill) != null ? _ref2 : "rgba(0, 0, 0, 0.8)";
    }

    RoundedBox.prototype.draw = function(ctx) {
      var x, y, _ref;
      _ref = this.position, x = _ref.x, y = _ref.y;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x + this.radius, y);
      ctx.lineTo(x + this.width - this.radius, y);
      ctx.quadraticCurveTo(x + this.width, y, x + this.width, y + this.radius);
      ctx.lineTo(x + this.width, y + this.height - this.radius);
      ctx.quadraticCurveTo(x + this.width, y + this.height, x + this.width - this.radius, y + this.height);
      ctx.lineTo(x + this.radius, y + this.height);
      ctx.quadraticCurveTo(x, y + this.height, x, y + this.height - this.radius);
      ctx.lineTo(x, y + this.radius);
      ctx.quadraticCurveTo(x, y, x + this.radius, y);
      ctx.closePath();
      if (this.stroke) ctx.stroke();
      ctx.fillStyle = this.fill;
      ctx.fill();
      return ctx.restore();
    };

    return RoundedBox;

  })(Rect);

  module.exports = RoundedBox;

}).call(this);
}, "rect/textBox": function(exports, require, module) {(function() {
  var Rect, TextBox,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Rect = require("../rect");

  TextBox = (function(_super) {

    __extends(TextBox, _super);

    function TextBox(options) {
      var _ref, _ref2, _ref3, _ref4;
      if (options == null) options = {};
      TextBox.__super__.constructor.call(this, options);
      this._textString = (_ref = options.textString) != null ? _ref : "";
      this.fill = (_ref2 = options.fill) != null ? _ref2 : "#000";
      this.font = (_ref3 = options.font) != null ? _ref3 : "36px monospace";
      this.maxWidth = (_ref4 = options.maxWidth) != null ? _ref4 : 200;
    }

    TextBox.prototype.setText = function(str) {
      return this._textString = str;
    };

    TextBox.prototype.setFill = function(fillStr) {
      return this.fill = fillStr;
    };

    TextBox.prototype.draw = function(ctx) {
      var rotation, x, y, _ref;
      _ref = this.position, x = _ref.x, y = _ref.y, rotation = _ref.rotation;
      ctx.save();
      ctx.translate(x << 0, y << 0);
      ctx.rotate(rotation);
      ctx.fillStyle = this.fill;
      ctx.font = this.font;
      ctx.fillText(this._textString, 0, 0, this.maxWidth);
      ctx.restore();
    };

    return TextBox;

  })(Rect);

  module.exports = TextBox;

}).call(this);
}});
