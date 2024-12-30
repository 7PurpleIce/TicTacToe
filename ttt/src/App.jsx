import { Information } from './components/Information'
import { Field } from './components/Field'
import { useState } from 'react'

const AppLayout = ({field, isDraw, isGameEnded, currentPlayer, restartGame, setField, onCellClick}) => {
  return(
  <div>
    <Information
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
    />
    <Field 
      field={field}
      onCellClick={onCellClick}
    /> 
    <button onClick={restartGame}>Перезапуск игры</button>
  </div>
  )
}

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState(['','','','','','','','','',])

  const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикали
    [0, 4, 8], [2, 4, 6]            // Диагонали
  ];

  const handleCellClick = (index) => {
    if (field[index] || isGameEnded) return;

    const updatedField = [...field]
    updatedField[index] = currentPlayer

    if (checkWin(updatedField)){
      setIsGameEnded(true);
      return;
    }

    if (!updatedField.includes('')){
      setIsDraw(true)
      return;
    }
    setField(updatedField)
    setCurrentPlayer(currentPlayer === "X" ? 'O' : "X")
  }

  const checkWin = (updatedField) => {
    for(let pattern of WIN_PATTERNS) {
      const [a,b,c] = pattern
      if(updatedField[a] && updatedField[a] === updatedField[b] && updatedField[a] === updatedField[c]){
        return true;
      }
    }
    return false
  }

  const restartGame = () => {
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setIsDraw(false)
    setField(Array(9).fill(''))
  }

  return (
    <AppLayout 
      field={field}
      setField={setField}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
      restartGame={restartGame}
      onCellClick={handleCellClick}
    />
  )
}

export default App
