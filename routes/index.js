const routes = require('express').Router();
// with router we are able to put all of our routes, gets, posts in here
const routeController = require('../controllers/connectionController');

routes.get('/', routeController.getIndex);
routes.get('/StaffMember', routeController.getStaffMember);
routes.post('/createStaffMember', routeController.postStaff);
routes.delete('/deleteStaffMember', routeController.deleteStaffMember);

module.exports = routes;