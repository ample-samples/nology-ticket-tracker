import { Ticket } from "../../components/Ticket"
import team from "../../data/team"
import { FormEvent, useState } from "react"

const filterMatchesName = (searchItem: string, userSearch: string) => {
  if (userSearch === '') {
    return true
  } else if (searchItem.toLowerCase().includes(userSearch.toLowerCase())) {
    return true
  }
  return false
}

const Tickets = () => {
  const [searchTerm, setSearchTerm] = useState("")

	const handleSearch = (event: FormEvent) => {
					const inputTarget = event.currentTarget as HTMLInputElement
					setSearchTerm(inputTarget.value)
				}

  return (
		<>
			<input type="text" onChange={handleSearch} />
			<section className="main">
				{team.filter(({ name }) => filterMatchesName(name, searchTerm))
					.map(({ name, role, id }) => <Ticket name={name} role={role} key={id} />)}
			</section>
		</>
  )
}

export default Tickets
