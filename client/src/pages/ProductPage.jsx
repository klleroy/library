import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card} from 'react-bootstrap';
import books from '../books';

const ProductPage = () => {
	const { id: bookId } = useParams();
	const book = books.find((b) => b._id === bookId);

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			<Row>
				<Col md={4}>
					<Image src={book.image} alt={book.title} fluid />
				</Col>
				<Col md={4}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{book.title}</h3>{' '}
							<p className='fst-italic'>
								<strong>by:</strong> {book.author} (Author)
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h5>Description: </h5>
							<p>{book.description}</p>
						</ListGroup.Item>
						<Card>
							<ListGroup.Item>
								<h5>Product details:</h5>
								&nbsp;
								<p className='bookDetails'>
									<strong>
										<i>Publisher :</i>
									</strong>{' '}
									{book.publisher} ({book.publishYear})
								</p>
								<p className='bookDetails'>
									<strong>
										<i>Genre :</i>
									</strong>{' '}
									{book.genre}
								</p>
								<p className='bookDetails'>
									<strong>
										<i>Paperback: </i>
									</strong>{' '}
									{book.paperback}
								</p>
								<p className='bookDetails'>
									<strong>
										<i>ISBN :</i>
									</strong>{' '}
									{book.isbn}
								</p>
							</ListGroup.Item>
						</Card>
					</ListGroup>
				</Col>
				{/* <Col md={3}>
            <Card>
               <ListGroup.Item>
               </ListGroup.Item>
            </Card>
         </Col> */}
			</Row>
		</>
	);
};
export default ProductPage;
