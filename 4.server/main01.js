const http = require('http');

//探索request
// const server = http.createServer((request, response) => {
//     console.log(request.headers['user-agent']);
//     response.write('hola~');
//     response.end();
//   });

//请求地址；请求与响应
// const server = http.createServer((request, response) => {
//   switch (request.url) {
//     case '/signup':

//     response.writeHead(200, {
//         'Content-Type': 'text/html',
//     });
//     response.write('<input />');
//      break;
//     case '/':
//     response.write('hello~');
//      break;
//     default:
//         response.writeHead(404);
//         response.write('404');
//      break;
//   }
//   response.end();
// });

//响应json格式数据
const server = http.createServer((request, response) => {
   
    const data = {
        id:1,
        title:'关山月',
        content:'明月出天山，苍茫云海间'
    }

    const jsonData = JSON.stringify(data);

    response.writeHead(200,{
        'content-Type':'application/json;charset=utf-8'
    });

    response.write(jsonData);

    response.end();
  });

server.listen(3000, () => {
    console.log('服务已启动！！！');
});
