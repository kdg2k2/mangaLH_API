import express from 'express';
import viewEngine from './config/viewEngine';
import initWebroutes from './route/web';
require('dotenv').config();
const cors = require("cors");

let app = express();
app.use(cors());

viewEngine(app);
initWebroutes(app);

let port = process.env.PORT || 6969;
//port === undifined => port = 6969

app.listen(port, () => console.log('Server listening on port ' + port));