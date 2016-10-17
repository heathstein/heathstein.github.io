"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ExplodedTiles = (function () {
    function ExplodedTiles(elementRef) {
        this.TILE_WIDTH = 20;
        this.TILE_HEIGHT = 20;
        this.SOURCERECT = { x: 0, y: 0, width: 0, height: 0 };
        this.PAINTRECT = { x: 0, y: 0, width: 1000, height: 600 };
        this.tiles = new Array();
        this.force = 3;
    }
    ExplodedTiles.prototype.init = function () {
        var _this = this;
        this.canvas = this.canvasElement.nativeElement;
        this.draw = this.canvas.getContext('2d');
        this.parentCnt = this.parentElm;
        this.createTiles();
        setInterval(function () { _this.processFrame(); }, 33);
    };
    ExplodedTiles.prototype.processFrame = function () {
        this.drawTiles();
    };
    ;
    ExplodedTiles.prototype.ngAfterViewInit = function () {
        this.init();
    };
    ExplodedTiles.prototype.onChange = function () {
        console.log("change::::::::::s");
        this.TILE_WIDTH = parseInt(this.TILE_WIDTH);
        this.TILE_HEIGHT = parseInt(this.TILE_HEIGHT);
        this.tiles = [];
        this.createTiles();
    };
    ExplodedTiles.prototype.createTiles = function () {
        this.SOURCERECT = { x: 0, y: 0, width: this.canvas.width, height: this.canvas.height };
        var offsetX = 0;
        var offsetY = 0;
        var y = 0;
        console.log("this.SOURCERECT.height : ", this.SOURCERECT.height);
        console.log("y : ", y);
        while (y < this.SOURCERECT.height) {
            var x = 0;
            while (x < this.SOURCERECT.width) {
                var tile = new Tile(0, 0, 0, 0, 0, 0, 0, 0, 0, '#000000', 0, 0);
                tile.videoX = x;
                tile.videoY = y;
                tile.originX = offsetX + x;
                tile.originY = offsetY + y;
                tile.currentX = tile.originX;
                tile.currentY = tile.originY;
                // tile.color = '#'+Math.floor(Math.random()*16777215).toString(16);
                tile.color = this.hslToFillStyle(tile.originX / this.SOURCERECT.width * 360, 50, 50, 0.5);
                //console.log(tile.color);
                this.tiles.push(tile);
                x += this.TILE_WIDTH;
            }
            y += this.TILE_HEIGHT;
            console.log("this.TILE_HEIGHT ", this.TILE_HEIGHT);
            console.log("y ", y);
            console.log("this.SOURCERECT.height ", this.SOURCERECT.height);
        }
        console.log("this.tiles ", this.tiles);
    };
    ExplodedTiles.prototype.hslToFillStyle = function (h, s, l, a) {
        if (a === undefined) {
            return ["hsl(", h, ",", s, "%,", l, "%)"].join('');
        }
        else {
            return ["hsla(", h, ",", s, "%,", l, "%,", a, ")"].join('');
        }
    };
    ExplodedTiles.prototype.explode = function (evt) {
        var x = evt.offsetX;
        var y = evt.offsetY;
        for (var i = 0; i < this.tiles.length; i++) {
            var tile = this.tiles[i];
            var xdiff = tile.currentX - x;
            var ydiff = tile.currentY - y;
            var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
            var randRange = 220 + (Math.random() * 30);
            var range = randRange - dist;
            var force = this.force * (range / randRange);
            if (force > tile.force) {
                tile.force = force;
                var radians = Math.atan2(ydiff, xdiff);
                tile.moveX = Math.cos(radians);
                tile.moveY = Math.sin(radians);
                tile.moveRotation = 0.5 - Math.random();
            }
        }
        //tiles.sort(zindexSort);
        this.processFrame();
    };
    ExplodedTiles.prototype.mouseMove = function () {
    };
    ExplodedTiles.prototype.drawTiles = function () {
        this.draw.clearRect(this.PAINTRECT.x, this.PAINTRECT.y, this.PAINTRECT.width, this.PAINTRECT.height);
        for (var i = 0; i < this.tiles.length; i++) {
            var tile = this.tiles[i];
            if (tile.force > 0.0001) {
                //expand
                tile.moveX *= tile.force;
                tile.moveY *= tile.force;
                tile.moveRotation *= tile.force;
                tile.currentX += tile.moveX;
                tile.currentY += tile.moveY;
                tile.force *= 0.85;
                if (tile.currentX <= 0 || tile.currentX >= this.PAINTRECT.width) {
                    tile.moveX *= -1;
                }
                if (tile.currentY <= 0 || tile.currentY >= this.PAINTRECT.height) {
                    tile.moveY *= -1;
                }
                if (i == 0) {
                    console.log(i, tile.moveX);
                    console.log(i, tile.force);
                }
            }
            else if (tile.rotation != 0 || tile.currentX != tile.originX || tile.currentY != tile.originY) {
                var diffx = (tile.originX - tile.currentX) * 0.2;
                var diffy = (tile.originY - tile.currentY) * 0.2;
                var diffRot = (0 - tile.rotation) * 0.2;
                if (Math.abs(diffx) < 0.5) {
                    tile.currentX = tile.originX;
                }
                else {
                    tile.currentX += diffx;
                }
                if (Math.abs(diffy) < 0.5) {
                    tile.currentY = tile.originY;
                }
                else {
                    tile.currentY += diffy;
                }
            }
            else {
                tile.force = 0;
            }
            //draw.translate(tile.currentX, tile.currentY);
            this.draw.fillStyle = tile.color;
            this.draw.fillRect(tile.currentX, tile.currentY, this.TILE_WIDTH - 1, this.TILE_HEIGHT - 1);
        }
    };
    __decorate([
        core_1.ViewChild('canvasElement'), 
        __metadata('design:type', core_1.ElementRef)
    ], ExplodedTiles.prototype, "canvasElement", void 0);
    __decorate([
        core_1.ViewChild('parentElm'), 
        __metadata('design:type', core_1.ElementRef)
    ], ExplodedTiles.prototype, "parentElm", void 0);
    ExplodedTiles = __decorate([
        core_1.Component({
            selector: 'exploded-tiles',
            // directives: [],
            template: "\n    <style>\n      .particle-container .try{\n        left:800px;\n      }\n         label{\n     font-weight: normal;\n     font-size:12px;\n     margin-top:8px;\n     }\n    </style>\n    \n    \n    \n    <div class=\"particle-container\"  #parentElm id=\"peParentElement\">\n    <canvas  id=\"exploded-tiles\" #canvasElement  (mousedown)=\"explode($event)\" (mousemove)=\"mouseMove($event)\" width=\"790\" height=\"400\"></canvas>\n    <div class=\"try\">\n    \n    \n        <div class=\"panel panel-primary\" style=\"margin:0px 0px 0px 10px; height:402px\" >\n        <div class=\"panel-heading\">Tiles Controls</div>\n        <div class=\"panel-body\">\n               \n              \n              \n               <label>Force: {{force}}</label> \n               <input (change)=\"onChange()\"  [(ngModel)]=\"force\" name=\"numVal\" min=\"1\" max=\"8\" type=\"range\"   >\n              \n              \n               <label>Tile Width {{TILE_WIDTH}}</label> \n               <input (change)=\"onChange()\"  [(ngModel)]=\"TILE_WIDTH\" name=\"numVal\" min=\"10\" max=\"40\" type=\"range\"   >\n              \n                <label>Tile Height {{TILE_HEIGHT}}</label> \n                <input (change)=\"onChange()\"  [(ngModel)]=\"TILE_HEIGHT\" name=\"numVal\" min=\"10\" max=\"40\" type=\"range\"   >\n              \n                 <div style=\"font-size: 10px; margin-top: 30px\"><i >*Click on Tiles to to explode</i></div>\n\n               \n                </div>\n        </div>\n    \n    \n    \n    \n\n    </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ExplodedTiles);
    return ExplodedTiles;
}());
exports.ExplodedTiles = ExplodedTiles;
var Tile = (function () {
    //new tile(0,0,0,0,0,0,0,0,0,'#000000',0,0);
    function Tile(originX, originY, currentX, currentY, rotation, force, z, moveX, moveY, moveRotation, color, videoX, videoY) {
        this.originX = originX;
        this.originY = originY;
        this.currentX = currentX;
        this.currentY = currentY;
        this.rotation = rotation;
        this.force = force;
        this.z = z;
        this.moveX = moveX;
        this.moveY = moveY;
        this.moveRotation = moveRotation;
        this.color = color;
        this.videoX = videoX;
        this.videoY = videoY;
    }
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=exploded-tiles.js.map