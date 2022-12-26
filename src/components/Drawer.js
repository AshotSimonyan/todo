import React, {useCallback, useEffect, useState} from 'react';
import {addTodo, getUserTodos, updateTodo, updateUser} from "../firebase";
import ActionInput from "./ActionInput";
import TodoList from "./TodoList";
import {getCompletedCount, getPercent} from "../helpers";

const Drawer = ({user,removeSelectedUser}) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getUserTodos(user?.id, (todos) => {
            const arr = [];
            todos.forEach(todo => {
                arr.push({
                    id: todo.id,
                    ...todo.data()
                });
            });
            setTodos(arr);
        });
    }, [user?.id]);

    const handleComplete = useCallback((id) => {

        updateTodo(user.id, id, {
            state: 1,
        }).then(() => {
            const completedCount = getCompletedCount(1, todos);
            const completion_status = getPercent(completedCount, todos.length);
            updateUser(user.id, {
                completion_status
            });
        });
    }, [user?.id, todos]);


    const handleAddTodo = useCallback((todoName) => {
        addTodo(user.id, {
            name:  todoName,
            state: 0
        }).then(() => {
            const completedCount = getCompletedCount(0, todos);
            const completion_status = getPercent(completedCount, todos.length + 1);
            updateUser(user.id, {
                completion_status
            });
        });
    }, [user?.id, todos]);

    return (
        <div className='drawer'>
            <div className="drawer-inner">
                <div className='drawer-top'>
                    <ActionInput
                        onSubmit={handleAddTodo}
                        user={user}
                    />

                    <button className='btn-circle' onClick={removeSelectedUser}><span className='icon icon-close'/></button>
                </div>


                <h2 className='drawer-title'>To-do list for {user?.name}</h2>
                <TodoList
                    todos={todos}
                    handleComplete={handleComplete}
                />

            </div>


        </div>
    )
};
export default Drawer;

