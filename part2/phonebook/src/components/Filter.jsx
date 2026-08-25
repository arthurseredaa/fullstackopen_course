export const Filter = ({nameFilter, handleChange}) => {
    return (
        <div>
            Filter by name: <input value={nameFilter} onChange={handleChange} />
        </div>
    )
}