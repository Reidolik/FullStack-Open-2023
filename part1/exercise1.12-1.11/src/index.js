import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [popular, setPopular] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })

  let random = Math.floor(Math.random() * anecdotes.length);

  const changeAnectode = () => {
    random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const updateVotes = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1
    })
  }

  const findPopularAnecdote = () => {
    const voteCountArray = Object.values(votes)
    const maxVotes = Math.max(...voteCountArray)
    const numberWithMaxVotes = voteCountArray.indexOf(maxVotes)

    setPopular(numberWithMaxVotes)
  }

  useEffect(() => {
    findPopularAnecdote()
  }, [selected, votes])

  return (
    <div>
      <h3>Anecdote of the day</h3>
      {anecdotes[selected]}
      <br />
      Votes: {votes[selected]}
      <br />
      <button onClick={changeAnectode}>Next anecdote</button>
      <button onClick={updateVotes}>Upvote</button>
      <br />
      <h3>Anecdote with most votes</h3>
      {anecdotes[popular]}
      <br />
      Votes: {votes[popular]}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)