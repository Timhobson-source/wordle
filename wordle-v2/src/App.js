import { useState } from 'react';
import Row from './components/Row';
import WORDS from './words/words';

function App() {
  function createTargetWord(words) {
    return words[3].toUpperCase().split('');
  }
  const target = createTargetWord(WORDS);

  const row_len = 5;
  const col_len = 6;

  const [location, setLocation] = useState({ x: 1, y: 1 })

  const getRowSubmission = (e) => {
    console.log(e);
    let cell = e.target.parentElement.firstChild;
    let submission = "";
    let counter = 1;
    while (counter <= row_len) {
      submission += cell.value;
      counter += 1;
      cell = cell.nextElementSibling;
    }
    return submission.toUpperCase();
  }

  const getMatches = (submission) => {
    let matches = [];
    for (let i = 0; i < row_len; i++) {
      let letter = submission[i];
      if (letter === target[i]) {
        matches.push('green');
      }
      else if (
        target.includes(letter)
        && !submission.slice(0, i).includes(letter)
      ) {
        matches.push('yellow');
      }
      else {
        matches.push('grey');
      }
    }
    return matches;
  }

  const formatRowBasedOnMatches = (e, matches) => {
    let cell = e.target.parentElement.firstChild;
    let counter = 0;
    while (counter < row_len) {
      cell.className = matches[counter] + '_tile';
      cell = cell.nextElementSibling;
      counter += 1;
    }
  }

  const handleCompleteRow = (e) => {
    console.log("Handling complete row.");
    let rowSubmission = getRowSubmission(e);
    console.log(rowSubmission);
    if (WORDS.includes(rowSubmission)) {
      let matches = getMatches(rowSubmission.split(''));
      console.log(matches);

      formatRowBasedOnMatches(e, matches);
      return true;
    }
    else {
      alert("Not a valid word!");
      return false;
    }
  }

  const handleTextChange = (e, loc) => {
    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      // do nothing  
    }
    else if (loc.x < row_len) {
      e.target.nextElementSibling.focus();
      setLocation({ x: loc.x + 1, y: loc.y });
    }
    else if (loc.x === row_len) {
      setLocation({ x: loc.x + 1, y: loc.y });
    }
  }

  const handleKeyDown = (e, loc) => {
    if (e.code === "Backspace") {
      if (loc.x > 1 && loc.x <= row_len) {
        setLocation({ x: loc.x - 1, y: loc.y });
        e.target.previousSibling.focus();
      }
      else if (loc.x > row_len) {
        setLocation({ x: loc.x - 1, y: loc.y });
      }
    }
    else if (e.code === "Enter" && loc.x > row_len) {
      if (loc.y < col_len && handleCompleteRow(e)) {
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
