import { Ticket } from "./components/Ticket"
import "./app.scss"
import team from "./data/team"
import Nav from "./components/Nav/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <section id="app">
        <Nav />
        <Routes>
          <Route path="/tickets" element={
            <section className="main">
              {team.map(({ name, role, id }) => <Ticket name={name} role={role} key={id} />)}
            </section>
          }></Route>
          <Route path="/" element={<h1>Home</h1>}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
