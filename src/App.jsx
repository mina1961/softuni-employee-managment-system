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


  return (
    <>
      <Header />

      {/* Main component */}
      <main className="main" >
        <section className="card users-container">
          <UserSearch />

          {/* Table component */}
          <UserList />

          {/* <Spinner /> */}

          <Pagination />
        </section>

        {/* User details component */}
        {/* <UserDetails /> */}


        {/* Create/Edit Form component */}
        {/* <SaveUserModal /> */}


        {/* Delete user component */}
        {/* <UserDeleteModal /> */}

      </main>

      <Footer />
    </>
  );
}

export default App
