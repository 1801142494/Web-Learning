
// let buf_4=Buffer.from([105,108,111,118,101,121,111,117]);
// console.log(buf_4.toString());

// []
// let buf=Buffer.from('hello');
// console.log(buf[0]);
// console.log(buf[0].toString(2));

// 溢出
// let buf=Buffer.from('hello');
// buf[0]=361;
// console.log(buf);

// 中文
// 一个utf-8的中文战3个字节
let buf=Buffer.from('你好');
console.log(buf);

