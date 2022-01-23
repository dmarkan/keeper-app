import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import notes from "./notes"

function createNote(note) {
  return <Note
  id={note.id}
  title={note.title}
  content={note.content}
/>
}

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
