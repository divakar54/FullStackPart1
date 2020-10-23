import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
        return (
          <button onClick={handleClick}>
            {text}
          </button>
        )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const getRandom= () => Math.floor(Math.random()*6)
  const [vote, setVote] =useState(new Array(6).fill(0))
  const incVote=()=>
  {
    const vote1=[...vote]
    vote1[selected] += 1
    setVote(vote1)
  }
  const handleVote=()=>incVote()

  const handleClick= () => setSelected(getRandom())

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {vote[selected]} votes </p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleClick} text="next anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)