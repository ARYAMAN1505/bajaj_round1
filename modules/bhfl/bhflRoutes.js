const Router = require('express-promise-router');
const router = Router({ mergeParams: true });

const { bfhlGetLogicController, bfhlPostLogicController } = require('./bhflController');

module.exports = () => {

  router.route('/').get(bfhlGetLogicController);
  router.route('/').post(bfhlPostLogicController);

  return router
};