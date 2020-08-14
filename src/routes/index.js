const express = require('express');
const router = express.Router();
const syncRoutes = require('./sync');
const timelineRoutes = require('./timeline');

router.use(syncRoutes);
router.use(timelineRoutes);
router.get('/', function (req, res) {
  res.json(getHealth());
});

router.get('/health', function (req, res) {
  res.json(getHealth());
  res.end();
});

function getHealth() {
  return {
    ok: true,
    message: 'Healthy'
  };
}

module.exports = router;
