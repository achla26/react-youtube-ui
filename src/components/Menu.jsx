import React from 'react'
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
const Menu =  ({ darkMode, setDarkMode }) => {
    const Wrapper = styled.div`
      height: 100%;
      width: 22%;
      background-color: ${({ theme }) => theme.primary};
      overflow-y: scroll;

      @media (max-width: 768px) {
        .side-bar {
          display: none;
        }
      }           
    `;
    const Hr = styled.hr`
      height: 1px;
      background-color: ${({ theme }) => theme.bgLighter};
      border: none;
    `;

    const Nav = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      margin-top: 15px;

      span {
        margin-left: 15px;
      }`;

    const Item = styled.a`
      display: flex;
      align-items: center;
      padding: 12px 25px;
      color: ${({ theme }) => theme.text};
      text-decoration:none;

      &:hover {
        background:${({ theme }) => theme.bgLighter};
        color:${({ theme }) => theme.text};
      }`;

    const Login = styled.div`
      padding:0 15px;
      color:${({ theme }) => theme.text};`;

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
      gap: 5px;
    `;

    const Title = styled.h2`
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.text};
      margin-bottom: 20px;
      padding:0 15px;
    `;
    
  return (
    <Wrapper>
       <Nav>
        <Item>
          <HomeIcon />
          <span>Home</span>
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          <span> Explore</span>
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          <span>Subscriptions</span>
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          <span>Library</span>
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          <span>History</span>
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
         
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          <span> Music</span>
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          <span>Sports</span>
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          <span>Gaming</span>
        </Item>
        <Item>
          <MovieOutlinedIcon />
          <span>Movies</span>
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          <span> News</span>
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          <span>Live</span>
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          <span>Settings</span>
        </Item>
        <Item>
          <FlagOutlinedIcon />
          <span>Report</span>
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          <span>Help</span>
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          <span>{darkMode ? "Light" : "Dark"} Mode</span>
        </Item>
      </Nav>
    </Wrapper>
  )
}

export default Menu