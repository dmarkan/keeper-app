import React from "react";
import notes from "../notes";

const Note = (props) => {
return <main className="note"><h1>{props.title}</h1> <p>{props.content}</p></main>
}

export default Note;