// interface 与 type 的区别
// 相同点： interface 和 type 都可以⽤于定义对象结构，在定义对象结构时两者可以
// 不同点：1、interface ：更专注于定义对象和类的结构，⽀持继承、合并。
//        2、type ：可以定义类型别名、联合类型、交叉类型，但不⽀持继承和⾃动合并。


//使⽤ interface 定义 Person 对象
// interface PersonInterface {
//     name: string;
//     age: number;
//     speak(): void;
// }
// // 使⽤ type 定义 Person 对象
// type PersonType = {
//     name: string;
//     age: number;
//     speak(): void;
// };
// 使⽤PersonInterface
/* let person: PersonInterface = {
    name:'张三',
    age:18,
    speak(){
        console.log(`我叫：${this.name}，年龄：${this.age}`)
    }
} */
// 使⽤PersonType
// let person: PersonType = {
//     name:'张三',
//     age:18,
//     speak(){
//         console.log(`我叫：${this.name}，年龄：${this.age}`)
//     }
// }