const Part = ({part, exercises}) => <p>{part} {exercises}</p>

export const Content = ({content}) => (
    <>
        {content.map(({id, ...rest}) => (
            <Part key={id} {...rest} />
        ))}
    </>
)