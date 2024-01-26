/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
	return (
		<Card className='my-4 p-4 rounded'>
			<Link to={`/book/${book._id}`}>
				<Card.Img src={book.image} variant='top' />
			</Link>
			<Card.Body>
				<Link to={`/book/${book._id}`}>
					<Card.Title as='div'>
						<strong>{book.title}</strong>
					</Card.Title>
				</Link>
				<Card.Text as='h4'>{book.author}</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default Book;
