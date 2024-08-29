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
