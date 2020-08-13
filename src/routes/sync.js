const express = require('express');
const router = express.Router();

const syncController = require('../controllers/sync-controller.js');
const authenticationMiddleware = require('../middlewares/authentication').authenticationMiddleware;

router.post('/sync/copy', authenticationMiddleware, syncController.copyToMondayColumn);
router.post('/sync/types', authenticationMiddleware, syncController.getSyncTypes);
router.post('/sync/subscribe', authenticationMiddleware, syncController.subscribe);
router.post('/sync/unsubscribe', authenticationMiddleware, syncController.unsubscribe);

module.exports = router;
