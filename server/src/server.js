const express = require('express');
const cors = require('cors');
const dbConfig = require('./db');
const bodyParser = require('body-parser');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const postRoutes = require('./routes/post.routes');
const categoriesRoutes = require('./routes/categories.routes');
const authRoutes = require('./routes/auth.routes');
const commentRoutes = require('./routes/comments.routes');
const multer = require('multer');

const app = express();
const PORT = 5001;

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to API!' });
})

app.use(express.json())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, 'src/images')
    }, filename: (req, file, cd) => {
        cd(null, req.body.name);
    }
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json('File has been uploaded!');
})

app.use('/api/posts', postRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comment', commentRoutes);

app.use(notFound);
app.use(errorHandler);

dbConfig()

app.listen(PORT, () => {
    console.log(`Calling on PORT: ${PORT}!`);
})
