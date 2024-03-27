import "./tickets.scss"
import { Ticket } from "../../components/Ticket/Ticket"
import { FormEvent, useState } from "react"
import { Team } from "../../types/TeamExt"

type TicketsProps = {
  team: Team
}

const filterMatchesName = (searchItem: string, userSearch: string) => {
  if (userSearch === '') {
    return true
  } else if (searchItem.toLowerCase().includes(userSearch.toLowerCase())) {
    return true
  }
  return false
}

const Tickets = ({ team }: TicketsProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleSearch, setRoleSearch] = useState("")

  const handleSearch = (event: FormEvent) => {
    const inputTarget = event.currentTarget as HTMLInputElement
    setSearchTerm(inputTarget.value)
  }

  const uniqueRoles = new Set<string>()
  team.forEach(member => {
    uniqueRoles.add(member.role)
  })

  const handleRoleChange = (event: FormEvent) => {
    const selectTarget = event.currentTarget as HTMLSelectElement
    setRoleSearch(selectTarget.value)
  }

  return (
    <>
      <section className="search">
        <input placeholder=" Name" className="search__name-input" type="text" onChange={handleSearch} />
        <select className="search__role-select" id="role" name="role" onChange={handleRoleChange}>
          <option value="">All roles</option>
          {Array.from(uniqueRoles).map(role => <option key={role} value={role}>{role}</option>)}
        </select>
      </section>
      <section className="main">
        {team.filter(({ name }) => filterMatchesName(name, searchTerm))
          .filter(({ role }) => filterMatchesName(role, roleSearch))
          .map(({ name, role, id }) => <Ticket name={name} role={role} key={id} />)}
      </section>
    </>
  )
}

export default Tickets
