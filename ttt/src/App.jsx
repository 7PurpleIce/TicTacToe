import { Information } from './components/Information'
import { Field } from './components/Field'
import { useState } from 'react'

const AppLayout = ({field, isDraw, isGameEnded, currentPlayer}) => {
  return(
  <div>
    <Information
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
    />
    <Field 
      field={field}
    /> 
    <button>Перезапуск игры</button>
  </div>
  )
}

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState(Array(9).fill(''))
  return (
    <AppLayout 
      field={field}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
    />
  )
}

export default App
