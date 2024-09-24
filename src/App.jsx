import Index from './pages/Index'
import { Routes ,Route } from 'react-router-dom'
import Description from './pages/Description'
const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Index/>}/>
        <Route  path='/home' element={<Index/>}/>
        <Route  path='/description' element={<Description/>}/>
        <Route path='*' element={Error}/>
      </Routes>  
    </div>
  )
}

export default App
