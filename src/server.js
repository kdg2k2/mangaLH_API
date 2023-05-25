import express from 'express';
import viewEngine from './config/viewEngine';
import initWebroutes from './route/web';
require('dotenv').config();

let app = express();

viewEngine(app);
initWebroutes(app);

let port = process.env.PORT || 6969;
//port === undifined => port = 6969

app.listen(port, () => console.log('Server listening on port ' + port));