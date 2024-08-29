// 泛型
//作用：在定义函数、类或接⼝时，使⽤类型参数来表示未指定的类型,在使⽤时，才被指定类型

// 1、单个泛型
// function logData<T>(data: T){
//     console.log(data);
// }
// // 任意指定数据类型
// logData<number>(100)
// logData<string>('hello')

// 2、多个泛型
// function logData<T,U>(data: T,data2:U):T|U{
//     console.log(data,data2);
//     return Date.now() %2? data:data2
// }
// // 任意指定数据类型
// logData<number,boolean>(100,false)
// logData<string,number>('hello',123)

// 3、泛型接口
// interface PersonInterface<T>{
//     name:string
//     age:number
//     extraInfo:T
// }
// const p:PersonInterface<number>={
//     name:'老六',
//     age:36,
//     extraInfo:250
// }


// 4、泛型类
// class Person<T>{
//     constructor(
//         public name:string,
//         public age:number,
//         public extraInfo:T
//     ){}
//     showInfo(){
//         console.log(`姓名：${this.name},年龄:${this.age},${this.extraInfo}会员`);
        
//     }
// }

// const p = new Person<string>('小四',24,'vip')
// p.showInfo()