import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductSuccess from './pages/ProductSuccess';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ProductSuccess" element={<ProductSuccess />} />
			</Routes>
    </div>
  );
}

export default App;
