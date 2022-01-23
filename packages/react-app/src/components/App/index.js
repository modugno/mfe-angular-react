import { useEffect, useState } from 'react'
import './styles.css';

function App() {
  const [open, setOpen] = useState(false)
  const onClick = () => {
    const event = new Event('changeColor')
    document.dispatchEvent(event)
  }

  useEffect(() => {
    const callback = ({ detail }) => {
      setOpen(detail.data)  
    }

    document.addEventListener('openButton', callback)

    return () => {
      document.removeEventListener('openButton', callback)
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React App
          <br />
          {open && <button onClick={onClick}>Mudar cor do Header</button>}
        </p>
      </header>
    </div>
  );
}

export default App;
