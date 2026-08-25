export const List = ({persons}) => (
    <>
        {persons.map((person) => <p key={person.id}>{person.name}: {person.number}</p>)}
    </>
)