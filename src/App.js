import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 160
            },
            "size": {
              "value": 5
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} 
       
        />

    </div>
  );
}

export default App;
