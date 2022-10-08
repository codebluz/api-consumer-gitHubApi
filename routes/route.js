import express from 'express';
import RepositoryController from '../controllers/controller.js';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const router = express.Router();

router.get('/', RepositoryController.requestData);

export default router;

