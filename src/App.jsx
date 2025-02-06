import './App.css'
import React from "react"
import Home from "./Home"

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet,
} from "react-router-dom"

function App() {

	return (
		<Router>
				<Routes>
					<Route path="/" element={<Home />} />	
				</Routes>
		</Router>
	);
}

export default App
