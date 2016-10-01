/**
 * Created by 212544474 on 3/24/2016.
 */
/**
 * Created by 212544474 on 2/12/2016.
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
/// <reference path="three.d.ts" />
var core_1 = require('@angular/core');
var CanvasArt = (function () {
    function CanvasArt(elementRef) {
        this.setDefaults();
    }
    CanvasArt.prototype.ngAfterViewInit = function () {
        this.scene = new Scene(this.parentElm, this.canvasElem, this.numDots, this.speedPrecent, this.attractSpeed, this.attractDistance);
        this.scene.toggleOnOff();
    };
    CanvasArt.prototype.onChange = function () {
        this.draw();
    };
    CanvasArt.prototype.draw = function () {
        this.speedPrecent = this.speed * .01;
        this.scene.killLoop();
        this.scene = new Scene(this.parentElm, this.canvasElem, this.numDots, this.speedPrecent, this.attractSpeed, this.attractDistance);
        this.scene.toggleOnOff();
    };
    CanvasArt.prototype.setDefaults = function () {
        this.numDots = 3000;
        this.speed = 1;
        this.speedPrecent = 0.01;
        this.attractSpeed = 1000;
        this.attractDistance = 150;
        this.numClicked = 1;
    };
    CanvasArt.prototype.restart = function () {
        this.setDefaults();
        this.draw();
    };
    CanvasArt.prototype.ngOnDestroy = function () {
        //WE AER USING A
        this.scene.killLoop();
    };
    CanvasArt.prototype.mouseMove = function (e) {
        this.scene.mouse.onMouseMove(e);
    };
    CanvasArt.prototype.toggleOnOff = function (e) {
        this.scene.toggleOnOff();
    };
    CanvasArt.prototype.toggleAttract = function () {
        this.numClicked++;
        this.scene.toggleAttract();
    };
    __decorate([
        core_1.ViewChild('canvasElem'), 
        __metadata('design:type', core_1.ElementRef)
    ], CanvasArt.prototype, "canvasElem", void 0);
    __decorate([
        core_1.ViewChild('parentElm'), 
        __metadata('design:type', core_1.ElementRef)
    ], CanvasArt.prototype, "parentElm", void 0);
    CanvasArt = __decorate([
        core_1.Component({
            selector: 'canvas-art',
            // directives: [],
            template: "\n    <style>\n     label{\n     font-weight: normal;\n     font-size:12px;\n     margin-top:8px;\n     }\n    </style>\n    <div class=\"particle-container\" #parentElm id=\"peParentElement\">\n    <canvas #myImg id=\"canvas-art\" #canvasElem  (mousedown)=\"toggleAttract()\" (mousemove)=\"mouseMove($event)\" width=\"600\" height=\"400\"></canvas>\n    <div class=\"try\">\n    \n    \n        <div class=\"panel panel-primary\" style=\"margin:0px 0px 0px 10px; height:402px\" >\n        <div class=\"panel-heading\">Swarm Controls</div>\n        <div class=\"panel-body\">\n               \n              \n              \n               <label>Number Of Dots {{numDots}}</label> \n               <input (change)=\"onChange()\"  [(ngModel)]=\"numDots\" name=\"numVal\" min=\"10\" max=\"14000\" type=\"range\"   >\n              \n               <label>Loop Speed {{speed}}</label>\n               <input (change)=\"onChange()\"  [(ngModel)]=\"speed\" name=\"numVal\"  min=\"0\" max=\"20\" type=\"range\"  >\n               \n               \n               <label>Attract Speed {{attractSpeed}}</label>\n               <input (change)=\"onChange()\"  [(ngModel)]=\"attractSpeed\" name=\"numVal\" min=\"100\" max=\"5000\" type=\"range\"  >\n              \n               \n               <label>Attract Distance {{attractDistance}}</label>\n               <input  (change)=\"onChange()\" [(ngModel)]=\"attractDistance\" name=\"numVal\" min=\"0\" max=\"400\" type=\"range\"  >\n               \n                <div style=\"margin-top:20px\"  class=\"btn btn-info btn-xs\" (click)=\"toggleOnOff($event)\">Start/Stop</div>\n                <div style=\"margin-top:20px\" class=\"btn btn-warning btn-xs\" (click)=\"restart()\">Reset</div>\n               \n               \n                <div style=\"font-size: 10px; margin-top: 30px\"><i >*Click on canvas to toggle mouse attraction</i></div>\n               \n                </div>\n        </div>\n    \n    \n    \n    \n\n    </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CanvasArt);
    return CanvasArt;
}());
exports.CanvasArt = CanvasArt;
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.rgbToFillStyle = function (r, g, b, a) {
        if (a === undefined) {
            return ["rgb(", r, ",", g, ",", b, ")"].join('');
        }
        else {
            return ["rgba(", r, ",", g, ",", b, ",", a, ")"].join('');
        }
    };
    Utils.prototype.hslToFillStyle = function (h, s, l, a) {
        if (a === undefined) {
            return ["hsl(", h, ",", s, "%,", l, "%)"].join('');
        }
        else {
            return ["hsla(", h, ",", s, "%,", l, "%,", a, ")"].join('');
        }
    };
    return Utils;
}());
;
var Dot = (function () {
    function Dot(x, y, scene) {
        this.x = x;
        this.y = y;
        this.scene = scene;
        this.util = new Utils();
        this.speed = this.scene.speed;
        this.size = 4;
        this.wavePosition = 0;
        this.position = new THREE.Vector2(x, y);
        this.direction = new THREE.Vector2(this.speed * Math.random() - this.speed / 2, this.speed * Math.random() - this.speed / 2);
        this.attractSpeed = this.scene.attractSpeed * Math.random() + 500;
        this.attractDistance = (this.scene.attractDistance * Math.random()) + 180;
        this.color = this.util.hslToFillStyle(this.position.x / this.scene.canvas.width * 360, 50, 50, 0.5);
    }
    Dot.prototype.update = function (dt) {
        this.updatePosition(dt);
        this.updateWave(dt);
        if (this.scene.attractedToMouse) {
            this.attractMouse(dt);
        }
        this.draw(dt);
    };
    Dot.prototype.updatePosition = function (dt) {
        //This is a little trick to create a variable outside of the render loop
        //It's expensive to allocate memory inside of the loop.
        //The variable is only accessible to the function below.
        var moveDistance = new THREE.Vector2();
        //This is the actual function
        moveDistance.copy(this.direction);
        moveDistance.multiplyScalar(dt);
        this.position.add(moveDistance);
        //Keep the dot on the screen
        this.position.x = (this.position.x + this.scene.canvas.width) % this.scene.canvas.width;
        this.position.y = (this.position.y + this.scene.canvas.height) % this.scene.canvas.height;
    };
    Dot.prototype.pushMouse = function (dt) {
        /*
        var moveDistance = new THREE.Vector2();
        //This is the actual function
        moveDistance.copy( this.direction );
        moveDistance.multiplyScalar( dt );
        this.position.add( moveDistance );
        //Keep the dot on the screen
        this.position.x = (this.position.x + this.scene.canvas.width) % this.scene.canvas.width;
        this.position.y = (this.position.y + this.scene.canvas.height) % this.scene.canvas.height;
        */
        var moveDistance = new THREE.Vector2();
    };
    Dot.prototype.attractMouse = function (dt) {
        //Again, create some private variables for this method
        var vectorToMouse = new THREE.Vector2(), vectorToMove = new THREE.Vector2();
        var distanceToMouse, distanceToMove, moveLength;
        vectorToMouse
            .copy(this.scene.mouse.position)
            .sub(this.position);
        distanceToMouse = vectorToMouse.length();
        moveLength = dt * (this.attractDistance - distanceToMouse) / this.attractSpeed;
        if (moveLength > 0) {
            //Resize the vector to the mouse to the desired move length
            vectorToMove
                .copy(vectorToMouse)
                .divideScalar(distanceToMouse)
                .multiplyScalar(moveLength);
            //Go ahead and add it to the current position now, rather than in the draw call
            this.position.add(vectorToMove);
        }
    };
    Dot.prototype.draw = function (dt) {
        //Get a short variable name for convenience
        var ctx = this.scene.context;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y + this.wavePosition, this.size, this.size);
    };
    Dot.prototype.updateWave = function (dt) {
        this.wavePosition = Math.sin(this.scene.currTime / 500 + this.position.x / this.scene.canvas.width * 4) * 20;
    };
    return Dot;
}());
var Mouse = (function () {
    function Mouse(scene) {
        this.scene = scene;
        this.mousemove = new core_1.EventEmitter();
        this.position = new THREE.Vector2(-10000, -10000);
    }
    Mouse.prototype.onMouseMove = function (e) {
        var canvas = this.scene.canvas;
        var parentElement = this.scene.parentElement;
        console.log("parentElement.offsetTop ", parentElement.offsetTop);
        if (typeof (e.pageX) == "number") {
            //Note that this is a little different from the article to allow for responsively resizing the canvas
            this.position.x = e.pageX * canvas.width / canvas.width - parentElement.offsetLeft;
            this.position.y = e.pageY * canvas.height / canvas.height - parentElement.offsetTop;
        }
        else {
            this.position.x = -100000;
            this.position.y = -100000;
        }
    };
    Mouse.prototype.copyPosition = function (vector) {
        vector.copy(this.position);
    };
    Mouse.prototype.getPosition = function () {
        return this.position.clone();
    };
    return Mouse;
}());
;
var DotManager = (function () {
    function DotManager(numberOfDots, scene) {
        this.dots = [];
        this.numberOfDots = numberOfDots;
        this.scene = scene;
        for (var i = 0; i < numberOfDots; i++) {
            this.dots.push(new Dot(Math.random() * this.scene.canvas.width, Math.random() * this.scene.canvas.height, this.scene));
        }
    }
    DotManager.prototype.update = function (dt) {
        for (var i = 0; i < this.numberOfDots; i++) {
            this.dots[i].update(dt);
        }
    };
    return DotManager;
}());
var Scene = (function () {
    function Scene(parentElm, canvasElem, numDots, speed, attractSpeed, attractDistance) {
        this.parentElm = parentElm;
        this.canvasElem = canvasElem;
        this.numDots = numDots;
        this.speed = speed;
        this.attractSpeed = attractSpeed;
        this.attractDistance = attractDistance;
        this.started = false;
        this.attractedToMouse = true;
        this.currTime = this.prevTime = new Date().getTime(); //Timing variables
        this.canvas = this.canvasElem.nativeElement;
        this.parentElement = this.parentElm.nativeElement;
        this.parentElement = document.getElementById("peParentElement");
        this.context = this.canvas.getContext('2d');
        this.dotManager = new DotManager(this.numDots, this);
        this.mouse = new Mouse(this);
        this.update(16); //Draw Once
        this.loop();
    }
    Scene.prototype.toggleOnOff = function () {
        this.started = !this.started;
        if (this.started) {
            this.loop();
        }
    };
    Scene.prototype.killLoop = function () {
        this.started = false;
    };
    Scene.prototype.toggleAttract = function () {
        this.attractedToMouse = !this.attractedToMouse;
    };
    Scene.prototype.loop = function () {
        //this is the change in time in milliseconds
        var dt;
        if (!this.started)
            return;
        this.currTime = new Date().getTime();
        dt = Math.min(this.currTime - this.prevTime, 100);
        //Update then request a new animation frame
        this.update(dt);
        requestAnimationFrame(this.loop.bind(this));
        this.prevTime = this.currTime;
    };
    Scene.prototype.update = function (dt) {
        //Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //Start your update code here
        this.dotManager.update(dt);
    };
    return Scene;
}());
//# sourceMappingURL=canvas-art.js.map