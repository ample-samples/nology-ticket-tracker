import "./Ticket.scss"
import { useState } from "react"

export const Ticket = () => {
  const [ counter, setCounter ] = useState(0)
  const handleIncrement = () => setCounter(counter + 1)
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <div className="ticket">
      <h3 className="ticket__heading ticket__heading--name">name</h3>
      <h3 className="ticket__heading ticket__heading--role">role</h3>
      <section className="ticket__counter">
        <h4 className="ticket__counter-heading">Counter</h4>
        <p>{counter}</p>
        <div className="ticket__counter-controls">
          <button className="ticket__counter-decrement" onClick={handleDecrement}>-</button>
          <button className="ticket__counter-increment" onClick={handleIncrement}>+</button>
        </div>
      </section>
    </div>
  )
}
