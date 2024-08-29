// //类的使用
// class Person{
//     // public修饰的在 内部，子类和外部都能调用
//     public name:string
//     // readonly设置属性为只读,只能赋值一次
//     public readonly age:number
//     constructor(name:string,age:number){
//        this.name =name
//        this.age=age 
//     }
//     speak(){
//         console.log(`你好，我的名字是${this.name},年龄是${this.age}`);
//     }
// }

// // 继承
// class Student extends Person{
//     // protected修饰的在 内部，子类能调用
//     protected grade:string
//     private IDCard:number
//     constructor(name:string,age:number, grade:string,IDCard:number){
//         super(name,age)
//         this.grade=grade
//         this.IDCard=IDCard
//     }
//     getIDCard(){
//         console.log(this.IDCard);
        
//     }
    
//     study(){
//         console.log(`${this.name}正在学习`);
//     }
//     override speak(){
//         console.log(`你好，我的名字是${this.name},年龄是${this.age},年级是${this.grade}`);
//     }
// }

// const Tom = new Student('Tom',18,'高三',13001)
// // Tom.study()
// Tom.speak()
// // Tom.age=99
// // console.log(Tom.grade);
// // Tom.getIDCard()

