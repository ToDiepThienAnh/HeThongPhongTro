// Libraries
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Css
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'y

// Components
import Layout from './Components/Layout';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Layout} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
