import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import {firebase, db, auth} from './config/firebase.config';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Journal from './pages/Journal';
import Entry from './pages/Entry';

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  const loginHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const logoutHandler = () => auth.signOut();

  return (
    <Router>
      <main className='app'>
        <Navbar
          user={user}
          loginHandler={loginHandler}
          logoutHandler={logoutHandler}
        />
        <div className='app-content text-center max-w-6xl mx-auto px-4'>
          <Routes>
            <Route path='/' element={<Home />} exact></Route>
            <Route path='/journal' element={<Journal />} exact></Route>
            <Route path='/entry' element={<Entry />} exact></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
