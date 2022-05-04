import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor.js';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';




function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className="calculator">Convert Calculator</h1>
      <div className="line">
  <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
  <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
  </div>
  <div className="line">
  <Conversor moedaA="EUR" moedaB="CAD"></Conversor>
  <Conversor moedaA="CAD" moedaB="EUR"></Conversor>
  </div>
  <div className="line">
  <Conversor moedaA="CAD" moedaB="INR"></Conversor>
  <Conversor moedaA="INR" moedaB="CAD"></Conversor>
  </div>
  <Body/>
  <Footer/>

    </div>


  );
}

export default App;
