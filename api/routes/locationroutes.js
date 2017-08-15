'use strict';
module.exports = function(app) {
  var locations = require('../controllers/controller');

  //location routes
  app.route('/locations')
    .get(locations.list_all_locations)
    .post(locations.create_a_location);

  app.route('/locations/:locationId')
    .get(locations.read_a_location)
    .post(locations.update_a_location)
    .delete(locations.delete_a_location);

};
