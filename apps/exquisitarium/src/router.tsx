import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./components/App"
import Playground from "./components/Playground"
import "./style.css"

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/playground" element={<Playground />} />
			</Routes>
		</BrowserRouter>
	)
}
