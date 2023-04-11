import ReactDOM from 'react-dom/client'
import App from './pages'
import 'bootstrap'
import '/public/assets/scss/styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<App />,
	// </React.StrictMode>,
);
