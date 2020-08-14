const express = require('express');
const router = express.Router();

const timelineController = require('../controllers/timeline-controller.js');
const authenticationMiddleware = require('../middlewares/authentication').authenticationMiddleware;

router.post('/timeline/update', authenticationMiddleware, timelineController.setTimeline);
router.post('/timeline/types', authenticationMiddleware, timelineController.getTimelineTypes);
router.post('/timeline/subscribe', authenticationMiddleware, timelineController.subscribe);
router.post('/timeline/unsubscribe', authenticationMiddleware, timelineController.unsubscribe);

module.exports = router;
