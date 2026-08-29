import express from 'express';
import {generateNoteId} from "./utils/generateNoteId.js";

const PORT = 3001;

let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true
    },
    {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
]

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = notes.find((note) => note.id === id);

    if (!note) {
        return res.status(404).end();
    }

    res.json(note);
})

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = notes.find((note) => note.id === id);

    if (!note) {
        return res.status(404).end();
    }

    notes = notes.filter((note) => note.id !== id);
    res.status(204).end();
})

app.post('/api/notes', (req, res) => {
    const note = req.body;

    if (!note.content) {
        return res.status(400).json({
            error: 'Content field is missing'
        })
    }

    const newNote = {
        id: generateNoteId(notes),
        content: note.content,
        important: note.important || false
    }

    notes.push(newNote);
    res.status(201).json(newNote);
})

app.listen(PORT, () => console.log(`Example app listening on port: ${PORT}`));