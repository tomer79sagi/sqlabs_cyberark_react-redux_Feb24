import React, { useContext } from 'react'
import ThemeContext from '../../../contexts/ThemeContext'

const ThemedButtonHookCustomProvider = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div>
        <button 
          style={{backgroundColor: theme === 'dark' ? '#333' : 'white', color: 'white'}}
          onClick={() => setTheme('dark')}>Click Me</button>
    </div>
  )
}

export default ThemedButtonHookCustomProvider;
