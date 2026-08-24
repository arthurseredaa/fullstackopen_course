import {useState} from "react";

const ANECDOTES = [
    {
        text: 'If it hurts, do it more often.',
        votes: 0,
        id: 0,
    },
    {
        text: 'Adding manpower to a late software project makes it later!',
        votes: 0,
        id: 1,
    },
    {
        text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        votes: 0,
        id: 2,
    },
    {
        text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes: 0,
        id: 3,
    },
    {
        text: 'Premature optimization is the root of all evil.',
        votes: 0,
        id: 4,
    },
    {
        text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        votes: 0,
        id: 5,
    },
    {
        text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        votes: 0,
        id: 6,
    },
    {
        text: 'The only way to go fast, is to go well.',
        votes: 0,
        id: 7,
    },
]

const getRandomNumber = () => Math.floor(Math.random() * ANECDOTES.length);

export const Anecdotes = () => {
    const [anecdotes, setAnecdotes] = useState(ANECDOTES);
    const [currentIndex, setCurrentIndex] = useState(() => getRandomNumber());

    const current = anecdotes[currentIndex]
    const topAnecdote = anecdotes.reduce((top, anecdote) => anecdote.votes > top.votes ? anecdote : top, anecdotes[0])

    function handleNext() {
        setCurrentIndex(getRandomNumber());
    }

    function handleVote() {
        setAnecdotes((anecdotes) => anecdotes.map((anecdote, index) => (
            index === currentIndex ? {...anecdote, votes: anecdote.votes + 1} : anecdote
        )))
    }

    return (
        <div style={{width: '30vw'}}>
            <p>{current.text}</p>
            <p>has {current.votes} votes</p>
            <button onClick={handleNext}>Next</button>
            <button onClick={handleVote}>Vote</button>

            {topAnecdote.votes > 0 && (
                <>
                    <h2>Anecdote with the most votes</h2>
                    <p>{topAnecdote.text}</p>
                    <p>has {topAnecdote.votes} votes</p>
                </>
            )}
        </div>
    )
}
