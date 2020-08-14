const mondayService = require('../services/monday-service');
const timelineService = require('../services/timeline-service');
const {
  SYNC_TYPES
} = require('../constants');
const API_TOKEN = process.env.API_TOKEN;

async function setTimeline(req, res) {
  const {
    payload
  } = req.body;

  const {
    inboundFieldValues
  } = payload;

  const {
    boardId,
    itemId,
    sourceColumnId,
    targetColumnId,
    statusColumnId
  } = inboundFieldValues;

  const token = API_TOKEN;
  const ship_date = await mondayService.getColumnValue(token, itemId, sourceColumnId);
  if (!ship_date) {
    return res.status(200).send({});
  }

  const status = await mondayService.getColumnText(token, itemId, statusColumnId);

  const transformedTimeline = await timelineService.transformTimeline(ship_date, status);

  await mondayService.changeColumnValue(token, boardId, itemId, targetColumnId, transformedTimeline);

  return res.status(200).send({});
}

async function getTimelineTypes(req, res) {
  return res.status(200).send(SYNC_TYPES);
}

async function subscribe(req, res) {
  return res.status(200).send({
    webhookId: req.body.payload.subscriptionId,
    result: 'subscribed'
  });
}

async function unsubscribe(req, res) {
  return res.status(200).send({
    result: 'unsubscribed'
  });
}

module.exports = {
  setTimeline,
  getTimelineTypes,
  subscribe,
  unsubscribe
};
