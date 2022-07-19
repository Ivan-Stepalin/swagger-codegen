import {useEffect, useState} from "react"
import petApi from "./utils/api"
import "./App.css"
import * as SwaggerPetstore from "./stub"

function App() {
	const [pets, setPets] = useState([])

	useEffect(() => {
		let status = [1] // [String] | Status values that need to be considered for filter
		petApi.findPetsByStatus(status, (error, data) => {
			if (error) {
				console.error(error)
			} else {
				setPets(data.slice(0, 20))
			}
		})
	}, [])

	return <div className="App">{pets.length && pets.map((pet, i) => <p key={i}>{pet.name}</p>)}</div>
}

export default App
