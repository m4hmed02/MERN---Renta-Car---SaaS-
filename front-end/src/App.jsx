import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

import { AuthProvider } from "./context/AuthContext"
import ProtectedRoutes from "./Components/ProtectedRoutes"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
