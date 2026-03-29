import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import About from "./Pages/About"
import Home from "./Pages/Home"
import BrowseCars from "./Pages/BrowseCars"
import CarDetail from "./Pages/CarDetail"
import Contact from "./Pages/Contact"

import AddCar from "./Pages/Admin/AddCar"
import { Dashboard } from "./Pages/Admin/Dashborad"

import { AuthProvider } from "./context/AuthContext"

import ProtectedRoutes from "./Components/ProtectedRoutes"
import Checkout from "./Pages/Checkout"
import Cart from "./Pages/Cart"

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


          <Route path="/admin-dashboard" element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
          />

          <Route path="/checkout/:bookingId" element={
            <ProtectedRoutes>
              <Checkout />
            </ProtectedRoutes>
          }
          />

          <Route path="/cart" element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
          />

        </Routes>

      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
