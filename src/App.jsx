
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
        fetchUsers()
            .then(data => setUsers(data))
            .catch(err => console.error(err));
    }, []);

    async function fetchUsers() {
        const response = await fetch(baseURL, {
            headers: {
                'apikey': apiKey,
            }
        });

        const data = await response.json();

        return data;
    }

    const addUserClickHandler = () => {
        setShowSaveUserModal(true);
    };

    const addUserCloseHandler = () => {
        setShowSaveUserModal(false);
    }

    const submitUserHandler = async (user) => {
        try {
            // Send user to REST API
            await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': apiKey
                },
                body: JSON.stringify(user)
            });

            // Fetch all users after adding a new one
            const updatedUsers = await fetchUsers();

            // Update the state with the latest users
            setUsers(updatedUsers);

        } catch (err) {
            alert('An error occurred while adding the user.');
        } finally {
            setShowSaveUserModal(false);
        }
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
