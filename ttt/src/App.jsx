import styles from 'app.module.css'
import { Information } from './components/Information'
import { Field } from './components/Field'

const AppLayout = () => {
  <div>
    <Information />
    <Field /> 
    <button>Перезапуск игры</button>
  </div>
}
function App() {

  return (
    <AppLayout />
  )
}

export default App
