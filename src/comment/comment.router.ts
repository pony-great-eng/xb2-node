import express from 'express';
import * as commentController from './comment.controller';
import { authGuard, accessControl } from '../auth/auth.middleware';
// import { filter } from './comment.middleware';
// import { paginate } from '../post/post.middleware';
// import { COMMENTS_PER_PAGE } from '../app/app.config';

const router = express.Router();

/**
 * 发表评论
 */
router.post('/comments', authGuard, commentController.store);

/**
 * 回复评论
 */
router.post('/comments/:commentId/reply', authGuard, commentController.reply);

/**
 * 修改评论
 */
router.patch(
  '/comments/:commentId',
  authGuard,
  accessControl({ possession: true }),
  commentController.update,
);

/**
 * 删除评论
 */
router.delete(
  '/comments/:commentId',
  authGuard,
  accessControl({ possession: true }),
  commentController.destroy,
);


/**
 * 导出路由
 */
export default router;