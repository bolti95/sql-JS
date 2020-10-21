const routes = require('express').Router();
// with router we are able to put all of our routes, gets, posts in here
const routeController = require('../controllers/connectionController');

routes.get('/', routeController.getIndex);
routes.get('/StaffMember', routeController.getStaffMember);

module.exports = routes;