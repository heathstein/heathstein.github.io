/**
 * Created by 212544474 on 3/24/2016.
 */
/**
 * Created by 212544474 on 2/12/2016.
 */

/// <reference path="three.d.ts" />

import {Component,provide,EventEmitter,HostListener,ElementRef,ViewChild} from '@angular/core';

@Component({
    selector: 'canvas-art',
   // directives: [],

    template: `
    <style>
     label{
     font-weight: normal;
     font-size:12px;
     margin-top:8px;
     }
    </style>
    <div class="particle-container" #parentElm id="peParentElement">
    <canvas #myImg id="canvas-art" #canvasElem  (mousedown)="toggleAttract()" (mousemove)="mouseMove($event)" width="600" height="400"></canvas>
    <div class="try">
    
    
        <div class="panel panel-primary" style="margin:0px 0px 0px 10px; height:402px" >
        <div class="panel-heading">Swarm Controls</div>
        <div class="panel-body">
               
              
              
               <label>Number Of Dots {{numDots}}</label> 
               <input (change)="onChange()"  [(ngModel)]="numDots" name="numVal" min="10" max="14000" type="range"   >
              
               <label>Loop Speed {{speed}}</label>
               <input (change)="onChange()"  [(ngModel)]="speed" name="numVal"  min="0" max="20" type="range"  >
               
               
               <label>Attract Speed {{attractSpeed}}</label>
               <input (change)="onChange()"  [(ngModel)]="attractSpeed" name="numVal" min="100" max="5000" type="range"  >
              
               
               <label>Attract Distance {{attractDistance}}</label>
               <input  (change)="onChange()" [(ngModel)]="attractDistance" name="numVal" min="0" max="400" type="range"  >
               
                <div style="margin-top:20px"  class="btn btn-info btn-xs" (click)="toggleOnOff($event)">Start/Stop</div>
                <div style="margin-top:20px" class="btn btn-warning btn-xs" (click)="restart()">Reset</div>
               
               
                <div style="font-size: 10px; margin-top: 30px"><i >*Click on canvas to toggle mouse attraction</i></div>
               
                </div>
        </div>
    
    
    
    

    </div>
    </div>`


})




export class CanvasArt {

    public scene:Scene;
    public numDots;
    public speed;
    public speedPrecent;
    public attractDistance;
    public attractSpeed;
    public numClicked;
    public canvas;




    @ViewChild('canvasElem') canvasElem: ElementRef;
    @ViewChild('parentElm') parentElm: ElementRef;

    constructor(elementRef: ElementRef) {
        this.setDefaults();
    }


    ngAfterViewInit() {
        this.scene = new Scene(this.parentElm,this.canvasElem,this.numDots,this.speedPrecent,this.attractSpeed,this.attractDistance);
        this.scene.toggleOnOff();
    }


    onChange():void{
        this.draw();
    }

    draw():void{
        this.speedPrecent = this.speed * .01;
        this.scene.killLoop()
        this.scene = new Scene(this.parentElm,this.canvasElem,this.numDots,this.speedPrecent,this.attractSpeed,this.attractDistance);
        this.scene.toggleOnOff();

    }

    setDefaults(){
        this.numDots = 3000;
        this.speed = 1;
        this.speedPrecent = 0.01;
        this.attractSpeed = 1000;
        this.attractDistance = 150;
        this.numClicked = 1;
    }

    restart(){
        this.setDefaults();
        this.draw();
    }


    ngOnDestroy(): void {
        //WE AER USING A
        this.scene.killLoop()
    }

    mouseMove(e) {
        this.scene.mouse.onMouseMove(e);
    }

    toggleOnOff(e){
        this.scene.toggleOnOff();
    }


    toggleAttract(){
        this.numClicked++
        this.scene.toggleAttract();
    }




}


class Utils {


    public test:string;

    constructor( ) {


    }



    rgbToFillStyle(r, g, b, a) {
        if(a === undefined) {
            return ["rgb(",r,",",g,",",b,")"].join('');
        } else {
            return ["rgba(",r,",",g,",",b,",",a,")"].join('');
        }
    }



    hslToFillStyle(h, s, l, a) {
        if(a === undefined) {
            return ["hsl(",h,",",s,"%,",l,"%)"].join('');
        } else {
            return ["hsla(",h,",",s,"%,",l,"%,",a,")"].join('');
        }
    }


};





class Dot {

    public speed:number;
    public size:number;
    public wavePosition:number;
    public position;
    public direction;
    public attractSpeed;
    public attractDistance;
    public color;
    public util:Utils = new Utils();


    constructor(public x:number ,public y:number , public scene:Scene) {

        this.speed =  this.scene.speed;
        this.size =  4;
        this.wavePosition = 0;

        this.position = new THREE.Vector2(x,y);
        this.direction = new THREE.Vector2(
            this.speed * Math.random() -  this.speed / 2,
            this.speed * Math.random() -  this.speed / 2
        );

        this.attractSpeed = this.scene.attractSpeed * Math.random() + 500;
        this.attractDistance = (this.scene.attractDistance * Math.random()) + 180;
        this.color = this.util.hslToFillStyle(this.position.x / this.scene.canvas.width * 360, 50, 50, 0.5);

    }


    update( dt ) {
        this.updatePosition( dt );
        this.updateWave( dt );
        if(this.scene.attractedToMouse ){
            this.attractMouse( dt );
        }
        this.draw( dt );
    }



    updatePosition(dt) {
    //This is a little trick to create a variable outside of the render loop
    //It's expensive to allocate memory inside of the loop.
    //The variable is only accessible to the function below.
        var moveDistance = new THREE.Vector2();
        //This is the actual function
        moveDistance.copy( this.direction );
        moveDistance.multiplyScalar( dt );
        this.position.add( moveDistance );
        //Keep the dot on the screen
        this.position.x = (this.position.x + this.scene.canvas.width) % this.scene.canvas.width;
        this.position.y = (this.position.y + this.scene.canvas.height) % this.scene.canvas.height;

     }


    pushMouse(dt) {

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


    }





    attractMouse(dt) {

        //Again, create some private variables for this method
        var vectorToMouse = new THREE.Vector2(), vectorToMove = new THREE.Vector2();

        var distanceToMouse, distanceToMove, moveLength;

        vectorToMouse
            .copy( this.scene.mouse.position )
            .sub( this.position );

        distanceToMouse = vectorToMouse.length();
        moveLength = dt * (this.attractDistance - distanceToMouse) / this.attractSpeed;


        if( moveLength > 0 ) {

            //Resize the vector to the mouse to the desired move length
            vectorToMove
                .copy( vectorToMouse )
                .divideScalar( distanceToMouse )
                .multiplyScalar( moveLength );

            //Go ahead and add it to the current position now, rather than in the draw call
            this.position.add(vectorToMove);

        }


    }




    draw(dt) {
        //Get a short variable name for convenience
        var ctx = this.scene.context;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y + this.wavePosition, this.size, this.size);

    }

    updateWave( dt ) {
        this.wavePosition = Math.sin( this.scene.currTime / 500 + this.position.x / this.scene.canvas.width * 4 ) * 20;
    }



}



class Mouse{


    public position;
    mousemove  = new EventEmitter();

    constructor(public scene:Scene) {
        this.position = new THREE.Vector2(-10000, -10000);
    }






    onMouseMove(e){

        var canvas = this.scene.canvas;
        var parentElement = this.scene.parentElement

        console.log("parentElement.offsetTop " , parentElement.offsetTop)


        if(typeof(e.pageX) == "number") {
            //Note that this is a little different from the article to allow for responsively resizing the canvas
            this.position.x = e.pageX * canvas.width  / canvas.width - parentElement.offsetLeft;
            this.position.y = e.pageY * canvas.height / canvas.height -  parentElement.offsetTop;
        } else {
            this.position.x = -100000;
            this.position.y = -100000;
        }

    }

    copyPosition( vector ){
        vector.copy( this.position );
    }

    getPosition(){
        return this.position.clone();
    }

};





    class DotManager {


    public dots;
    public numberOfDots:number;
    public scene:Scene;


    constructor(numberOfDots:number , scene:Scene) {
        this.dots = [];
        this.numberOfDots = numberOfDots;
        this.scene = scene;

        for(var i=0; i < numberOfDots; i++) {
            this.dots.push( new Dot(
                Math.random() * this.scene.canvas.width,
                Math.random() * this.scene.canvas.height,
                this.scene
            ));
        }
    }


    update(dt){
        for(var i=0; i < this.numberOfDots; i++) {
            this.dots[i].update( dt );
        }
    }



 }



 class Scene  {

    public currTime;
    public prevTime;
    public canvas;
    public context:CanvasRenderingContext2D;
    public dotManager:DotManager;
    public started:Boolean = false;
    public mouse:Mouse;
    public attractedToMouse:Boolean = true;
    public parentElement;





    constructor(public parentElm: ElementRef , public canvasElem: ElementRef, public numDots:number, public speed:number, public attractSpeed, public attractDistance  ) {


        this.currTime = this.prevTime = new Date().getTime();	//Timing variables
        this.canvas = this.canvasElem.nativeElement;
        this.parentElement = this.parentElm.nativeElement;


        this.parentElement = document.getElementById("peParentElement")

        this.context = this.canvas.getContext('2d');
        this.dotManager = new DotManager(this.numDots, this);
        this.mouse = new Mouse( this );
        this.update( 16 ) //Draw Once
        this.loop();

    }


    toggleOnOff(){
        this.started = !this.started;

        if( this.started ){
            this.loop();
        }
    }


     killLoop(){

         this.started = false;
     }


     toggleAttract(){
         this.attractedToMouse = !this.attractedToMouse;
     }




     loop() {
         //this is the change in time in milliseconds

         var dt;
         if(! this.started ) return;
         this.currTime = new Date().getTime();
         dt = Math.min( this.currTime - this.prevTime, 100);

         //Update then request a new animation frame
         this.update( dt );
         requestAnimationFrame( this.loop.bind(this) );
         this.prevTime = this.currTime;
     }

         update( dt ) {
         //Clear the canvas
         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
         //Start your update code here
         this.dotManager.update( dt );

     }


}






