import React from 'react'
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn'
import { Home} from './components/Home'
import { BrowserRouter, Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
