// 1、tuple元组 是一种特殊的数组类型

// let arr1:[string,number]
// let arr2:[string,boolean]
// let arr3:[number,...string[]]

// arr1=['hello',100]
// arr2=['word',true]
// arr3=[123,'a','b','c']
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// 2、enum 枚举 可以定义一组命名常量
// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction);
// console.log(Direction.Up);
// console.log(Direction[0]);

// 把数据类型设为枚举对象，意为只能传递枚举指定的参数
// function walk(str:Direction){
//     if(str===Direction.Up){
//         console.log('向上走');
//     }else if(str===Direction.Down){
//         console.log('向下走');
//     }else if(str===Direction.Left){
//         console.log('向左走');
//     }else if(str===Direction.Right){
//         console.log('向右走');
//     }else{
//         console.log('未知方向');
//     }
// }

// walk(Direction.Left)

// 2.1数字枚举
// enum Direction{
//     Up=10,
//     Down=15,
//     Left,
//     Right
// }
// console.log(Direction);

// 2.2字符串枚举(会失去映射)
// enum Direction{
//     Up='up',
//     Down='down',
//     Left='left',
//     Right='right'
// }
// console.log(Direction);

// 2.3常量枚举
// const enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }