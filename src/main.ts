import app from './app';
import { APP_PORT } from './app/app.config';
import { connection } from './app/database/mysql';

app.listen(APP_PORT, () => {
  console.log('服务启动啦啦啦！');
});

/**
 * 测试使用数据服务连接
 */
connection.connect(error => {
  if (error) {
    console.log('数据连接服务失败:', error.message);
    return;
  }

  console.log('成功连接数据服务');
});
