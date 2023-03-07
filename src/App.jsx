
import React from 'react'
import './App.css'
import Start from './Start'
import useWindowSize from './hooks/useWindowSize';
import UnSupported from './Pages/UnSupported';

const App = () => {

  const { width } = useWindowSize();

  return (
    <div className='App'>
      
      {width < 270 ? <UnSupported/> :
         <Start /> 
      }
     
    </div>
  )
}

export default App
