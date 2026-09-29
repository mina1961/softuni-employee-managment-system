
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SaveUserModal from './components/SaveUserModal';
import Spinner from './components/Spinner';
import UserDeleteModal from './components/UserDeleteModal';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import './styles.css'

function App() {

    const [users, setUsers] = useState([]);
    const [showSaveUserModal, setShowSaveUserModal] = useState(false);

    useEffect(() => {
        fetch('https://novhnqesapzkjenxcknt.supabase.co/rest/v1/users', {
            headers: {
                'apikey': 'sb_publishable_ViN1O8flxVtY-WTTAiGxIg_Hr2KOZcZ'
            }
        }

        )
            .then(res => res.json()
                .then(data => setUsers(data)))
            .catch(err => console.error(err));
    }, []);

    const addUserClickHandler = () => {
        setShowSaveUserModal(true);
    };

    const addUserCloseHandler = () => {
        setShowSaveUserModal(false);
    }

    return (
        <>
            <Header />

            {/* Main component */}
            {/* Table component */}
            <UserList users={users} />

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>;

            {/* <Spinner /> */}

            <Pagination />


            {/* User details component */}
            {/* <UserDetails /> */}


            {/* Create/Edit Form component */}
            {showSaveUserModal && <SaveUserModal onClose={addUserCloseHandler} />}


            {/* Delete user component */}
            {/* <UserDeleteModal /> */}



            <Footer />
        </>
    );
}

export default App
