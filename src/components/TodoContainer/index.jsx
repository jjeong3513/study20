import React from 'react';
import './index.css';

const TodoContainer = ({todo, setTodo}) => {
    if(todo===undefined){
        return (
            <div className="EmptyContainer">
                <h1>할 일이 없습니다.</h1>
                <p>새로운 할 일을 추가해보세요.</p>
            </div>
        )
    }
    return (
        <div className='TodoContainer'>
            <div>
            <input type="text" 
            className='TodoContainer_title' 
            value={todo.title} 
            onChange={(e)=>{
                setTodo({
                   // title: e.target.value, -> 이렇게 입력하면 나머지 컨텐츠가 깨질 수 있음. 그래서 리스트를 복사하고 title 값만(특정값만) 불러오기
                    ...todo,
                    title: e.target.value,   
                })
            }}
            />
            </div>
            <div>
                <textarea 
                className='TodoContainer_body' 
                value={todo.content}
                onChange={(e)=>{
                    setTodo({ //setTodo() -> 이 안에 있는 값은 매개변수임
                       // title: e.target.value, -> 이렇게 입력하면 나머지 컨텐츠가 깨질 수 있음. 그래서 리스트를 복사하고 title 값만(특정값만) 
                        ...todo,
                        content: e.target.value,   
                    })
                }}
                >
                </textarea>
            </div>
        </div>
    );
};

export default TodoContainer;