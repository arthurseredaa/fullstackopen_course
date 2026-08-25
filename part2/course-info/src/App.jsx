import {Course} from "./components/Course.jsx";

const courses = [
  {
    id: 0,
    name: "Half Stack application development",
    parts: [
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
  },
  {
    name: 'Node.js',
    id: 1,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

const App = () => {

  return (
      <div>
        {courses.map(({id, ...rest}) => <Course {...rest} key={id} />)}
      </div>
  )
}

export default App