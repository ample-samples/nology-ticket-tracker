import { Ticket } from "./components/Ticket"
import "./app.scss"
import team from "./data/team"

function App() {
  return (
    <section id="app">
      {team.map(({ name, role, id }) =>  <Ticket name={name} role={role} key={id} /> )}
    </section>
  )
}

export default App
