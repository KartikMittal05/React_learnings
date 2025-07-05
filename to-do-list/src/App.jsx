import AppName from './components/AppName.jsx';
import AddTodo from './components/AddTodo.jsx';
import Todoitem1 from './components/Todoitem1.jsx';
import Todoitem2 from './components/Todoitem2.jsx';
import "./App.css";
function App() {
  return <center className='todo-container'>
    <AppName />
    <AddTodo />
    <div className="items-container">
      <Todoitem1 />
      <Todoitem2 />
    </div>

  </center>
}
export default App;