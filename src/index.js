 import React, { useEffect, useState } from 'react';
 import App from './components/App.js';
import { createRoot } from 'react-dom/client';

// const App = () => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
    
//     fetch('/api')
//       .then((response) => response.json())
//       .then((data) => setMessage(data.message))
//       .catch((error) => console.error('Error:', error));
//   }, []);

//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// };
 
// console.log(App())

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <App /> {/* Rendering the main App component */}
</React.StrictMode>

);

// export default App;