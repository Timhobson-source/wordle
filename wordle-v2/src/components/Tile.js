
const Tile = (prop) => {
    const nullMethod = () => { };
    return (
        <input
            autoFocus={prop.autoFocus}
            className="tile"
            type="text"
            maxLength={1}
            onChange={(e) => prop.handleTextChange(e, prop.location)}
            onKeyDown={(e) => prop.handleKeyDown(e, prop.location)}
            onClick={nullMethod}
            style={{ "textTransform": "uppercase" }}
        />
    )
}

export default Tile;

// onkeypress=prop.letter_handler
// input function could be a function that uses the state of the letters of each row
// and the location of each row. It must decide when to allow the key press to affect each row.
