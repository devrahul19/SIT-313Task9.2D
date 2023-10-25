import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import './App.css';
import Home from './Home';
import QuestionPage from './QuestionPage';
import ArticlePage from './ArticlePage';
import CreatePost from './CreatePost';
import Login from './Login';
import PaymentForm from './PaymentForm';


function App() {
  const [isAuth, setIsAuth] = useState(false);


  const signout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      alert('You have Successfully Logged Out!! :D')
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> DEV@DEAKIN </Link>
        <Link to="/articles"> Articles </Link>
        <Link to="/Questions"> Questions </Link>
        <Link to="/Payment"> Subscribe! </Link>
        {!isAuth ? (<Link to="/login"> Login </Link>)
          : (
            <>
              <Link to="/createpost"> CreatePost </Link>
              <button onClick={signout}>Log Out</button>

            </>
          )}

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/Payment" element={<PaymentForm/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

      </Routes>
    </Router>
  );
}

export default App;
