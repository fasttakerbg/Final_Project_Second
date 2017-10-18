const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000; // for Heroku 
const app = express();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('backend/data.json');
const db = low(adapter);

app.use(express.static(__dirname + '/../public'));


app.get('/', (req, res) => {
    res.sendFile('index.html');
});


const controller = require('./controller')(db);

app.get('/api/carouselContent', controller.getCarouselContent);
app.get('/api/countryInfo', controller.getCountryInfo);
app.get('/api/recentPosts', controller.getRecentPosts);
app.get('/api/media', controller.getMedia);
app.get('/api/post', controller.getPost);
app.get('/api/comments', controller.getComments);
app.get('/api/blogArticles', controller.getBlogArticles);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});