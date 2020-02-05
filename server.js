const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads'});

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});

app.listen(app.get('port'));