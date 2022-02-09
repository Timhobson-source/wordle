import Tile from "./Tile"

const Row = (prop) => {
    // TODO - defualt props with autoFocusOnFirst=False makes this cleaner
    const firstRowFocus = prop.autoFocusOnFirst ? true : false;
    return (
        <div className="grid">
            <Tile handleTextChange={prop.handleTextChange} location={prop.location} autoFocus={firstRowFocus} />
            <Tile handleTextChange={prop.handleTextChange} location={prop.location} />
            <Tile handleTextChange={prop.handleTextChange} location={prop.location} />
            <Tile handleTextChange={prop.handleTextChange} location={prop.location} />
            <Tile handleTextChange={prop.handleTextChange} location={prop.location} />
        </div>
    )
}

export default Row;
