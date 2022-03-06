import { useState } from 'react';
import Row from './components/Row';

function App() {
  const row_len = 5;
  const col_len = 6;

  const [location, setLocation] = useState({ x: 1, y: 1 })

  const incrementLocation = (loc) => {
    setLocation({ x: loc.x + 1, y: loc.y });
  }
  const decrementLocation = (loc) => {
    setLocation({ x: loc.x - 1, y: loc.y });
  }

  const handleTextChange = (e, loc) => {
    console.log(e);
    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      // do nothing  
    }
    else if (loc.x < row_len) {
      e.target.nextElementSibling.focus();
      incrementLocation(loc)
    }
    else if (loc.x === row_len && loc.y < col_len) {
      console.log(e.target.parentElement.nextElementSibling.firstChild.focus());
      setLocation({ x: 1, y: loc.y + 1 })
    }
  }

  const handleKeyDown = (e, loc) => {
    console.log(e);
    if (e.code === "Backspace" && loc.x > 1) {
      decrementLocation(loc);
      e.target.previousSibling.focus();
    }
  }

  return (
    <div>
      <div className='container'>
        <header>
          <h1 className="title">Wordle!</h1>
        </header>
        <Row handleKeyDown={handleKeyDown} handleTextChange={handleTextChange} location={location} autoFocusOnFirst={true} />
        <Row handleKeyDown={handleKeyDown} handleTextChange={handleTextChange} location={location} />
        <Row handleKeyDown={handleKeyDown} handleTextChange={handleTextChange} location={location} />
        <Row handleKeyDown={handleKeyDown} handleTextChange={handleTextChange} location={location} />
        <Row handleKeyDown={handleKeyDown} handleTextChange={handleTextChange} location={location} />
        <Row handleKeyDown={handleKeyDown} handleTextChange={handleTextChange} location={location} />
      </div>
    </div>
  );
}

export default App;
