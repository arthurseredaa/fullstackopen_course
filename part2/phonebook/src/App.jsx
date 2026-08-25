import { useState } from 'react'
import {Filter} from "./components/Filter.jsx";
import {Form} from "./components/Form.jsx";
import {List} from "./components/List.jsx";

const PERSONA_DEFAULT_STATE = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

const App = () => {
  const [persons, setPersons] = useState(PERSONA_DEFAULT_STATE)
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameFilter, setNameFilter] = useState('');

  const isExisting = !!persons.find(person => person.name === newName)
  const filteredPersons = nameFilter ? persons.filter(person => person.name.startsWith(nameFilter)) : persons

  function handleSubmit(event) {
    event.preventDefault()

    setPersons((prevState) => ([ ...prevState, { name: newName, number: newPhone } ]))
    setNewName('');
    setNewPhone('');
  }

  function handleChange(event, type) {
    if (type === 'name') {
      setNewName(event.target.value)
      return;
    }

    if (type === 'phone') {
      setNewPhone(event.target.value)
      return;
    }

    setNameFilter(event.target.value)
  }

  return (
      <div>
        <h2>Phonebook</h2>
        <Filter nameFilter={nameFilter} handleChange={(event) => handleChange(event, 'filter')} />

        <Form name={newName} phone={newPhone} isExisting={isExisting} handleSubmit={handleSubmit} handleChange={handleChange} />
        <h2>Numbers</h2>
        <List persons={persons} />
      </div>
  )
}

export default App