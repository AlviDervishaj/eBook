import './App.css';
// Prefix with component name in every css file. 

// Components
import { Header, Form, Footer } from "./components";

function App() {
  return (
    <div id="app">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
