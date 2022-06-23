import React from 'react';
import TodoAddBtn from './../TodoAddBtn/index';
import TodoList from './../TodoList/index';
import './index.css';

const TodoTitleArea= ({todos, setSelectedTodoIndex, selectedTodoIndex, addTodo,deleteTodo}) => {
    return (
        <div className='TodoTitleArea'>
            <h1>Planner</h1>
            <TodoList 
            todos={todos} 
            setSelectedTodoIndex={setSelectedTodoIndex}
            selectedTodoIndex={selectedTodoIndex}
            deleteTodo={deleteTodo}
            />
            <TodoAddBtn 
            onClick={addTodo} 
            />
        </div>
    );
};

export default TodoTitleArea;