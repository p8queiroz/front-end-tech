import logo from './logo.svg';
import './App.css';

import { Box } from '@mui/material';
import { HomeComponent }  from "./components/HomeComponent";

function App() {
  return (
    <div className="App">
      <Box>
        <HomeComponent></HomeComponent>       
      </Box>
    </div>
  );
}

export default App;
