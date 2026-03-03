const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! mise와 Express가 잘 연결되었습니다.');
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.post('/posting', (req, res) => {
    const posting = req.body;
    // TODO: Handle the posting (e.g., save to database)
    console.log('Received posting:', posting);
    res.status(201).json({ message: 'Posting received successfully', data: posting });
});

app.post('/posting/:id/comments', (req, res) => {
    const postingId = req.params.id;
    const comment = req.body;
    // TODO: Handle the comment (e.g., save to database linked to postingId)
    console.log(`Received comment for posting ${postingId}:`, comment);
    res.status(201).json({
        message: 'Comment received successfully',
        data: { postingId, ...comment }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});