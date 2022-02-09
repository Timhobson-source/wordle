import { useState } from 'react';
import Row from './components/Row';

function App() {
  const row_len = 5;
  // const col_len = 6;

  const [location, setLocation] = useState({ x: 1, y: 1 })

  const incrementLocation = (loc) => {
    setLocation({ x: loc.x + 1, y: loc.y });
  }
  // const decrementLocation = (loc) => {
  //   setLocation({ x: loc.x - 1, y: loc.y });
  // }

  const handleTextChange = (e, loc) => {
    if (loc.x < row_len) {
      e.target.nextElementSibling.focus();
      incrementLocation(loc)
    }
  }

  return (
    <div>
      <div className='container'>
        <header>
          <h1 className="title">Wordle!</h1>
        </header>
        <Row handleTextChange={handleTextChange} location={location} autoFocusOnFirst={true} />
        <Row handleTextChange={handleTextChange} location={location} />
        <Row handleTextChange={handleTextChange} location={location} />
        <Row handleTextChange={handleTextChange} location={location} />
        <Row handleTextChange={handleTextChange} location={location} />
        <Row handleTextChange={handleTextChange} location={location} />
      </div>
    </div>
  );
}

export default App;
