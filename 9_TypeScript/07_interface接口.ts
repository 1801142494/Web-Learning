//interface 接口

// 1、用接口定义类
// interface PersonInterface{
//     name:string
//     age:number
//     speak(n:number):void
// }

// class Person implements PersonInterface{
//     constructor(
//         public name:string,
//         public age:number
//     ){}
//     speak(n: number): void {
//         for(let i=0;i<n;i++){
//             console.log(`我叫${this.name},年龄${this.age}`);
//         }
//     }
// }

// const p1=new Person('张三',18)
// p1.speak(2)



// 2、用接口定义对象
// interface PersonInterface{
//     name:string
//     age:number
//     run(n:number):void
// }

// const user:PersonInterface={
//     name:'李四',
//     age:25,
//     run(n) {
//         console.log(`我叫${this.name},我跑了${n}米`);
//     },
// }
// user.run(10000)


//3、用接口定义函数
// interface CountInterface {
//     (a: number, b: number): number
// }

// const count: CountInterface = (x, y) => {
//     return x + y
// }

//4、接口之间继承
// interface personInterface{
//     name:string,
//     age:number
// }
// interface StudentInterface extends personInterface{
//     grade:string
// }

// const stu:StudentInterface ={
//     name:'张三',
//     age:26,
//     grade:'博士生'
// }


// 5、接口的可合并性（可重复定义）
// interface personInterface{
//     name:string,
//     age:number
// }
// interface personInterface{
//     grade:string
// }

// const stu:personInterface ={
//     name:'赵六',
//     age:17,
//     grade:'高二'
// }