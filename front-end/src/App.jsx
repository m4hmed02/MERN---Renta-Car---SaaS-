import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import BrowseCars from "./Pages/BrowseCars"

import { AuthProvider } from "./context/AuthContext"
import ProtectedRoutes from "./Components/ProtectedRoutes"
import AddCar from "./Pages/AddCar"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import CarDetail from "./Pages/CarDetail"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/browse" element={<BrowseCars />} />
          <Route path="/about" element={<About />} />

          <Route path="/profile" element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          } />

          <Route path="/contact" element={
            <Contact />
          } />

          <Route path="/addcar" element={
            <ProtectedRoutes>
              <AddCar />
            </ProtectedRoutes>
          } />

          <Route path="/car-detail/:id" element={
            <ProtectedRoutes>
              <CarDetail />
            </ProtectedRoutes>
          }
          />

        </Routes>

      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
