const mondayService = require('../services/monday-service');
const syncService = require('../services/sync-service');
const {
  SYNC_TYPES
} = require('../constants');
const API_TOKEN = process.env.API_TOKEN;

async function copyToMondayColumn(req, res) {
  const {
    payload
  } = req.body;

  const {
    inboundFieldValues
  } = payload;

  // NEEDS UPDATED TO MATCH RECIPE!!!!!!!!
  const {
    boardId,
    itemId,
    sourceColumnId,
    targetColumnId,
    syncType
  } = inboundFieldValues;

  const token = API_TOKEN;
  const text = await mondayService.getColumnValue(token, itemId, sourceColumnId);
  if (!text) {
    return res.status(200).send({});
  }

  // NEEDS UPDATED !!!!!!!!!!!!!!!
  const transformedText = await syncService.transformText(text, syncType ? syncType.value : 'TO_UPPER_CASE');

  await mondayService.changeColumnValue(token, boardId, itemId, targetColumnId, transformedText);

  return res.status(200).send({});
}

async function getSyncTypes(req, res) {
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
  copyToMondayColumn,
  getSyncTypes,
  subscribe,
  unsubscribe
};
