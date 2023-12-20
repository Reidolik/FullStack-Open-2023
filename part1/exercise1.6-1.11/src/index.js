import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticsLine = ({ text, value, sign }) => (
  <tr>
    <td>{text}</td>
    <td>{value}{ sign === "%" ? sign : ""}</td>
  </tr>
);

const Statistics = ({ good = 0, neutral = 0, bad = 0 }) => (
  <div>
    <h1>Statistics</h1>
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="All" value={good + neutral + bad} />
        <StatisticsLine
          text="Average"
          value={((good - bad) / (good + neutral + bad)).toFixed(2)}
        />
        <StatisticsLine
          text="Positive"
          value={((good * 100) / (good + neutral + bad)).toFixed(2)}
          sign="%"
        />
      </tbody>
    </table>
  </div>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <br />
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      <br />
      {good === 0 && neutral === 0 && bad === 0 ?
        "No feedback given"
        :
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      }
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)