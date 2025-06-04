import './components/todo/todo.css' 
import ToDoData from './components/todo/todoData'
import ToDoNew from './components/todo/todoNew'
import ReactLogo from './assets/react.svg'

const App = () => {

  const leminwang = "LeMinhQuang";
  const age = 21 ;
  const data = {
    address : "HaNoi",
    phone : "0348773921"
  }

  return (
    <div className="todo-container">

        <div className="todo-title">Todo list</div>

        <ToDoNew/>

        <ToDoData
          name={leminwang}
          age={age}
          data={data}
        />

        <div className='todo-image'>
          <img src={ReactLogo} alt="logo React" className="logo react" />
        </div>

    </div>
  )
}

export default App
