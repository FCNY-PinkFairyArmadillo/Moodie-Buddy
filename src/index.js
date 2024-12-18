 import React, { useEffect, useState } from 'react';
 import App from './components/App.js';
import { createRoot } from 'react-dom/client';



const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <App /> {/* Rendering the main App component */}
</React.StrictMode>

);

// export default App;