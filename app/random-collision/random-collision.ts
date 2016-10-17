/**
 *created by heathstein on 8/28/16.
 */



import {Component,ElementRef,ViewChild} from '@angular/core';

@Component({
    selector: 'random-collision',
    // directives: [],

    template: `
    <style>
    
     label{
         font-weight: normal;
         font-size:12px;
         margin-top:8px;
     }
     
    .block{
        float:left;
        width:70px;
        text-align: center;
        padding:10px;
       
    }
    
     .circles{
         overflow: hidden;
         height: auto;  
         padding:8px;
    }
    
     .circle {
        border-radius: 50%;
        width: 45px;
        height: 45px;
        border: 1px solid #303030;
        text-align: center;
        
    }
    
    
    .wins{
        margin:12px 0px 0px 0px;
        display:block;
        font-size:16px;
        font-weight:bold;
    }
    
    </style>
    

    <div class="particle-container"  #parentElm id="peParentElement">
    
    <canvas #myImg id="collision-container" #canvasElem  width="600" height="400" style="border:1px solid #000000; background-color:#000"></canvas>
    
     <div class="try">
        <div class="panel panel-primary" style="margin:0px 0px 0px 10px; height:402px" >
        <div class="panel-heading">Particle Collision</div>
        <div class="panel-body">
        
        <div style="width: 180">
         <div *ngIf="showPlayPause" class="btn btn-info btn-sm" (click)="toggleAnimation() "> 
            <i  [ngClass]="{'fa-pause': startAnimation, 'fa-play': !startAnimation}" class="fa "></i>
         </div>
         
          <div class="btn btn-success btn-sm" (click)="onReset() "> 
            Reset
         </div>
         </div>
         
         <hr/>
         
         
        <span class="label" style="color: #000">Games Left:</span> <span class="label label-danger" >{{numToRun -numRun}}</span>
        
              <label>Games to run:</label>
              <input (change)="onChange()"  [(ngModel)]="numToRun" name="numVal" min="1" max="100" type="range"  >
               
        
               <label>Dot Speed {{dotSpeed}}</label>
               <input (change)="onChange()"  [(ngModel)]="dotSpeed" name="numVal" min="1" max="5" type="range"  >
           
               <label>Random White Dots {{dotNumber}}</label>
               <input (change)="onChange()"  [(ngModel)]="dotNumber" name="numVal" min="120" max="300" type="range"  >
           
        
                 <div class="circles" >
                     <div class="block" *ngFor="let giant of displayWinners "> 
                         <div class="circle pull-left" [style.background]="giant.color"> <span class="wins">{{giant.wins}}</span> </div> 
                     </div>
                 </div>
        </div>
        </div>
      </div>
    
    </div>    
`

})



export class RandomCollision {


    @ViewChild('canvasElem') canvasElem:ElementRef;
    @ViewChild('parentElm') parentElem:ElementRef;
    public context:CanvasRenderingContext2D;
    public centerX:number;
    public centerY:number;
    public canvas;
    public dotArray: Array<dot> = new Array<dot>();
    private fps:number;
    private dx:number;
    private dy:number;
    private giantSize:number;
    private totalMass:number;
    private massPresent:number;
    private giants:Array<dot> = new Array<dot>();
    private averageRange:number;
    private numToRun:number = 5;
    private numRun:number;
    private winners:Array<dot> = new Array<dot>();
    public displayWinners = [];
    public averageColor = "white";
    public startAnimation = false;
    public dotSpeed = 3;
    public requestAnimation = undefined;
    public reset = false;
    public dotNumber:number = 100;
    public showPlayPause:boolean = true;

    constructor(elementRef:ElementRef) {

    }

    onChange(){

    }



     stopAnimationFrame() {
        if (this.requestAnimation) {
            cancelAnimationFrame(this.requestAnimation);
            this.requestAnimation = undefined;
        }
    }


    ngAfterViewInit() {
      this.setUp();
      this.start();
    }

    setUp(){
        this.numRun = 0;
        this.displayWinners = [];
        this.giants  = [
            {index:456,color:'#fd016c'},
            {index:457,color:'#28ce24'},
            {index:458,color:'#61c4e2'}
        ]

        for(var i = 0 ; i < this.giants.length; i++){
            this.displayWinners.push({wins:0,color: this.giants[i].color} );
        }

        this.displayWinners.push({wins:0,color:this.averageColor} );

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
    }

    start(){
        this.dotArray = [];
        this.numRun++;

        for(var i = 0 ; i < this.giants.length; i++){
            this.createGiants(this.giants[i].index,this.giants[i].color);
        }
        this.createDots();
        this.draw();
        this.requestAnimation = undefined;
    }

    toggleAnimation(){

        if(this.numToRun < 1 ){
            this.start();
        }else{
            this.startAnimation = !this.startAnimation;
            this.draw();
        }


    }

    createGiants(index,color){
        var x = this.canvas.width * Math.random();
        var y = this.canvas.height * Math.random();
        var radius =  this.giantSize;
        var dot1 = new dot(x,y,radius,color,index,this.dx,this.dy,color)
        this.dotArray.push(dot1);

    }

    game(dot){
        this.winners.push(dot);
        var obj = _.findIndex(this.displayWinners, { 'color': dot.color });
        this.displayWinners[obj].wins++;
        cancelAnimationFrame(this.requestAnimation);
       if( (this.numToRun - this.numRun) < 1 ){
           this.showPlayPause = false;
           return false;
       }else{
           this.start();
       }
    }


    onReset(){
        // console.log('this.requestAnimation' , this.requestAnimation)
        cancelAnimationFrame(this.requestAnimation);
        this.startAnimation = false;
        this.setUp();
        this.start();
    }



    draw(){



        if(this.dotArray.length == 1){
            this.game(this.dotArray[0]);
            return false;
        }

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for( var i = 0 ; i < this.dotArray.length; i++){
            this.drawDot(this.dotArray[i],i);
        }



        var that = this;

        if(this.startAnimation){
                this.requestAnimation = requestAnimationFrame(that.draw.bind(that));
        }



    }



    drawDot(dot,i) {

        // Flickering Object not moving x or y after eating mass at the edge of the canvas.
        // Issue is that
        dot.previousX = dot.x;
        dot.priviousY = dot.y;



        if(dot.x + dot.dx > this.canvas.width-dot.radius || dot.x + dot.dx < dot.radius) {
            dot.dx = -dot.dx;
        }


        if(dot.y + dot.dy > this.canvas.height-dot.radius || dot.y + dot.dy < dot.radius) {
            dot.dy = -dot.dy;
        }


        dot.x += (dot.dx * this.dotSpeed);
        dot.y += (dot.dy * this.dotSpeed);

        if( dot.x > this.canvas.width-dot.radius || dot.x + dot.dx < dot.radius){
            //console.log("We got an x isssue")

        }

        this.context.beginPath();
        this.context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI,false);
        this.context.fillStyle = dot.color;
        this.context.fill();
        this.collideTestLoop(dot);
    }


    collideTestLoop(dot) {
        for (var i = 0; i < this.dotArray.length; i++) {
            var dot2 = this.dotArray[i];
            var hit = this.collideTest(dot, this.dotArray[i], 0, 0);
            if (hit) {
                this.handelCollision(dot, this.dotArray[i])
            }
        }


    }


    handelCollision(dot1,dot2){

        if (dot1.radius > dot2.radius) {
            dot1.radius += dot2.radius * this.massPresent;
            var index = _.findIndex(this.dotArray, {index: dot2.index})
            dot1.eat(dot2);
            this.dotArray.splice(index, 1);


            /*  CHECK IF MASS IS EATEN AND MAKES OBJECT EXTEND OUTSIDE BOUNDING BOX */
            if(dot1.x + dot1.dx > this.canvas.width-dot1.radius ) {
                dot1.x = this.canvas.width-dot1.radius;
            }


            if(dot1.y + dot1.dy > this.canvas.height-dot1.radius ) {
                dot1.y = this.canvas.height-dot1.radius;
            }

            if(dot1.x + dot1.dx < dot1.radius) {
                dot1.x = dot1.radius;
            }

            if(dot1.y+ dot1.dy < dot1.radius) {
                dot1.y = dot1.radius;
            }
            /*  END CHECK */





        } else {

            dot2.radius += dot1.radius * this.massPresent;
            var index = _.findIndex(this.dotArray, {index: dot1.index});
            this.dotArray.splice(index, 1);

            /*  CHECK IF MASS IS EATEN AND MAKES OBJECT EXTEND OUTSIDE BOUNDING BOX */
            if(dot2.x + dot2.dx > this.canvas.width-dot2.radius ) {
                dot2.x = this.canvas.width-dot2.radius;
            }


            if(dot2.y + dot2.dy > this.canvas.height-dot2.radius ) {
                dot2.y = this.canvas.height-dot2.radius;
            }

            if(dot2.x + dot2.dx < dot2.radius) {
                dot2.x = dot2.radius;
            }

            if(dot2.y+ dot2.dy < dot2.radius) {
                dot2.y = dot2.radius;
            }
            /*  END CHECK */

        }


    }


    collideTest(dot1,dot2,d1x,d1y) {


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
                var dy = (dot1.y - d1y)  - (dot2.y - d1y);
                var distance = Math.sqrt(dx * dx + dy * dy);

                return this.checkHit(distance,dot1,dot2)


                    // if ( distance + dot1.radius + dot2.radius  < this.dotSpeed ) {
                    //     // console.log("possible collision ");
                    //     // console.log("distance: " , distance);
                    //     // console.log("this.dotSpeed : " , this.dotSpeed );
                    //     // console.log("dot1.radius: " , dot1.radius);
                    //     // console.log("dot2.radius: " , dot2.radius);
                    //     // console.log("this.dotSpeed + dot1.radius + dot2.radius: " , this.dotSpeed + dot1.radius + dot2.radius);
                    //     // this.startAnimation = false;
                    //
                    //
                    //
                    //     for(var p = 0; p < this.dotSpeed; p++){
                    //
                    //         var dx2 = (dot1.x - p) - (dot2.x - p);
                    //         var dy2 = (dot1.y - p)  - (dot2.y - p);
                    //         var distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    //
                    //         if(dot1.index === 1) {
                    //             console.log("distance2: i " , distance2 , "-"  , p);
                    //
                    //             if( p == this.dotSpeed){
                    //                 this.startAnimation = false;
                    //             }
                    //
                    //
                    //         }
                    //
                    //
                    //
                    //        // console.log(distance2);
                    //         if(this.checkHit(distance2,dot1,dot2) ){
                    //             return true;
                    //             break;
                    //
                    //         }
                    //
                    //
                    //
                    //
                    //         return false;
                    //
                    //
                    //     }
                    //
                    //
                    //
                    // }else{
                    //     return false;
                    // }

                }





    }


    checkHit(distance,dot1,dot2){

        if (distance < dot1.radius + dot2.radius) {
            return true;
        }else{
            return false;
        }


    }




       createDots(){
            for( var i = 0; i < this.dotNumber; i++){
                this.createDot(i);
            }
        }


        createDot(index){
            var x = this.canvas.width * Math.random();
            var y = this.canvas.height * Math.random();
            var radius =  this.getRandomInt(.1,.7) ;
            var color = this.averageColor;
            var dot1 = new dot(x,y,radius,color,index,this.dx,this.dy,'average');
            this.dotArray.push(dot1);
        }

         getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }





    }



export class dot {

    public previousX:number = 0;
    public previousY:number = 0;
    public startMass:number;
    public eaten = [];
    public massEaten: number;


    constructor(public x:number ,public y:number , public radius:number, public color:string, public index:number, public dx:number, public dy:number, public type:string) {
        this.startMass = radius;
        this.previousX = x;
        this.previousY = y;
    }

    eat(dot){
        this.eaten.push(dot);
        this.massEaten += dot.radius;
    }


}







