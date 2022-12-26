import { useEffect, useState } from 'react';
import { getUsers } from './firebase';
import './assets/scss/style.scss'
import Drawer from "./components/Drawer";
import Table from "./components/Table";
import Loader from "./components/Loader";



function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getUsers((users => {
            const arr = [];
            users.forEach(user => {
                arr.push({
                    id: user.id,
                    ...user.data()
                });
            })
            setUsers(arr);
            setLoading(false);
        }));
    }, []);

    const handleSelectedUser = (id, name) => {
        setSelectedUser({name, id});
    };

    const removeSelectedUser = () => {
        setSelectedUser(null);
    };

    return (
        <div className="container">
            <div className="content">
                {
                    loading ? <Loader/> :
                        <div className={`table-wrapper ${selectedUser ? 'open-drawer' : ''}`}>
                            <Table
                                users={users}
                                onSelectedUser={handleSelectedUser}
                                selectedUser={selectedUser}
                            />
                            <Drawer user={selectedUser} removeSelectedUser={removeSelectedUser} />
                        </div>
                }
            </div>
        </div>
    );
}

export default App;
