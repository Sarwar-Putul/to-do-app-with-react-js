import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoFormCopy from './TodoFormCopy';

const TodoCopy = ({ todos, completeTodo, removeTodo, editTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        editTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };
    if(edit.id){
        return <TodoFormCopy edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
                <RiCloseCircleLine onClick={()=> removeTodo(todo.id)} />
                <TiEdit onClick={()=> setEdit({ id: todo.id, value: todo.text })} />
            </div>
        </div>
    ));
};

export default TodoCopy;