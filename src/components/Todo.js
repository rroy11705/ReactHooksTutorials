import React, { useState, useEffect } from 'react'

const Todo = ({ index, id, item, createdAt, setTodoList }) => {
    const [todoItem, setTodoItem] = useState(item);

    const handleItemChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setTodoItem(value)
    }

    useEffect(() => {
        setTodoList(prevList => {
            let newList = prevList;
            newList.forEach((todo) => {
                if(todo.id === id) todo.item = todoItem
            })
            return newList
        })
    }, [id, setTodoList, todoItem])
    

    return (
        <tr>
            <td><label>{index + 1}</label></td>
            <td><label>{id}</label></td>
            <td><input value={todoItem} onChange={(e) => handleItemChange(e)} /></td>
            <td><label>{createdAt.toLocaleTimeString()}</label></td>
        </tr>
    )
}

export default Todo