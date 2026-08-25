import {Header} from "./components/Header.jsx";
import {Content} from "./components/Content.jsx";
import {Total} from "./components/Total.jsx";

const course = 'Half Stack application development'

const content = [
  {
    part: 'Fundamentals of React',
    exercises: 10,
    id: 0,
  },
  {
    part: 'Using props to pass data',
    exercises: 7,
    id: 1,
  },
  {
    part: 'State of a component',
    exercises: 14,
    id: 2,
  },
]

const App = () => {
  const totalExercises = content.reduce((a, b) => a + b.exercises, 0);

  return (
      <div>
        <Header course={course} />
        <Content content={content} />
        <Total total={totalExercises} />
      </div>
  )
}

export default App