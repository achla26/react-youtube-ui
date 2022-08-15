import React from 'react'
import styled from "styled-components";
import youtube from "../images/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
    const Navbar = styled.div`
      display:flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: 15px;
      background-color: ${({ theme }) => theme.primary};
      .search {
        display: flex;
      }
           
      .search form {
        display: flex;
        border: 1px solid ${({ theme }) => theme.primary};
        height: 45px;
      }
           
      .search input {
        width: 600px;
        padding:10px;
        border: 0;
        height: 100%;
        border-radius: 2px 0 0 2px
      }
          
      input:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.primary};
      }
          
      .search button {
        height: 100%;
        width: 60px;
        border: none;
      }
      
      @media (max-width: 900px) {
        .search input {
          width: 25rem;
        }
      }`;

    const Logo = styled.div`
      display: flex;
      align-items: center;

      img{
        height:30px;
        margin:0 10px;
      }
      span{
        color: ${({ theme }) => theme.text};
        font-weight: 700;
        font-size: 20px;
      }`; 
    const Button = styled.button`
      padding: 5px 15px;
      background-color: transparent;
      border: 1px solid #3ea6ff;
      color: #3ea6ff;
      border-radius: 3px;
      font-weight: 500;
      margin-top: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;`;

  return (
    <Navbar>
        <Logo>
            <MenuIcon/>
            <img src={youtube}/><span>YouTube</span>
        </Logo>
 
        <div class="search center">
          <form action="">
              <input type="text" placeholder="Search" />
              <button><SearchIcon/></button>
          </form>        
        </div>
        <div class="icons right">
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </div>
    </Navbar>
  )
}

export default Navbar