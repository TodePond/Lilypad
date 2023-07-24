import { useState } from "react"
import Button from "./Button"

export default function Sidebar() {
	const [open, setOpen] = useState(true)

	if (!open)
		return (
			<div>
				<button onClick={() => setOpen(true)}>Open</button>
			</div>
		)

	return (
		<div>
			<div className="flex-initial bg-grey w-[200px] h-full p-sm gap-sm">
				<div>
					<div className="text-md">EXQUISITARIUM</div>
					{/* <div className="text-green">collaborative creatures</div> */}
				</div>
				<hr />
				<div>
					<CreatureTypeButton name="Tall Creatures" />
				</div>
			</div>
		</div>
	)
}

function CreatureTypeButton({ name }: { name: string }) {
	return <Button className="text-left bg-black py-xs px-sm">{name}</Button>
}
