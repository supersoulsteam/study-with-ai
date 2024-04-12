import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Courses from "./components/courses"
import Home from "./components/home"
import Mentor from "./components/mentor"
import About from "./components/about"
import Career from "./components/career"
import Tests from "./components/tests"
import Jobs from "./components/jobs"
import Contact from "./components/contact"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
 


const App = () => {
  return (
    <>
     <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App