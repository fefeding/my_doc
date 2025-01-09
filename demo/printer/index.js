var Printer = require('pdf-to-printer');

// // 获取打印机列表
// Printer.getPrinters().then((list) => {
//     console.log(list);
// });

// Printer.getDefaultPrinter().then((list) => {
//     console.log('default', list);
// });

Printer.print('./doc/足球比赛.pdf').then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error);
});