export const Form = ({name, phone, handleChange, handleSubmit, isExisting}) => (
    <form onSubmit={handleSubmit}>
        <div>
            name: <input value={name} onChange={(event) => handleChange(event, 'name')} />
        </div>
        <div>
            number: <input value={phone} onChange={(event) => handleChange(event, 'phone')} />
        </div>
        <div>
            <button disabled={isExisting} type="submit">add</button>
            {isExisting && <p>{name} is already exist in phonebook</p>}
        </div>
    </form>
)