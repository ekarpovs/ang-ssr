import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';

import * as express from 'express';
import { join } from 'path';

enableProdMode();


// Express server
const app = express();

const DIST_FOLDER = join(process.cwd(), 'dist');

const { AppServerModuleNgFactory } = require('./server/main');

// set up engine for .html file
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
  res.render('index', { req, res});
  console.log(`new GET request at : ${req.originalUrl}`);
});

// Start up the server and listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server started on http://localhost:${PORT}`);
});
