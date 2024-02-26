import React from 'react'
import ThemeContext from '../../../contexts/ThemeContext'

const ThemedButton = () => {
  return (
    <div>
      <ThemeContext.Consumer>

        { myTheme => (
            <button style={{backgroundColor: myTheme.theme === 'dark' ? '#333' : 'white', color: 'white'}}>Click Me</button>
        )}

      </ThemeContext.Consumer>
    </div>
  )
}

export default ThemedButton
