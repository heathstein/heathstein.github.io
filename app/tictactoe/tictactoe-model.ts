/**
 * Created by 212544474 on 2/23/2016.
 */


export class TicTacToeModel{
    constructor(public value:string = "", public active:boolean = true, public status:string = ''){
    }
}


export class TicTacToeResults{

    constructor(
        public numberClicks:number = 0,
        public tie:boolean = false,
        public win:boolean = false,
        public winner:number = null,
        public status:String = ""
    ){
    }
}