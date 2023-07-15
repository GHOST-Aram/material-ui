import { 
	BrowserRouter as Router, 
	Routes, 
	Route 
} from "react-router-dom";
import { Notes } from "./pages/Notes.jsx";
import { Create } from "./pages/Create";
const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path = {'/'} element = {<Notes />} />
					<Route path={'/create'} element={<Create />}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
