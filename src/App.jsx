import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopicL from './components/TopicL';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopicL />} />
        {/* คุณสามารถเพิ่ม route อื่นได้ที่นี่ */}
      </Routes>
    </Router>
  );
}

export default App;
