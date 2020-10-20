import React, {useState} from 'react'
import ReactDOM from 'react-dom'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick =() =>{setGood(good+1)}
  const handleBadClick = () =>{setBad(bad+1)}
  const handleNeutralClick = () =>{setNeutral(neutral+1)}
  const Total = () => good+bad+neutral  
  const calcAvg = () => {
	  let avg1 = (good*1+bad*(-1)+neutral*0)/Total()
	  return avg1
  }
  const positive = () => (good/Total())*100

  return (
    <div>
      <h1>give feedback</h1>
	  <button onClick={handleGoodClick}>good</button>
	  <button onClick={handleBadClick}>bad</button>
	  <button onClick={handleNeutralClick}>neutral</button>
	  <h3>statistics</h3>
	  <p>good {good}</p>
	  <p>bad {bad}</p>
	  <p>neutral {neutral}</p>
	  <p>Total {Total()}</p>
      <p>average {calcAvg()}</p>
	  <p>Positive {positive()}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)