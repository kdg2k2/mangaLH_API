import express from 'express';
import homeController from '../controllers/home'
import mangaDetailController from '../controllers/mangaDetail'
import mangaReadController from '../controllers/mangaRead'
import searchController from '../controllers/search'
import randomController from '../controllers/random'
import listController from '../controllers/list'

let router = express.Router();

let initWebRoutes = (app) => {
	router.get('/', homeController)
	router.get('/search', searchController)
	router.get('/list', searchController)
	// router.get('/list', listController)
	router.get('/random', randomController)
	router.get('/:name', mangaDetailController)
	router.get('/:name/:chap', mangaReadController)

	return app.use('/', router);
};

module.exports = initWebRoutes;
