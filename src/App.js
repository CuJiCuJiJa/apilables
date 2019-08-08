import React from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import VerticalNav from './components/VerticalNav/VerticalNav';
import Footer from './components/Footer/Footer';
import ApilableInfinito from './components/ApilableInfinito/ApilableInfinito';
import ProyectoReadMore from './components/ProyectoReadMore/ProyectoReadMore';
import './App.css';


function App() {
  return (
    <div className="App">
      
      {/* <Sidebar />  */}
      {/* <header className="App-header">
         
      </header> */}
      <VerticalNav />
      <div className="page-content">  
        <ApilableInfinito />
        <ProyectoReadMore />
        </div>
      <Footer />
    </div>
  );
}

export default App;
