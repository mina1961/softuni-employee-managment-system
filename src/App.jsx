
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
  console.log(users);

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

  return (
    <>
      <Header />

      {/* Main component */}
          {/* Table component */}
          <UserList users={users} />

          <button className="btn-add btn">Add new user</button>;

          {/* <Spinner /> */}

          <Pagination />
        

        {/* User details component */}
        {/* <UserDetails /> */}


        {/* Create/Edit Form component */}
        {/* <SaveUserModal /> */}


        {/* Delete user component */}
        {/* <UserDeleteModal /> */}

      

      <Footer />
    </>
  );
}

export default App
