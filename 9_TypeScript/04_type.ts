//type 可以给任何变量创造别名

// 1.基本用法
// type num=number

// let price:num
// price=100

//2.联合类型
// type Status=number | string
// type Gender='男' | '女'

// function printStatus(data:Status){
//     console.log(data);
// }
// function printGender(data:Gender){
//     console.log(data);
// }

// printStatus(404)
// printStatus("404")
// printGender('男')
// printGender('女')

//3.交叉类型（并且类型）
// type Area = {
//     width: number
//     height: number
// }
// type Adress = {
//     province: string
//     city: string
// }
// type House = Adress & Area
// const house:House={
//     width: 20,
//     height: 30,
//     province: '江苏',
//     city: '南京'
// }

//4.type特殊情况,与void配合出现的问题
// type LogFunc = () => void
// const fn: LogFunc = function () {
//     // 能够有返回值
//     return 66
// }

// // 原因
// const arr1 = [1, 2, 3]
// const arr2 = [0]
// // 此时箭头函数会有返回值,所有允许上面有返回值
// arr1.forEach((k) => arr2.push(k))