const ToDoData = (props) => {

  // const object = {
  //   name : "Le Huu Minh" ,
  //   age : 21 
  // }

  // const {name , age} = object

  console.log(">>> check logs : " , props)
  const {name , age , data } = props
  // const name = props.name ;
  // const age = props.age ;
  // const data = props.data ;
    
    return (
        <div className='todo-data'>
          <div className="content">My name is {name}</div>
          <div className="content">My age is {age}</div>
          <div className="content">Learning React</div>
          <div className="content">Watching Youtube</div>
        </div>
    ) ;
}

export default ToDoData ;