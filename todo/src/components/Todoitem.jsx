import React from 'react';

const Todoitem = () => {

    return (
        <li className='todo-item'>
            <span>
            <input type="checkbox" />
            <span className='todo-text'>Eat</span>
            </span>
            <p>...</p>
        </li>
    )
}

export default Todoitem;