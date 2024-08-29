// 1.any类型，可以赋值任意

// let x:any //显示
// x='hello'
// x=true
// x=99

// let x //隐式
// x='hello'
// x=true
// x=99

// 2.unknow 未知数据类型,每次使用必须进行数据检查
// let a: unknown
// a = 99
// a = false
// a = 'word'

// let x: string

// // 第一种判断方式
// if (typeof a === 'string') {
//     x = a
// }
// // 第二种（断言）
// x = a as string
// // 第三种（断言）
// x = <string>a
// console.log(x,a);
// console.log((a as string).toUpperCase());

// 3.never 用来限制函数的返回类型
// 表示函数不能有返回值 包括undefined，null
// function demo():never{
//     throw new Error('程序错误')
// }

// 4.void 用于声明函数返回值为空 (意为函数的调用者不应该关系函数的返回值)
// function fn(msg:string):void{
//     console.log('void');
// }

// 5.object和Object
// let a:object  //a能存储的是【非原始类型】
// let b:Object  //b能存储的是可以调用Object方法的类型,除了null和undefined都能存

// #region a={}
// a={name:'张三'}
// a=[1,2,3,4,5]
// a=function(){}
// a=new String('hello')
// class person{}
// a=new person()
// // a不能存的
// a=1
// a=true
// a='你好'
// a=null
// a=undefined
// #endregion
//5.1声明对象
// let person :{
//     name:string,
//     age?:number
//     [key:string]:any
// }
// person ={name:'张三',age:30,sex:'男',adress:'北京'}
// 5.2声明函数
// let count :(a:number,b:number)=> number
// count=(x,y)=>{
//     return x+y
// }
//5.3声明数组
// let arr1 :string[]
// let arr2 :Array<number>

// arr1=['a','b','c']
// arr2=[100,200]

// console.log(arr1);
// console.log(arr2);


