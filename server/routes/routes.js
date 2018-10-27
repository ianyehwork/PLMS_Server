// Concrete Routes Import
const PosterRoutes = require('./poster-routes');
const UserRoutes = require('./user-routes');
const CustomerRoutes = require('./customer-routes');

module.exports = (app) => {
    // App Routes Definition
    PosterRoutes(app);
    UserRoutes(app);
    CustomerRoutes(app);
}