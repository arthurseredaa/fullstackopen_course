import express from 'express';

const PORT = 3001;
const app = express()
app.use(express.json());

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    return res.json(persons);
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id;

    const person = persons.find((person) => person.id === id);

    if (!person) {
        return res.status(404).end();
    }

    return res.json(person);
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = persons.find((person) => person.id === id);

    if (!person) {
        return res.status(404).end();
    }

    persons = persons.filter((person) => person.id !== id);

    return res.status(204).end();
})

app.post('/api/persons', (req, res) => {
    const person = req.body;

    if (!person?.name) {
        return res.status(400).json({
            error: 'Name field is required',
        })
    }

    const newPerson = {
        id: persons.length + 1,
        name: person.name,
        number: person?.number,
    }

    persons.push(newPerson);

    return res.status(201).json(newPerson);
})

app.get('/api/info', (req, res) => {
    const personsCount = persons.length;
    const date = new Date();
    const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
    const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;

    const dateLine = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${hours}:${minutes}`;

    return res.send(`
        <h1>${personsCount} person${personsCount > 1 ? 's' : ''} in phonebook</h1>
        <p>${dateLine}</p>
    `)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})