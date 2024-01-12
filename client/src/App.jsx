import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';

const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<HomePage />
				</Container>
			</main>
			<Footer />
		</>
	);
};
export default App;
