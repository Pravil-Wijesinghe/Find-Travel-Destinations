import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recomondation from './Pages/Recomondation';
import ChatWithBot from './Pages/ChatWithBot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Recomondation />} />
          <Route path="/chat" element={<ChatWithBot/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
