import React from 'react';
import TableRow from "./TableRow";

const Table = ({users, onSelectedUser, selectedUser}) => {

    return (
        <table className='user-table'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Complete rate (%)</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => {
                return (
                    <TableRow
                        key={user.id}
                        user={user}
                        onSelectedUser={onSelectedUser}
                        selectedUser={selectedUser}
                    />
                )
            })}
            </tbody>
        </table>
    );
};

export default Table;
