import React from "react"
import GlobalStyle from "./globalStyles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Homepage/Home"
import { Navbar } from "./components"

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	)
}

export default App
