const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

const sendMail = require('./helpers/sendMail');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')))

router.get('/',function(req,res){
  console.log('enter here');
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.post('/sendmail', sendMail.sendMail);

app.use('/', router);

const portApp = 3000;
app.listen(portApp, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${portApp}`);
  });