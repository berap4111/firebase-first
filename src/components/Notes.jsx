import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = async () => {
    if (!note) return;
    await addDoc(collection(db, "notes"), { text: note });
    setNote("");
    fetchNotes();
  };

  const fetchNotes = async () => {
    const snapshot = await getDocs(collection(db, "notes"));
    setNotes(snapshot.docs.map((doc) => doc.data().text));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={addNote}>Add</button>
      <ul>
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
