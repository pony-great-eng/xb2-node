const express = require ('express');
const app = express ();
const port = 3000;

app.listen(port, () => {
    console.log('服务已启动！！！')
});

app.get('/',(request,response)=>{
  response.send('你好啊');
})

const data = [
{
        id:1,
        title:'关山月',
        content:'明月出天山，苍茫云海间'
},
 {
    id:2,
    title:'望岳',
    content:'会当临绝顶，一览众山小'
}
,
{
    id:3,
    title:'忆江南',
    content:'日出江花红似火，春来江水绿如蓝'
}
];

app.get ('/post',(request,response) =>{
    response.send(data);
});

app.get('/post/:postId', (request, response) => {
    // 获取ID
    const {postId } = request.params;

    // 查找具体内容
    const posts = data.filter(item => item.id == postId );

    //做出响应
    response.send(posts[0]);
})