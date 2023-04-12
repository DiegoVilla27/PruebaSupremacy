import ReactDOM from 'react-dom/client';
import App from './pages';
import 'bootstrap';
import '/public/assets/scss/styles.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>,
	// </React.StrictMode>,
);
