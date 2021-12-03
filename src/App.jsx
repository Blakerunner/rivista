import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebaseConfig from './config/firebase.config';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Journal from './pages/Journal';
import Entry from './pages/Entry';

const fireapp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <main className='app'>
        <Navbar />
        <div className='app-content text-center max-w-6xl mx-auto px-4'>
          <Routes>
            <Route path='/' element={<Home />} exact></Route>
            <Route path='/login' element={<Login />} exact></Route>
            <Route path='/journal' element={<Journal />} exact></Route>
            <Route path='/entry' element={<Entry />} exact></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
