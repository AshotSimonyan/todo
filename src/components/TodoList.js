import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, handleComplete}) => {
    return (
        <>
            {
                !!todos.length ? <ul className='task-card-list'>
                        {todos.map(todo => {
                            return (
                                <Todo
                                    key={todo.id}
                                    todo={todo}
                                    onComplete={handleComplete}
                                />
                            )
                        })}
                    </ul> :
                    <p>There are no to-dos yet</p>
            }

        </>
    );
};

export default TodoList;
