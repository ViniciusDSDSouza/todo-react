import { StrictMode } from "react"; // Componente que identifica problemas e práticas ruins
import { createRoot } from "react-dom/client"; // Funçao raiz para renderizar os componentes react
import App from "./App.jsx";

// Renderiza componentes do app.jsx no elemento "root"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
