import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <Header user={user} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main>
        <Router>
          <Routes>
            {user ? (
              <>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
              </>
            ) : (
              <>
                <Route path="*" element={<Navigate to="auth" />} />
                <Route path="auth/*" element={<Auth />} />
              </>
            )}
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
