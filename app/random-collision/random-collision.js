/**
 *created by heathstein on 8/28/16.
 */
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
var RandomCollision = (function () {
    function RandomCollision(elementRef) {
        this.dotArray = new Array();
        this.giants = new Array();
        this.numToRun = 5;
        this.winners = new Array();
        this.displayWinners = [];
        this.averageColor = "white";
        this.startAnimation = false;
        this.dotSpeed = 3;
        this.requestAnimation = undefined;
        this.reset = false;
        this.dotNumber = 100;
        this.showPlayPause = true;
    }
    RandomCollision.prototype.onChange = function () {
    };
    RandomCollision.prototype.stopAnimationFrame = function () {
        if (this.requestAnimation) {
            cancelAnimationFrame(this.requestAnimation);
            this.requestAnimation = undefined;
        }
    };
    RandomCollision.prototype.ngAfterViewInit = function () {
        this.setUp();
        this.start();
    };
    RandomCollision.prototype.setUp = function () {
        this.numRun = 0;
        this.displayWinners = [];
        this.giants = [
            { index: 456, color: '#fd016c' },
            { index: 457, color: '#28ce24' },
            { index: 458, color: '#61c4e2' }
        ];
        for (var i = 0; i < this.giants.length; i++) {
            this.displayWinners.push({ wins: 0, color: this.giants[i].color });
        }
        this.displayWinners.push({ wins: 0, color: this.averageColor });
        this.canvas = this.canvasElem.nativeElement;
        this.context = this.canvas.getContext('2d');
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        this.fps = 1400;
        this.dx = this.dotSpeed;
        this.dy = -this.dotSpeed;
        this.giantSize = 6;
        this.averageRange = 1;
        this.totalMass = 0;
        this.massPresent = .8;
        this.showPlayPause = true;
    };
    RandomCollision.prototype.start = function () {
        this.dotArray = [];
        this.numRun++;
        for (var i = 0; i < this.giants.length; i++) {
            this.createGiants(this.giants[i].index, this.giants[i].color);
        }
        this.createDots();
        this.draw();
        this.requestAnimation = undefined;
    };
    RandomCollision.prototype.toggleAnimation = function () {
        if (this.numToRun < 1) {
            this.start();
        }
        else {
            this.startAnimation = !this.startAnimation;
            this.draw();
        }
    };
    RandomCollision.prototype.createGiants = function (index, color) {
        var x = this.canvas.width * Math.random();
        var y = this.canvas.height * Math.random();
        var radius = this.giantSize;
        var dot1 = new dot(x, y, radius, color, index, this.dx, this.dy, color);
        this.dotArray.push(dot1);
    };
    RandomCollision.prototype.game = function (dot) {
        this.winners.push(dot);
        var obj = _.findIndex(this.displayWinners, { 'color': dot.color });
        this.displayWinners[obj].wins++;
        cancelAnimationFrame(this.requestAnimation);
        if ((this.numToRun - this.numRun) < 1) {
            this.showPlayPause = false;
            return false;
        }
        else {
            this.start();
        }
    };
    RandomCollision.prototype.onReset = function () {
        // console.log('this.requestAnimation' , this.requestAnimation)
        cancelAnimationFrame(this.requestAnimation);
        this.startAnimation = false;
        this.setUp();
        this.start();
    };
    RandomCollision.prototype.draw = function () {
        if (this.dotArray.length == 1) {
            this.game(this.dotArray[0]);
            return false;
        }
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.dotArray.length; i++) {
            this.drawDot(this.dotArray[i], i);
        }
        var that = this;
        if (this.startAnimation) {
            this.requestAnimation = requestAnimationFrame(that.draw.bind(that));
        }
    };
    RandomCollision.prototype.drawDot = function (dot, i) {
        // Flickering Object not moving x or y after eating mass at the edge of the canvas.
        // Issue is that
        dot.previousX = dot.x;
        dot.priviousY = dot.y;
        if (dot.x + dot.dx > this.canvas.width - dot.radius || dot.x + dot.dx < dot.radius) {
            dot.dx = -dot.dx;
        }
        if (dot.y + dot.dy > this.canvas.height - dot.radius || dot.y + dot.dy < dot.radius) {
            dot.dy = -dot.dy;
        }
        dot.x += (dot.dx * this.dotSpeed);
        dot.y += (dot.dy * this.dotSpeed);
        if (dot.x > this.canvas.width - dot.radius || dot.x + dot.dx < dot.radius) {
        }
        this.context.beginPath();
        this.context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = dot.color;
        this.context.fill();
        this.collideTestLoop(dot);
    };
    RandomCollision.prototype.collideTestLoop = function (dot) {
        for (var i = 0; i < this.dotArray.length; i++) {
            var dot2 = this.dotArray[i];
            var hit = this.collideTest(dot, this.dotArray[i], 0, 0);
            if (hit) {
                this.handelCollision(dot, this.dotArray[i]);
            }
        }
    };
    RandomCollision.prototype.handelCollision = function (dot1, dot2) {
        if (dot1.radius > dot2.radius) {
            dot1.radius += dot2.radius * this.massPresent;
            var index = _.findIndex(this.dotArray, { index: dot2.index });
            dot1.eat(dot2);
            this.dotArray.splice(index, 1);
            /*  CHECK IF MASS IS EATEN AND MAKES OBJECT EXTEND OUTSIDE BOUNDING BOX */
            if (dot1.x + dot1.dx > this.canvas.width - dot1.radius) {
                dot1.x = this.canvas.width - dot1.radius;
            }
            if (dot1.y + dot1.dy > this.canvas.height - dot1.radius) {
                dot1.y = this.canvas.height - dot1.radius;
            }
            if (dot1.x + dot1.dx < dot1.radius) {
                dot1.x = dot1.radius;
            }
            if (dot1.y + dot1.dy < dot1.radius) {
                dot1.y = dot1.radius;
            }
        }
        else {
            dot2.radius += dot1.radius * this.massPresent;
            var index = _.findIndex(this.dotArray, { index: dot1.index });
            this.dotArray.splice(index, 1);
            /*  CHECK IF MASS IS EATEN AND MAKES OBJECT EXTEND OUTSIDE BOUNDING BOX */
            if (dot2.x + dot2.dx > this.canvas.width - dot2.radius) {
                dot2.x = this.canvas.width - dot2.radius;
            }
            if (dot2.y + dot2.dy > this.canvas.height - dot2.radius) {
                dot2.y = this.canvas.height - dot2.radius;
            }
            if (dot2.x + dot2.dx < dot2.radius) {
                dot2.x = dot2.radius;
            }
            if (dot2.y + dot2.dy < dot2.radius) {
                dot2.y = dot2.radius;
            }
        }
    };
    RandomCollision.prototype.collideTest = function (dot1, dot2, d1x, d1y) {
        if (dot1.index !== dot2.index) {
            //IF OBJECTS ARE FARTHER AWAY THEN this.dotSpeed then they cant collide
            //
            //     if (Math.abs( (dot1.x + dot1.radius) - (dot2.x + dot2.radius )) > this.dotSpeed || Math.abs((dot1.y + dot1.radius) - (dot2.y + dot2.radius)) > this.dotSpeed ) {
            //         return false;
            //     }else{
            //         //console.log( dot2 + " is close enhough")
            //         console.log(" ------------ " );
            //         console.log(" dot1 ", dot1);
            //         console.log(" do21 ", dot2);
            //         console.log(" Math.abs(dot1x - dot2.X) ", Math.abs(dot1.x - dot2.x));
            //         console.log(" Math.abs(dot1.Y - dot2.Y) ", Math.abs(dot1.y - dot2.y));
            //         console.log(" this.dotSpeed ", this.dotSpeed);
            //         this.startAnimation = false;
            //
            //     }
            //
            //
            //
            // }
            var dx = (dot1.x - d1x) - (dot2.x - d1x);
            var dy = (dot1.y - d1y) - (dot2.y - d1y);
            var distance = Math.sqrt(dx * dx + dy * dy);
            return this.checkHit(distance, dot1, dot2);
        }
    };
    RandomCollision.prototype.checkHit = function (distance, dot1, dot2) {
        if (distance < dot1.radius + dot2.radius) {
            return true;
        }
        else {
            return false;
        }
    };
    RandomCollision.prototype.createDots = function () {
        for (var i = 0; i < this.dotNumber; i++) {
            this.createDot(i);
        }
    };
    RandomCollision.prototype.createDot = function (index) {
        var x = this.canvas.width * Math.random();
        var y = this.canvas.height * Math.random();
        var radius = this.getRandomInt(.1, .7);
        var color = this.averageColor;
        var dot1 = new dot(x, y, radius, color, index, this.dx, this.dy, 'average');
        this.dotArray.push(dot1);
    };
    RandomCollision.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    __decorate([
        core_1.ViewChild('canvasElem'), 
        __metadata('design:type', core_1.ElementRef)
    ], RandomCollision.prototype, "canvasElem", void 0);
    __decorate([
        core_1.ViewChild('parentElm'), 
        __metadata('design:type', core_1.ElementRef)
    ], RandomCollision.prototype, "parentElem", void 0);
    RandomCollision = __decorate([
        core_1.Component({
            selector: 'random-collision',
            // directives: [],
            template: "\n    <style>\n    \n     label{\n         font-weight: normal;\n         font-size:12px;\n         margin-top:8px;\n     }\n     \n    .block{\n        float:left;\n        width:70px;\n        text-align: center;\n        padding:10px;\n       \n    }\n    \n     .circles{\n         overflow: hidden;\n         height: auto;  \n         padding:8px;\n    }\n    \n     .circle {\n        border-radius: 50%;\n        width: 45px;\n        height: 45px;\n        border: 1px solid #303030;\n        text-align: center;\n        \n    }\n    \n    \n    \n    \n    .wins{\n        margin:12px 0px 0px 0px;\n        display:block;\n        font-size:16px;\n        font-weight:bold;\n    }\n    \n    </style>\n    \n    \n    <div class=\"particle-container\" #parentElm id=\"peParentElement\">\n    \n    <canvas #myImg id=\"collision-container\" #canvasElem  width=\"600\" height=\"400\" style=\"border:1px solid #000000; background-color:#000\"></canvas>\n    \n     <div class=\"try\">\n        <div class=\"panel panel-primary\" style=\"margin:0px 0px 0px 10px; height:402px\" >\n        <div class=\"panel-heading\">Particle Collision</div>\n        <div class=\"panel-body\">\n        \n        <div style=\"width: 180\">\n         <div *ngIf=\"showPlayPause\" class=\"btn btn-info btn-sm\" (click)=\"toggleAnimation() \"> \n            <i  [ngClass]=\"{'fa-pause': startAnimation, 'fa-play': !startAnimation}\" class=\"fa \"></i>\n         </div>\n         \n          <div class=\"btn btn-success btn-sm\" (click)=\"onReset() \"> \n            Reset\n         </div>\n         </div>\n         \n         <hr/>\n         \n         \n        <span class=\"label\" style=\"color: #000\">Games Left:</span> <span class=\"label label-danger\" >{{numToRun -numRun}}</span>\n        \n              <label>Games to run: {{numToRun}}</label>\n              <input (change)=\"onChange()\"  [(ngModel)]=\"numToRun\" name=\"numVal\" min=\"1\" max=\"100\" type=\"range\"  >\n               \n        \n               <label>Dot Speed {{dotSpeed}}</label>\n               <input (change)=\"onChange()\"  [(ngModel)]=\"dotSpeed\" name=\"numVal\" min=\"1\" max=\"5\" type=\"range\"  >\n           \n               <label>Random White Dots {{dotNumber}}</label>\n               <input (change)=\"onChange()\"  [(ngModel)]=\"dotNumber\" name=\"numVal\" min=\"120\" max=\"300\" type=\"range\"  >\n           \n        \n                 <div class=\"circles\" >\n                     <div class=\"block\" *ngFor=\"let giant of displayWinners \"> \n                         <div class=\"circle pull-left\" [style.background]=\"giant.color\"> <span class=\"wins\">{{giant.wins}}</span> </div> \n                     </div>\n                 </div>\n        </div>\n        </div>\n      </div>\n    \n    </div>    \n"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], RandomCollision);
    return RandomCollision;
}());
exports.RandomCollision = RandomCollision;
var dot = (function () {
    function dot(x, y, radius, color, index, dx, dy, type) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.index = index;
        this.dx = dx;
        this.dy = dy;
        this.type = type;
        this.previousX = 0;
        this.previousY = 0;
        this.eaten = [];
        this.startMass = radius;
        this.previousX = x;
        this.previousY = y;
    }
    dot.prototype.eat = function (dot) {
        this.eaten.push(dot);
        this.massEaten += dot.radius;
    };
    return dot;
}());
exports.dot = dot;
//# sourceMappingURL=random-collision.js.map