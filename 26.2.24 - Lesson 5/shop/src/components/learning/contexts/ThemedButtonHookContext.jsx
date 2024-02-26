import React, { useContext } from 'react'
import ThemeContext from '../../../contexts/ThemeContext'

const ThemedButtonHookContext = () => {
  const myTheme = useContext(ThemeContext);

  return (
    <div>
        <button style={{backgroundColor: myTheme.theme === 'dark' ? '#333' : 'white', color: 'white'}}>Click Me</button>
    </div>
  )
}

export default ThemedButtonHookContext;
