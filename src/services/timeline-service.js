const mondayService = require('./monday-service');
var moment = require('moment');

const DATE_FORMAT = "YYYY-MM-DD";

class timelineService {
  static async transformTimeline(value, vendor2) {
    let date = moment(JSON.parse(value)["date"]);

    // vendors = 2 -> 28 days
    // vendors = 1 -> 21 days
    let subtract_days = vendor2 ? 28 : 21;

    // subtract() and add() mutate date
    // so format() is required to return value
    // otherwise start == end
    let start = date.subtract(subtract_days, 'days').format(DATE_FORMAT);
    let end = date.add(14, 'days').format(DATE_FORMAT);

    return JSON.stringify({
      "from": start,
      "to": end
    });
  }

  // I do not think this is ever used(controller appers to call mondayService)
  static async changeColumnValue(token, boardId, itemId, columnId, value) {
    mondayService.changeColumnValue(token, boardId, itemId, columnId, value);
  }
}

module.exports = timelineService;
