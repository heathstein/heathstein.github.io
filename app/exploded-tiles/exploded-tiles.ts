import {Component,provide,EventEmitter,HostListener,ElementRef,ViewChild} from '@angular/core';

@Component({
    selector: 'exploded-tiles',
    // directives: [],

    template: `
    <style>
      .particle-container .try{
        left:800px;
      }
         label{
     font-weight: normal;
     font-size:12px;
     margin-top:8px;
     }
    </style>
    
    
    
    <div class="particle-container"  #parentElm id="peParentElement">
    <canvas  id="exploded-tiles" #canvasElement  (mousedown)="explode($event)" (mousemove)="mouseMove($event)" width="790" height="400"></canvas>
    <div class="try">
    
    
        <div class="panel panel-primary" style="margin:0px 0px 0px 10px; height:402px" >
        <div class="panel-heading">Tiles Controls</div>
        <div class="panel-body">
               
              
              
               <label>Force: {{force}}</label> 
               <input (change)="onChange()"  [(ngModel)]="force" name="numVal" min="1" max="8" type="range"   >
              
              
               <label>Tile Width {{TILE_WIDTH}}</label> 
               <input (change)="onChange()"  [(ngModel)]="TILE_WIDTH" name="numVal" min="10" max="40" type="range"   >
              
                <label>Tile Height {{TILE_HEIGHT}}</label> 
                <input (change)="onChange()"  [(ngModel)]="TILE_HEIGHT" name="numVal" min="10" max="40" type="range"   >
              
                 <div style="font-size: 10px; margin-top: 30px"><i >*Click on Tiles to to explode</i></div>

               
                </div>
        </div>
    
    
    
    

    </div>
    </div>`


})


export class ExplodedTiles {


    @ViewChild('canvasElement') canvasElement:ElementRef;
    @ViewChild('parentElm') parentElm:ElementRef;

    public canvas;
    public parentCnt;
    public TILE_WIDTH:number = 20;
    public TILE_HEIGHT:number = 20;
    public SOURCERECT = {x:0, y:0, width:0, height:0};
    public PAINTRECT = {x:0, y:0, width:1000, height:600};
    public draw:CanvasRenderingContext2D;
    private tiles:Array<Tile> = new Array<Tile>();
    public force:number = 3;



    constructor(elementRef:ElementRef) {

    }


    init(){

        this.canvas = this.canvasElement.nativeElement;
        this.draw = this.canvas.getContext('2d');
        this.parentCnt = this.parentElm;
        this.createTiles();
        setInterval(() => { this.processFrame() }, 33);

    }



     processFrame() {
       this.drawTiles()
    };


    ngAfterViewInit() {
        this.init();
    }

    onChange(){
        console.log("change::::::::::s");

        this.TILE_WIDTH =  parseInt(this.TILE_WIDTH);
        this.TILE_HEIGHT =  parseInt(this.TILE_HEIGHT);
        this.tiles = [];
        this.createTiles();
    }



    createTiles(){

        this.SOURCERECT = {x:0,y:0,width:this.canvas.width,height:this.canvas.height};
        var offsetX = 0;
        var offsetY = 0;
        var y:number=0;

        console.log("this.SOURCERECT.height : " , this.SOURCERECT.height);
        console.log("y : " , y);

        while(y < this.SOURCERECT.height){
            var x:number=0;

            while(x < this.SOURCERECT.width){
                var tile = new Tile(0,0,0,0,0,0,0,0,0,'#000000',0,0);
                tile.videoX = x;
                tile.videoY = y;
                tile.originX = offsetX+x;
                tile.originY = offsetY+y;
                tile.currentX = tile.originX;
                tile.currentY = tile.originY;
                // tile.color = '#'+Math.floor(Math.random()*16777215).toString(16);
                tile.color = this.hslToFillStyle(tile.originX / this.SOURCERECT.width * 360, 50, 50, 0.5);
                //console.log(tile.color);

                this.tiles.push(tile);
                x+=this.TILE_WIDTH;
            }
            y+=this.TILE_HEIGHT;
            console.log("this.TILE_HEIGHT " , this.TILE_HEIGHT);
            console.log("y " , y);
            console.log("this.SOURCERECT.height " , this.SOURCERECT.height);


        }
        console.log("this.tiles " , this.tiles);
    }

    hslToFillStyle(h, s, l, a) {
        if(a === undefined) {
            return ["hsl(",h,",",s,"%,",l,"%)"].join('');
        } else {
            return ["hsla(",h,",",s,"%,",l,"%,",a,")"].join('');
        }
    }



    explode(evt){

        var x = evt.offsetX;
        var y = evt.offsetY;

        for(var i=0; i<this.tiles.length; i++){
            var tile = this.tiles[i];

            var xdiff = tile.currentX-x;
            var ydiff = tile.currentY-y;
            var dist = Math.sqrt(xdiff*xdiff + ydiff*ydiff);

            var randRange = 220+(Math.random()*30);
            var range = randRange-dist;
            var force = this.force*(range/randRange);
            if(force > tile.force){
                tile.force = force;
                var radians = Math.atan2(ydiff, xdiff);
                tile.moveX = Math.cos(radians);
                tile.moveY = Math.sin(radians);
                tile.moveRotation = 0.5-Math.random();
            }
        }
        //tiles.sort(zindexSort);
        this.processFrame();





    }

    mouseMove(){

    }






    drawTiles() {

        this.draw.clearRect(this.PAINTRECT.x, this.PAINTRECT.y, this.PAINTRECT.width, this.PAINTRECT.height);





        for (var i = 0; i < this.tiles.length; i++) {
            var tile = this.tiles[i];

            if(tile.force > 0.0001) {
                //expand

                tile.moveX *= tile.force;
                tile.moveY *= tile.force;
                tile.moveRotation *= tile.force;
                tile.currentX += tile.moveX;
                tile.currentY += tile.moveY;
                tile.force *= 0.85;

                if(tile.currentX <= 0 || tile.currentX >= this.PAINTRECT.width){
                    tile.moveX *= -1;
                }
                if(tile.currentY <= 0 || tile.currentY >= this.PAINTRECT.height){
                    tile.moveY *= -1;
                }


                if(i == 0){
                    console.log(i ,tile.moveX);
                    console.log(i ,tile.force);
                }

            }else if(tile.rotation != 0 || tile.currentX != tile.originX || tile.currentY != tile.originY){
                var diffx = (tile.originX-tile.currentX)*0.2;
                var diffy = (tile.originY-tile.currentY)*0.2;
                var diffRot = (0-tile.rotation)*0.2;

                if(Math.abs(diffx) < 0.5){
                    tile.currentX = tile.originX;
                }else{
                    tile.currentX += diffx;
                }
                if(Math.abs(diffy) < 0.5){
                    tile.currentY = tile.originY;
                }else{
                    tile.currentY += diffy;
                }

            }else{
                tile.force = 0;

            }

            //draw.translate(tile.currentX, tile.currentY);
            this.draw.fillStyle = tile.color;
            this.draw.fillRect(tile.currentX, tile.currentY, this.TILE_WIDTH-1, this.TILE_HEIGHT-1);

        }

    }


}



export class Tile {

    //new tile(0,0,0,0,0,0,0,0,0,'#000000',0,0);

    constructor(public originX:number ,
                public originY:number ,
                public currentX:number,
                public currentY:number,
                public rotation:string,
                public force:number,
                public z:number,
                public moveX:number,
                public moveY:number,
                public moveRotation:number,
                public color:String,
                public videoX:number,
                public videoY:number) {
    }




}
