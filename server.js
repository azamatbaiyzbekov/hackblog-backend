const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const routes = require('./routes');
const path = require('path');



const app = express();

const PORT = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleString();
    console.table({ url, method, requestedAt });
    next();
});


app.use(session({
    secret: '.., this is a secret',
    resave: false,
    saveUninitialized: false
}));


const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOption));

app.get('/', (req, res) => {
    res.send('<h1>Final-Project</h1>');
})



app.use('/api/v1/auth', routes.auth);

app.use('/api/v1/users', routes.users);

app.use('/api/v1/posts', routes.posts);

//
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('front-end/blog-app/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front-end', 'blog-app', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`)
});