const Header = (props) => {
  console.log(props)
  return(
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props1) => {
  console.log(props1)
  // const { name, exercises } = props.props;
  return (
    <p>{props1.props.name} {props1.props.exercises}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part props={props.parts[0]} />
      <Part props={props.parts[1]} />
      <Part props={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>  
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} /> 
    </div>
  )
}

export default App