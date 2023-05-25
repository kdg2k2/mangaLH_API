import express from 'express';
import homeController from '../controllers/home'
import mangaDetailController from '../controllers/mangaDetail'
import mangaReadController from '../controllers/mangaRead'

let router = express.Router();

let initWebRoutes = (app) => {
	router.get('/', homeController)
	router.get('/:name', mangaDetailController)
	router.get('/:name/:chap', mangaReadController)

	return app.use('/', router);
};

module.exports = initWebRoutes;
