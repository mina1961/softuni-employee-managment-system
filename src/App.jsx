
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

const baseURL = 'https://novhnqesapzkjenxcknt.supabase.co/rest/v1/users'

const apiKey = 'sb_publishable_ViN1O8flxVtY-WTTAiGxIg_Hr2KOZcZ';

function App() {

    const [users, setUsers] = useState([]);
    const [showSaveUserModal, setShowSaveUserModal] = useState(false);

    useEffect(() => {
        fetch(baseURL, {
            headers: {
                'apikey': apiKey
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

    const submitUserHandler = (user) => {
        // Send user to REST API
        fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey
            },
            body: JSON.stringify(user)
        })
            .then(() => console.log('User added successfully'))
            .catch(err => console.error(err))
            .finally(() => setShowSaveUserModal(false));
    };

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
            {showSaveUserModal && <SaveUserModal onClose={addUserCloseHandler} onSubmit={submitUserHandler} />}


            {/* Delete user component */}
            {/* <UserDeleteModal /> */}



            <Footer />
        </>
    );
}

export default App
