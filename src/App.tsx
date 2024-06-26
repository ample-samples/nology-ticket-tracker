import "./app.scss"
import Nav from "./components/Nav/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tickets from "./routes/tickets/tickets"
import Home from "./routes/home/home"
import team from "./data/teamExt"

function App() {
  return (
    <BrowserRouter basename="nology-ticket-tracker">
      <section id="app">
        <Nav />
        <Routes>
          <Route path="/tickets" element={
            <Tickets team={team} />
          }></Route>
          <Route path="/" element={<Home team={team} />}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
