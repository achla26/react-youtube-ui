import './App.css';
import styled , {ThemeProvider} from "styled-components";
import Menu from "./components/Menu";
import Main from "./components/Main";
import { darkTheme, lightTheme } from "./utils/Theme";
import Navbar from "./components/Navbar";
import { useState } from 'react';

function App() {
  const Container = styled.div`
    height: calc(100vh - 60px);
    display: flex;
    background-color: ${({ theme }) => theme.primary};
  `;

  const [darkMode, setDarkMode] = useState(true);

  return (
    
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navbar/>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Main/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
