interface Rect {
    readonly id:String
    color?: String
    size: {
        width:number
        heigth:number
    }
}

const rect1: Rect = {
    id:'1234',
    size:{
        width:20,
        heigth:30
    }
    //color не обязателен
}

const rect2: Rect = {
    id:'12345',
    size:{
        width:10,
        heigth:5
    }
}
rect2.color = 'black'

const rect3 = {} as Rect
const rect5 = <Rect>{}

//=====================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect6: RectWithArea = {
    id:'1',
    size:{
        width:10,
        heigth:5
    },
    getArea():number{
        return this.size.width * this.size.heigth
    }
}

//=====================

interface IClock {
    time: Date,
    setTime(date:Date):void
}

class Clock implements IClock{
    time: Date = new Date()
    setTime(date:Date):void{
        this.time = date
    }
}

//=====================

interface Styles {
    [key:string]:string
}

const css: Styles = {
    border: 'solid 1px red',
    color: 'red'
}