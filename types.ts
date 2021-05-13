const isFetching: Boolean = true
const isLoading: Boolean = false

let int: Number = 42
let str: String = 'Hello'

const NumberArray: Number[] = [1,1,2,3,5,8,13]
const NumberArray2: Array<Number> = [1,1,2,3,5,8,13]

const Words: Array<String> = ['Hello','TypeScript']

//Tuple - разнные данные в массиве
const contact: [string,number] = ['Nekit',123456]

//Any - похуй на то что ей присваивают
let variable:any = 42
variable = 'newString'

function sayName(name:string):void/*означает что функция ничего не вернёт*/{
    console.log(name);
}

//Never - либо при ошибке функции, либо при постоянной работе 
function throwError(mes: string):never{
    throw new Error(mes)
}
function inInfinitive():never{
    while(true){
        throw new Error
    }
}

//Type 
type Login = string
const login: Login = 'admin'
// const login2: Login = 1
//======================
type ID = string | number
const id:ID = 1234
const id2:ID = '1234'

type SomeType = string | null | undefined