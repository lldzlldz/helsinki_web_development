import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allClicks,setAll] = useState([])


  const handleGoodClick = () =>{
    setAll(allClicks.concat('G'))
    const counter = good + 1
    setGood(counter)
  }

  const handleNeutralClick = () =>{
    setAll(allClicks.concat('N'))
    const counter = neutral + 1
    setNeutral(counter)
  }

  const handleBadClick = () =>{
    setAll(allClicks.concat('B'))
    const counter = bad + 1
    setBad(counter)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text = 'good' />
      <Button handleClick={handleNeutralClick} text = 'neutral' />
      <Button handleClick={handleBadClick} text = 'bad' />

      <h1>stats</h1>
      
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{allClicks.length}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(good - bad) / allClicks.length || 0}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{((good * 100) / allClicks.length || 0).toFixed(2)} %</td>
          </tr>
        </tbody>
      </table>

    </div>


  )
}

export default App