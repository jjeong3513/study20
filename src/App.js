import './App.css';
import { useState } from 'react';
import TodoContainer from './components/TodoContainer';
import TodoTitleArea from './components/TodoTitleArea';

function App() {

  const [todos, setTodos] = useState([ //setTodos로 값을 변경해주기 전까지 todos는 값의 불변성을 유지해야함
    {
      title: '😤아침7시기상',
      content: '오늘 계획했던 것들을 공부해야지',
    },
    {
      title: '😋점심 1시',
      content: '점심은 만칼로리 섭취',
    }
  ]);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(0);
  
  const setTodo = (newTodo) => { //새로 적은 값으로 todos를 교체
    const newTodos = [...todos]; // todos가 훼손되지 않도록 복사하여 새로운 newTodos 배열이 생성된 것임. 
    newTodos[selectedTodoIndex] = newTodo ; // 위에 생성된 newTodos는 새로 생성되었기 때문에 이름은 같지만 다른 레퍼런스를 가짐
    setTodos(newTodos);
  } 
   const addTodo = ()=>{
     setTodos([
       ...todos,
       {
        title:'😆Untitled',
        content:''
       }
     ])
     setSelectedTodoIndex(todos.length);
    }
     
       const deleteTodo = (index)=> {
         const newTodos = [...todos];
         newTodos.splice(index,1) //인덱스부터 한개까지 삭제된 배열 리턴   
         setTodos(newTodos) 
         if(index===selectedTodoIndex){
           setSelectedTodoIndex(0);
         }   
     }
  return (
    <div className="App">
      <TodoTitleArea 
      todos = {todos} 
      setSelectedTodoIndex={setSelectedTodoIndex}
      selectedTodoIndex={selectedTodoIndex}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      />
      <TodoContainer 
      todo = {todos[selectedTodoIndex]} 
      setTodo={setTodo}
      />
    </div>
  );
}

export default App;
