import { useEffect } from 'react'


function App() {
  
  useEffect(() => {
    const webgazer=window.webgazer 
    webgazer.setGazeListener((data, clock) => {
      console.log(data, clock)
    }).begin()
  }, []);

  return (
    <p>Hello World</p>
  )
}

export default App
