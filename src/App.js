import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Components/Navbar/NavBar';
import Search from './Components/Search/Search';
import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
          <NavBar />
          <Search />
      </div>
    </MuiThemeProvider>
    
  );
}

export default App;
