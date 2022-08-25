import React, { useState, useRef } from 'react'
import Todo from "./Todo"
import styles from "../styles/TodoList.module.css"

const TodoList = () => {
    const todoCounter = useRef(1);
    const [todoList, setTodoList] = useState([{
        id: todoCounter.current,
        item: "",
        createdAt: new Date(),
    }])

    const addToStart = () => {
        const nextId = todoCounter.current + 1;
        setTodoList(prevList => [
            {
                id: nextId,
                item: "",
                createdAt: new Date(),
            },
            ...prevList
        ]);
        todoCounter.current = nextId;
    }

    const addToEnd = () => {
        const nextId = todoCounter.current + 1;
        setTodoList(prevList => [
            ...prevList,
            {
                id: nextId,
                item: "",
                createdAt: new Date(),
            }
        ]);
        todoCounter.current = nextId;
    }

    const sortByEarliest = () => {
        setTodoList(prevState => {
            let newList = prevState;
            newList.sort((a, b) => {
                return a.createdAt - b.createdAt
            })
            return [...newList]
        });
    }

    const sortByLatest = () => {
        setTodoList(prevState => {
            let newList = prevState;
            newList.sort((a, b) => {
                return b.createdAt - a.createdAt
            })
            return [...newList]
        });
    }

    const todoListElement = todoList.map((todo, index) => (
        <Todo 
            key={todo.id} 
            index={index} 
            {...todo} 
            setTodoList={setTodoList}
        />
    ))

    return (
        <>
            <h1>Todo List</h1>
            <div className={styles.wrapper}>
                    <div className={styles['button-wrapper']}>
                        <button onClick={addToStart}>
                            Add to start
                        </button>
                        <button onClick={addToEnd}>
                            Add to end
                        </button>
                        <button onClick={sortByEarliest}>
                            Sort by earliest
                        </button>
                        <button onClick={sortByLatest}>
                            Sort by latest
                        </button>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Sl. No.</th>
                                <th>ID</th>
                                <th>Item</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoListElement}
                        </tbody>
                    </table>
                </div>
        </>
    )
}

export default TodoList