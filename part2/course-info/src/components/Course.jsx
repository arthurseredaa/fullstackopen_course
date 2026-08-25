import {Header} from "./Header.jsx";
import {Content} from "./Content.jsx";
import {Total} from "./Total.jsx";

export const Course = ({parts, name}) => {
    const totalExercises = parts.reduce((a, b) => a + b.exercises, 0);

    return (
        <div>
            <Header course={name} />
            <Content content={parts} />
            <Total total={totalExercises} />
        </div>
    )
}