class TypeScript {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info(name:string){
        return `${name}: TypeScript version is ${this.version}`
    }
}

// class Car{
//     readonly model: string
//     readonly numberwheels: number = 4
//     constructor(theModel:string,) {
//         this.model = theModel
//     }
// }

class Car{
    readonly numberwheels: number = 4
    constructor(readonly model:string) {}
}

//=========================

class Animal{
    protected voice : string = ''
    public color : string = 'red'
    private go(){
        console.log('Go');
    }
}

class Cat extends Animal{
    public SetVoice(voice:string):void{
        this.voice = voice
    }
}

const cat = new Cat()
cat.SetVoice('test')
console.log(cat.color);

//=======================

abstract class Component{
    abstract render():void
    abstract info():string
}

class AppComponent extends Component{
    render():void{
        console.log('Component of render');
    }
    info():string{
        return 'this. is info'
    }
}