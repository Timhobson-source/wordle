import { useState } from 'react';
import Row from './components/Row';
import WORDS from './words/words';

function App() {
  function createTargetWord(words) {
    return words[3];
  }
  const target = createTargetWord(WORDS);

  const row_len = 5;
  const col_len = 6;

  const [location, setLocation] = useState({ x: 1, y: 1 })

  const handleCompeteRow = (e) => {
    console.log("Handling complete row.");
  }

  const handleTextChange = (e, loc) => {
    console.log(e);
    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      // do nothing  
    }
    else if (loc.x < row_len) {
      e.target.nextElementSibling.focus();
      setLocation({ x: loc.x + 1, y: loc.y });
    }
  }

  const handleKeyDown = (e, loc) => {
    if (e.code === "Backspace" && loc.x > 1) {
      setLocation({ x: loc.x - 1, y: loc.y });
      e.target.previousSibling.focus();
    }
    if (e.code === "Enter" && loc.x > row_len) {
      handleCompeteRow(e);
      if (loc.y < col_len) {
        console.log(e.target.parentElement.nextElementSibling.firstChild.focus());
        setLocation({ x: 1, y: loc.y + 1 });
      }
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
