import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"

import { AuthProvider } from "./context/AuthContext"
import ProtectedRoutes from "./Components/ProtectedRoutes"
import AddCar from "./Pages/AddCar"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          } />

          <Route path="/addcar" element={
            <ProtectedRoutes>
              <AddCar/>
            </ProtectedRoutes>
          } />

        </Routes>

      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
