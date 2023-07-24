import * as React from "react"
import * as ReactDOM from "react-dom/client"
import Router from "./src/router"
import "./src/style.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
)
