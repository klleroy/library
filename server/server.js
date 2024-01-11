import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';
import books from './data/books.js';

const PORT = process.env.PORT || 5002;

// Connect MongoDB
connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.get('/api/books', (req, res) => {
	res.json(books);
});

app.get('/api/books/:id', (req, res) => {
	const book = books.find((b) => b._id === req.params.id);
	res.json(book);
});

app.listen(PORT, () =>
	console.log(
		`Server is running on port http://localhost:${PORT}`.green.inverse
	)
);
