const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

const sendMail = require('./helpers/sendMail');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))

router.get('/', function(req, res) { res.sendFile(path.join(__dirname + '/public/index.html')) });
router.get('/quienes-somos', (req, res) => { res.sendFile(path.join(__dirname + '/public/quienes-somos.html')) });
router.get('/conocenos', (req, res) => { res.sendFile(path.join(__dirname + '/public/conocenos.html')) });
router.get('/nuestro-trabajo', (req, res) => { res.sendFile(path.join(__dirname + '/public/nuestro-trabajo.html')) });
router.get('/area-de-trabajo', (req, res) => { res.sendFile(path.join(__dirname + '/public/area-de-trabajo.html')) });
router.get('/contactanos', (req, res) => { res.sendFile(path.join(__dirname + '/public/contactanos.html')) });


router.post('/sendmail', sendMail.sendMail);

app.use('/', router);

const portApp = 3000;
app.listen(portApp, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${portApp}`);
});