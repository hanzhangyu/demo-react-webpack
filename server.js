/**
 * Created by Paul on 2016/10/22.
 */
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3000));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'build')));

//解析json格式
app.use(bodyParser.json());
//解析body中的urlencoded字符
app.use(bodyParser.urlencoded({extended: true}));

// 设置请求头
app.use(function(req, res, next) {
    //CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    //忽略缓存
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
app.get('/',function(req, res){
    res.render('index');
});
app.get('/clickCounter',function(req, res){
    res.render('clickCounter');
});
app.get('/timer',function(req, res){
    res.render('timer');
});
app.get('/quadratic',function(req, res){
    res.render('quadratic');
});
app.get('/comment',function(req, res){
    res.render('comment');
});
app.get('/api/comments', function(req, res) {
    fs.readFile(COMMENTS_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/comments', function(req, res) {
    console.log(req.body)
    fs.readFile(COMMENTS_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        //建立评论缓存，错误可以回退
        var comments = JSON.parse(data);
        console.log(req.body)
        var newComment = {
            id: Date.now(),
            author: req.body.author,
            text: req.body.text,
        };
        comments.push(newComment);
        fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(comments);
        });
    });
});


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
