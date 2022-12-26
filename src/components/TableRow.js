import React from 'react';

const TableRow = ({user, onSelectedUser, selectedUser}) => {
    const handleSelectedUser =  () => {
        onSelectedUser(user.id, user.name);
    };

    return (
        <tr  className={user.id === selectedUser?.id ? 'active' : ''} onClick={handleSelectedUser}>
            <td>{user.name}</td>
            <td>{user.completion_status}</td>
        </tr>
    );
};

export default TableRow;
