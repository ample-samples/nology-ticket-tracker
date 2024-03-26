import "./app.scss"
import Nav from "./components/Nav/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tickets from "./routes/tickets/tickets"

function App() {
  return (
    <BrowserRouter>
      <section id="app">
        <Nav />
        <Routes>
          <Route path="/tickets" element={
            <Tickets />
          }></Route>
          <Route path="/" element={<h1>Home</h1>}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
