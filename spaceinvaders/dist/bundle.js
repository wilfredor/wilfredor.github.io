/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 109:
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(i(1)),n=r(i(2)),s=r(i(4));t.createEmitter=function(e,t){var i=new s.default(e),r=new n.default;return new o.default(i,r,t)}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,i){void 0===i&&(i={}),this._particles=[],this._isLooping=!1,this._pause=!1,this._canvasRenderer=e,this._particleFactory=t,this._pause=!!i.pause}return Object.defineProperty(e.prototype,"isExploding",{get:function(){return!!this._particles.length},enumerable:!0,configurable:!0}),e.prototype.explode=function(e,t){if(void 0===t&&(t={}),e){for(var i=0;i<e;i++)this._createParticle(t);this._pause||this._isLooping||(this._isLooping=!0,this._drawLoop())}},e.prototype.draw=function(){var e=this;this.isExploding&&this._canvasRenderer&&(this._canvasRenderer.clear(),this._particles.forEach((function(t,i){t.update();var r=t.isActive,o=t.size,n=t.xPos,s=t.yPos,a=t.color;r?e._canvasRenderer.drawFilledCircle(o,n,s,a):e._removeParticle(i)})))},e.prototype._drawLoop=function(){this.isExploding?requestAnimationFrame(this._drawLoop.bind(this)):this._isLooping=!1,this.draw()},e.prototype._createParticle=function(e){void 0===e&&(e={}),"number"!=typeof e.xPos&&(e.xPos=this._canvasRenderer.canvasWidth/2),"number"!=typeof e.yPos&&(e.yPos=this._canvasRenderer.canvasHeight/2);var t=this._particleFactory.create(e);this._particles.push(t)},e.prototype._removeParticle=function(e){this._particles.splice(e,1)},e}();t.default=r},function(e,t,i){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(i(3)),n=function(){function e(){}return e.prototype.create=function(e){return void 0===e&&(e={}),new o.default(e)},e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){void 0===e&&(e={}),this.xPos=0,this.yPos=0,this.color="#000000",this._minSize=5,this._maxSize=30,this._minSpeed=50,this._maxSpeed=100,this._resistance=.85,this._gravity=.98,this._decay=.9,this._sizeToRemove=.1,this._xVel=Math.random()-.5,this._yVel=Math.random()-.5,"number"==typeof e.xPos&&(this.xPos=e.xPos),"number"==typeof e.yPos&&(this.yPos=e.yPos),"number"==typeof e.minSize&&(this._minSize=Math.max(e.minSize,.1)),"number"==typeof e.maxSize&&(this._maxSize=e.maxSize),"number"==typeof e.minSpeed&&(this._minSpeed=Math.max(e.minSpeed,.1)),"number"==typeof e.maxSpeed&&(this._maxSpeed=e.maxSpeed),"number"==typeof e.resistance&&(this._resistance=Math.max(e.resistance,0)),"number"==typeof e.gravity&&(this._gravity=Math.max(e.gravity,0)),"number"==typeof e.decay&&(this._decay=Math.max(e.decay,.1)),"number"==typeof e.sizeToRemove&&(this._sizeToRemove=Math.max(e.sizeToRemove,.1)),this.color=Array.isArray(e.color)?this._getRandomArrayItem(e.color):e.color,this.size=this._randomNumFromRange(this._minSize,this._maxSize),this._speed=this._randomNumFromRange(this._minSpeed,this._maxSpeed),this._xVel*=this._speed,this._yVel*=this._speed}return Object.defineProperty(e.prototype,"isActive",{get:function(){return this.size>this._sizeToRemove},enumerable:!0,configurable:!0}),e.prototype.update=function(){this.isActive&&(this._xVel*=this._resistance,this._yVel*=this._resistance,this.size*=this._decay,this.xPos+=this._xVel,this.yPos+=this._yVel,this.yPos+=this._gravity)},e.prototype._randomNumFromRange=function(e,t){void 0===e&&(e=0),void 0===t&&(t=0);var i=t-e+1,r=Math.random()*i;return Math.floor(r+e)},e.prototype._getRandomArrayItem=function(e){return e[Math.floor(Math.random()*e.length)]},e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this._ctx=e}return e.prototype.drawFilledCircle=function(e,t,i,r){this._ctx&&e&&"number"==typeof e&&("number"!=typeof t&&(t=this.canvasWidth/2),"number"!=typeof i&&(i=this.canvasHeight/2),this._ctx.beginPath(),this._ctx.arc(t,i,e/2,0,2*Math.PI),r&&"string"==typeof r&&(this._ctx.fillStyle=r),this._ctx.fill())},e.prototype.clear=function(){this._ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight)},Object.defineProperty(e.prototype,"canvasWidth",{get:function(){return this._ctx.canvas.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canvasHeight",{get:function(){return this._ctx.canvas.height},enumerable:!0,configurable:!0}),e}();t.default=r}])}));

/***/ }),

/***/ 124:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Colision = void 0;
var Colision = /** @class */ (function () {
    function Colision() {
    }
    //Check if a enemy in array is colision with a fire
    Colision.checkColision = function (x, y, width, height, enemies) {
        var fireBounds = {
            x1: x,
            y1: y,
            x2: x + width,
            y2: y + height,
        };
        var elementsNumber = enemies.length;
        for (var i = 0; i <= elementsNumber; i++) {
            if (enemies[i]) {
                var enemyBounds = {
                    x1: enemies[i].x,
                    y1: enemies[i].y,
                    x2: enemies[i].x + enemies[i].width,
                    y2: enemies[i].y + enemies[i].height,
                };
                if (this.checkVerticalCollision(fireBounds, enemyBounds) &&
                    this.checkHorizontalCollision(fireBounds, enemyBounds)) {
                    console.log("killed ".concat(i));
                    return i;
                }
            }
        }
        return -1;
    };
    Colision.checkVerticalCollision = function (bounds1, bounds2) {
        return bounds2.y2 <= bounds1.y2 && bounds2.y2 >= bounds1.y1 || bounds1.y1 >= bounds2.y1 && bounds1.y1 <= bounds2.y2;
    };
    Colision.checkHorizontalCollision = function (bounds1, bounds2) {
        return bounds1.x1 >= bounds2.x1 && bounds1.x1 <= bounds2.x2 || bounds2.x2 <= bounds1.x2 && bounds2.x2 >= bounds1.x1;
    };
    return Colision;
}());
exports.Colision = Colision;


/***/ }),

/***/ 913:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Config = void 0;
var Config = /** @class */ (function () {
    function Config() {
    }
    var _a;
    _a = Config;
    Config.canvas = document.getElementsByTagName("canvas")[0];
    Config.context = _a.canvas.getContext("2d");
    Config.game = document.getElementById('game');
    Config.enemyWidth = 30;
    Config.enemyHeight = 30;
    Config.naveWidth = 50;
    Config.naveHeight = 20;
    Config.naveLife = 3;
    Config.naveShots = 0;
    Config.naveMaxshots = 3;
    Config.firstSpeedLevel = 8000;
    Config.fireHeight = 20;
    Config.enemyFireSpeed = 1000;
    return Config;
}());
exports.Config = Config;


/***/ }),

/***/ 749:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemies = void 0;
var config_1 = __webpack_require__(913);
var enemy_1 = __webpack_require__(624);
var tools_1 = __webpack_require__(594);
var Enemies = /** @class */ (function () {
    function Enemies(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.reset();
        this.initEnemies();
        this.move();
    }
    Enemies.prototype.reset = function () {
        this.items = [];
        this.enemiesType = [];
    };
    //Remove a enemy bi index in enemies array
    Enemies.prototype.remove = function (index) {
        var _a, _b;
        (_a = this.items) === null || _a === void 0 ? void 0 : _a.splice(index, 1);
        this.game.score++;
        if (((_b = this.items) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            this.game.showMessage("You win");
            tools_1.Tool.removeEnemies();
            this.game.level++;
            //Init enemies array
            this.reset();
        }
    };
    Enemies.prototype.initEnemies = function () {
        var enemiesType = [];
        for (var i = 0; i <= 2; i++) {
            enemiesType[i] = new Image();
            enemiesType[i].src = "images/enemies".concat(i, ".svg");
        }
        var screenBorderWidth = config_1.Config.canvas.width - config_1.Config.enemyWidth;
        var screenBorderHeight = config_1.Config.canvas.height - config_1.Config.enemyHeight;
        var step = config_1.Config.enemyWidth * 2;
        for (var i = this.x + config_1.Config.enemyWidth, index = 0; i <= screenBorderWidth; i += step) {
            for (var j = this.y, enemyType = 0; j <= screenBorderHeight / 2 + screenBorderHeight / 6; j += config_1.Config.enemyHeight * 2, enemyType = Math.min(enemyType + 1, enemiesType.length - 1)) {
                var enemyElement = new enemy_1.Enemy(i, j, index, enemiesType[enemyType], this);
                this.items.push(enemyElement);
                index++;
            }
        }
        this.enemyFire(config_1.Config.enemyFireSpeed);
    };
    //paint all enemies
    Enemies.prototype.paint = function () {
        tools_1.Tool.removeEnemies();
        for (var i = 0; i <= this.items.length - 1; i++)
            this.items[i].paint();
        return true;
    };
    //move enemy elements  move elements enemies Horizontally and Vertically
    Enemies.prototype.moveXY = function (moveLeft) {
        if (!this.game.paused) {
            tools_1.Tool.removeEnemies(); // Clean enemies for repaint.
            var elementsNumber = this.items.length - 1;
            for (var i = 0; i <= elementsNumber; i++) {
                if (moveLeft !== null) {
                    // If move is horizontally.
                    this.items[i].x += moveLeft ? -this.items[i].width : this.items[i].width;
                }
                else {
                    // Else if move is vertically and step is 5.
                    this.items[i].y += config_1.Config.enemyHeight / 5;
                }
                this.items[i].paint(); // Repaint enemies in new x, y.
                // If enemy is in nave area.
                if (this.items[i].y >= config_1.Config.canvas.height - 3 * config_1.Config.naveHeight) {
                    this.game.showMessage("You are dead");
                    window.location.reload();
                    return false;
                }
            }
        }
        return true;
    };
    //move elements enemies Horizontally
    Enemies.prototype.moveX = function (move_left, speed) {
        var _this = this;
        setTimeout(function () {
            if (_this.moveXY(move_left)) {
                move_left = (!_this.game.paused) ? (!move_left) : (move_left); //If game is paused don't move Horizontally
                _this.moveX(move_left, speed);
            }
        }, speed);
    };
    //move elements enemies Vertically
    Enemies.prototype.moveY = function (speed) {
        var _this = this;
        setTimeout(function () {
            //window.enemies.y+=window.enemies.height/5;
            if (_this.moveXY(null))
                _this.moveY(speed);
        }, speed);
    };
    //Run fire to a enemy
    Enemies.prototype.enemyFire = function (speed) {
        var _this = this;
        //First enemy in last row
        setTimeout(function () {
            //Any enemy in last row
            var index = tools_1.Tool.randomRange(0, _this.items.length - 1);
            if (_this.items[index]) {
                _this.items[index].fire();
            }
            _this.enemyFire(speed);
        }, speed);
    };
    //move enemies Vertically and Horizontally in the screen
    Enemies.prototype.move = function () {
        this.moveX(true, 800);
        this.moveY(config_1.Config.firstSpeedLevel * this.game.level);
    };
    return Enemies;
}());
exports.Enemies = Enemies;
;


/***/ }),

/***/ 624:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
var config_1 = __webpack_require__(913);
var tools_1 = __webpack_require__(594);
var Enemy = /** @class */ (function () {
    function Enemy(x, y, index, enemyType, enemies) {
        this.width = config_1.Config.enemyWidth;
        this.height = config_1.Config.enemyHeight;
        this.x = x;
        this.y = y;
        this.index = index;
        this.img = enemyType;
        this.enemies = enemies;
        this.paint();
    }
    Enemy.prototype.paint = function () {
        config_1.Config.context.drawImage(this.img, this.x, this.y, config_1.Config.enemyWidth, config_1.Config.enemyHeight);
    };
    Enemy.prototype.Obstruction = function () {
        var elementNumber = this.enemies.items.length - 1;
        for (var i = 0; i <= elementNumber; i++) {
            if ((this.enemies.items[i].x == this.x) &&
                (this.enemies.items[i].index > this.index))
                return true;
        }
        return false;
    };
    ;
    //Enemy fire
    Enemy.prototype.fire = function () {
        if (!this.enemies.game.paused) {
            tools_1.Tool.directionFire(this.x, this.y, this.enemies.game);
        }
    };
    ;
    return Enemy;
}());
exports.Enemy = Enemy;


/***/ }),

/***/ 769:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
var tools_1 = __webpack_require__(594);
var Game = /** @class */ (function () {
    function Game() {
        this.level = 1;
        this.score = 0;
        this.life = 3;
    }
    Game.prototype.showMessage = function (messageContent) {
        var _this = this;
        this._paused = true;
        tools_1.Tool.printMessage(messageContent);
        if (messageContent != "Pause") {
            setTimeout(function () {
                _this._paused = false;
            }, 3000);
        }
    };
    Game.prototype.reload = function () {
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    };
    Game.prototype.pause = function (pause) {
        if (pause) {
            this.showMessage("Pause");
        }
        this._paused = pause;
    };
    Object.defineProperty(Game.prototype, "paused", {
        get: function () {
            return this._paused;
        },
        set: function (paused) {
            this._paused = paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "enemies", {
        get: function () {
            return this._enemies;
        },
        set: function (enemies) {
            this._enemies = enemies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "nave", {
        get: function () {
            return this._nave;
        },
        set: function (nave) {
            this._nave = nave;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (level) {
            this._level = level;
            this.setLabel('level', String(level));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "life", {
        get: function () {
            return this._life;
        },
        set: function (life) {
            this._life = life;
            this.setLabel('life', String(life));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (score) {
            this._score = score;
            this.setLabel('score', String(score));
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.setLabel = function (id, textContent) {
        var label = document.getElementById(id);
        if (label !== null) {
            label.textContent = textContent;
        }
    };
    Object.defineProperty(Game.prototype, "mouseX", {
        get: function () {
            return this._mouseX;
        },
        set: function (value) {
            this._mouseX = value;
        },
        enumerable: false,
        configurable: true
    });
    return Game;
}());
exports.Game = Game;
;


/***/ }),

/***/ 861:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nave = void 0;
var colision_1 = __webpack_require__(124);
var config_1 = __webpack_require__(913);
var tools_1 = __webpack_require__(594);
var particle_explosions_1 = __webpack_require__(109);
var Nave = /** @class */ (function () {
    function Nave(game) {
        var _this = this;
        this.shots = config_1.Config.naveShots;
        this.x = 0;
        this.life = config_1.Config.naveLife;
        this.y = config_1.Config.canvas.height - config_1.Config.naveHeight;
        this.game = game;
        this.paint();
        window.onkeydown = function (event) { _this.move(event); };
        window.onmousedown = function () { _this.fire(); };
        window.onmousemove = function (event) { _this.move(event); };
    }
    Nave.prototype.fire = function () {
        if (!this.game.paused) {
            if (this.shots <= config_1.Config.naveMaxshots) {
                this.shots++;
                this.directionFire(this.x + 25, config_1.Config.canvas.height - 60);
            }
        }
    };
    Nave.prototype.directionFire = function (x, y) {
        var _this = this;
        if ((y <= -config_1.Config.fireHeight))
            this.shots = 0;
        else {
            setTimeout(function () {
                if (y >= -config_1.Config.fireHeight) { //If the fire is in screen border	
                    tools_1.Tool.paintFire(x, y);
                    //if some enemy the fire stop
                    var enemyIndex = colision_1.Colision.checkColision(x, y, 7, 12, _this.game.enemies.items);
                    if (enemyIndex !== -1) {
                        var emitter = (0, particle_explosions_1.createEmitter)(config_1.Config.context, { pause: true });
                        emitter.explode(25, {
                            xPos: _this.game.enemies.items[enemyIndex].x,
                            yPos: _this.game.enemies.items[enemyIndex].y,
                            minSize: 1,
                            maxSize: 10,
                        });
                        emitter.draw();
                        _this.game.enemies.remove(enemyIndex);
                        y = -5;
                        _this.game.enemies.paint();
                    }
                    //Recursion, the shot is going
                    _this.directionFire(x, y - config_1.Config.fireHeight);
                }
            }, 30);
        }
    };
    Nave.prototype.paint = function () {
        tools_1.Tool.paintNave(this.x, this.y);
    };
    Nave.prototype.moveLeft = function (step) {
        this.x -= config_1.Config.naveWidth / step;
        if (this.x <= (-config_1.Config.naveWidth))
            this.x = config_1.Config.canvas.width - config_1.Config.naveWidth;
        this.paint();
    };
    Nave.prototype.moveRight = function (step) {
        this.x += config_1.Config.naveWidth / step;
        if (this.x >= config_1.Config.canvas.width)
            this.x = 0;
        this.paint();
    };
    Nave.prototype.move = function (event) {
        if (this.isPauseEvent(event)) {
            this.game.pause(!this.game.paused);
        }
        else if (!this.game.paused) {
            if (event instanceof MouseEvent) {
                this.handleMouseMovement(event);
            }
            else if (event instanceof KeyboardEvent) {
                this.handleKeyboardMovement(event);
            }
        }
    };
    Nave.prototype.isPauseEvent = function (event) {
        return event instanceof KeyboardEvent && event.code == 'KeyP';
    };
    Nave.prototype.handleMouseMovement = function (event) {
        var mouseXaux = event.clientX;
        if (this.game.mouseX > mouseXaux) {
            this.moveLeft(5);
        }
        else if (this.game.mouseX < mouseXaux) {
            this.moveRight(5);
        }
        this.game.mouseX = mouseXaux;
    };
    Nave.prototype.handleKeyboardMovement = function (event) {
        if (event.code === 'ArrowLeft') {
            this.moveLeft(2);
        }
        else if (event.code === 'ArrowRight') {
            this.moveRight(2);
        }
        else if (event.code === 'ControlLeft' || event.code === 'Space') {
            this.fire();
        }
    };
    return Nave;
}());
exports.Nave = Nave;
;


/***/ }),

/***/ 594:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tool = void 0;
var config_1 = __webpack_require__(913);
//Check if a var exist
var Tool = /** @class */ (function () {
    function Tool() {
    }
    //A random number multiple of 5
    Tool.randomRange = function (min, max) {
        return Math.round((Math.random() * (max - min) + min) / 5) * 5;
    };
    Tool.paintNave = function (x, y) {
        //paint nave in relative screen position
        config_1.Config.context.fillStyle = "#7fff00";
        config_1.Config.context.clearRect(0, config_1.Config.canvas.height - (config_1.Config.naveHeight + config_1.Config.naveHeight / 2), config_1.Config.canvas.width, config_1.Config.canvas.height);
        config_1.Config.context.fillRect(x, y, config_1.Config.naveWidth, config_1.Config.naveHeight);
        //Nave canon
        config_1.Config.context.fillRect(x + 24, config_1.Config.canvas.height - 30, 3, 5);
        config_1.Config.context.clearRect(x - 4, config_1.Config.canvas.height - 27, 7, 12);
        config_1.Config.context.fillRect(x + 22, config_1.Config.canvas.height - 25, 7, 12);
        config_1.Config.context.clearRect(x + config_1.Config.naveWidth - 3, config_1.Config.canvas.height - 27, 7, 12);
    };
    Tool.paintFire = function (x, y) {
        config_1.Config.context.clearRect(x, y + 20, 2, 12);
        config_1.Config.context.fillRect(x, y, 2, 12);
    };
    Tool.makefire = function (x, y) {
        //Make a fire and delete track
        config_1.Config.context.fillStyle = "#FF0000";
        config_1.Config.context.clearRect(x, y - 20, 3, 9);
        config_1.Config.context.fillRect(x, y, 3, 9);
        config_1.Config.context.fillStyle = "#7fff00";
    };
    Tool.printMessage = function (messageContent) {
        var x = config_1.Config.canvas.width / 2; //Center text in canvas 
        var y = config_1.Config.canvas.height / 2;
        config_1.Config.context.font = "30px Courier New";
        config_1.Config.context.fillStyle = 'white';
        config_1.Config.context.fill();
        config_1.Config.context.textAlign = 'center';
        config_1.Config.context.fillText(messageContent, x, y);
    };
    Tool.directionFire = function (x, y, game) {
        var _this = this;
        setTimeout(function () {
            if (y <= config_1.Config.canvas.height - 20) { //If the fire is not in screen border	
                //Make a fire and delete track
                Tool.makefire(x, y);
                //the fire resume trayectory
                _this.directionFire(x, y + 20, game);
            }
            else if ((x >= game.nave.x) && (x <= (game.nave.x + config_1.Config.enemyWidth))) {
                game.nave.life--;
                game.life = game.nave.life;
                if (game.nave.life <= 0) {
                    game.showMessage("You are dead");
                    game.reload();
                }
                else if (game.nave.life === 1) {
                    alert("You have only ".concat(game.nave.life, " life"));
                }
            }
            else
                config_1.Config.context.clearRect(x, y - 20, 3, 9);
        }, 30);
    };
    Tool.removeEnemies = function () {
        //Clean place
        //9 is the canon height
        config_1.Config.context.clearRect(0, 0, config_1.Config.canvas.width, config_1.Config.canvas.height - (config_1.Config.naveHeight + 9));
    };
    return Tool;
}());
exports.Tool = Tool;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var enemies_1 = __webpack_require__(749);
var game_1 = __webpack_require__(769);
var nave_1 = __webpack_require__(861);
window.onload = function () {
    var game = new game_1.Game();
    game.enemies = new enemies_1.Enemies(game);
    game.nave = new nave_1.Nave(game);
};

})();

/******/ })()
;