import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={baseUrl}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;