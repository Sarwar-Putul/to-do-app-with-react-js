import React, { useEffect, useRef, useState } from 'react';

const TodoFormCopy = (props) => {
    const [input, setInput] =useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (event)=>{
        setInput(event.target.value);
        
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }




    return (
        <form onSubmit={handleSubmit}>
        {props.edit ? (
            <>
                <input type="text" value={input} placeholder="Update Your Todo" onChange={handleChange} ref={inputRef} />
                <button>Update</button>
            </>
        ) : (
            <>
                <input type="text" value={input} placeholder="Write Your Todo" onChange={handleChange} ref={inputRef} />
                <button>Add</button>
            </>
        )}
        </form>
    );
};

export default TodoFormCopy;