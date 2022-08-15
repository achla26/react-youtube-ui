import './App.css';
import styled , {ThemeProvider} from "styled-components";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./utils/Theme";
import Navbar from "./components/Navbar";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const Container = styled.div`
    height: calc(100vh - 60px);
    display: flex;
    background-color: ${({ theme }) => theme.primary};
  `;

  const [darkMode, setDarkMode] = useState(true);

  return (
    
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
      <Navbar/>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="signin" element={<SignIn />} />
            <Route path="video">
              <Route path=":id" element={<Video />} />
            </Route> */}
          </Route>
        </Routes>
      </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
