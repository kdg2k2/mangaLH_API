import express from 'express';
import homeController from '../controllers/home'
import listController from '../controllers/list'

let router = express.Router();

let initWebRoutes = (app) => {
	router.get('/', homeController)
	router.get('/list', listController)

	return app.use('/', router);
};

module.exports = initWebRoutes;
