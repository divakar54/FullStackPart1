import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
  return(
        <tr>
            <td>{text}</td>
            <td>{value}</td> 
        </tr>
  )
}

const Statistics = (props) => {
        if(props.Total>0){
          return (
            <div>
              <h3>Statistics</h3>
              <table>
                <tbody>
                <Statistic text="good" value={props.good} />
              <Statistic text="bad" value={props.bad} />
              <Statistic text="neutral" value={props.neutral} />
              <Statistic text="Total" value={props.Total} />
              <Statistic text="Average" value={props.Average} />
              <Statistic text="Positive" value={props.Positive} />
                </tbody>
              </table>
            </div>
          )
        }
        return(
          <div>
            <p>no feedback given</p>
          </div>
        )
}
const Button = ({text, handleClick}) => {
        return (
          <button onClick={handleClick}>
            {text}
          </button>
        )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
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
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Statistics good={good} bad={bad} neutral={neutral} Total={Total()} Average={calcAvg()} Positive={positive()} />
      </div>
    )  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)