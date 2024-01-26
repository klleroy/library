import { Row, Col } from 'react-bootstrap';
import Book from '../Components/Book.jsx';
import books from '../books.js';

const HomePage = () => {
	return (
		<>
			<h1>Book Shelf</h1>
			<Row>
				{books.map((book) => (
					<Col key={book._id} sm={12} md={10} lg={8} xl={3}>
						<Book book={book} />
					</Col>
				))}
			</Row>
		</>
	);
};
export default HomePage;
