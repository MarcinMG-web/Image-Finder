import React from 'react';
import MuiThemaProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Components/Navbar/NavBar';
import Search from './Components/Search/Search';
import './App.css';

function App() {
  return (
    <MuiThemaProvider>
      <div className="App">
          <NavBar />
          <Search />
      </div>
    </MuiThemaProvider>
    
  );
}

export default App;
