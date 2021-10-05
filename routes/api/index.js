const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// add prefix of '/pizzas' to route created in 'pizza-routes.js'
router.use('/pizzas', pizzaRoutes);

module.exports = router;