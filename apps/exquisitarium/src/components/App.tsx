import CreatureType from "./CreatureType"
import Sidebar from "./Sidebar"

export default function App() {
	return (
		<div className="flex-row h-screen w-screen">
			<Sidebar />
			<CreatureType />
		</div>
	)
}
