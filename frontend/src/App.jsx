
import './App.css'
import './index.css'
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <Login /> : <Register />}
      <div className="text-center mt-4">
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="text-blue-600 font-semibold hover:underline transition"
        >
          {showLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
      </div>
    </div>
  );
}

export default App;
