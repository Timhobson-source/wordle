import Tile from "./Tile"

const Row = (props) => {
    // TODO - default props with autoFocusOnFirst=False makes this cleaner
    const firstRowFocus = props.autoFocusOnFirst ? true : false;
    return (
        <div className="grid">
            <Tile handleKeyDown={props.handleKeyDown} handleTextChange={props.handleTextChange} location={props.location} autoFocus={firstRowFocus} />
            <Tile handleKeyDown={props.handleKeyDown} handleTextChange={props.handleTextChange} location={props.location} />
            <Tile handleKeyDown={props.handleKeyDown} handleTextChange={props.handleTextChange} location={props.location} />
            <Tile handleKeyDown={props.handleKeyDown} handleTextChange={props.handleTextChange} location={props.location} />
            <Tile handleKeyDown={props.handleKeyDown} handleTextChange={props.handleTextChange} location={props.location} />
        </div>
    )
}

export default Row;
