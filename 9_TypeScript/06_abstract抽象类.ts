// //抽象类，只能继承 不能new
// abstract class Package {
//     // 构造方法
//     constructor(public weight: number) { }
//     // 抽象方法
//     abstract calculate(): number
//     // 具体方法
//     printPackage() {
//         console.log(`快递的重量为:${this.weight}kg,运费为：${this.calculate()}`);
//     }
// }

// class StandarPackage extends Package {
//     constructor(weight: number, 
//         public unitPrice: number,
//         public additional:number) {
//         super(weight)
//         this.unitPrice=unitPrice
//         this.additional=additional
//     }
//     calculate(): number {
//         if(this.weight>10){
//             return 10 * this.unitPrice+(this.weight-10)*(this.additional+this.unitPrice)
//         }else{
//             return this.weight * this.unitPrice
//         }
//     }
// }

// //   重量10kg,每kg8元，超过10kg每kg增收两元
// const box =new StandarPackage(11,8,2)

// box.printPackage()
