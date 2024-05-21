import {once,measure} from 'helpful-decorators'

class Dateclass{

     timezone:string;

    constructor(timezone:string){
        this.timezone= timezone
    }

    @measure
     getMonth(){
        const d = new Date()
        console.log(d.getMonth())
    }

    getDate(){
        const d = new Date();
        return d.getDate();
    }

    getTimezone(){
        return this.timezone;
    }
}

const dateobject = new Dateclass('AUS');
dateobject.getMonth();
dateobject.getMonth();
dateobject.getMonth();

// console.log(dateobject.timezone);