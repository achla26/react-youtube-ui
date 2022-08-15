import React from 'react'
import styled from "styled-components";
const Main = () => {
    const Container = styled.div`
      background-color: ${({ theme }) => theme.primary};
      width: 100%;
      height: 100%;
      padding: 15px 15px;
      border-top: 1px solid ${({ theme }) => theme.soft};
      overflow-y: scroll;`;

    const Videos = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;`;

    const Video = styled.div`
      width: 270px;
      margin-bottom: 30px`;
  
    const Thumbnail = styled.div`
      width: 100%;
      height: 170px;
    
      img {
        object-fit: cover;
        height: 94%;
        width: 100%;
      }`;
  
    const Details = styled.div`
  
      .author img {
        object-fit: cover;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        margin-right: 10px;
      }

      .details {
        display: flex;
      }
    
      .title {
        display: flex;
        flex-direction: column;
      }
    
      .title h3 {
        color: ${({ theme }) => theme.text};
        line-height: 18px;
        font-size: 14px;
        margin-bottom: 6px;
      }
    
      .title a, span {
        text-decoration: none;
        color: ${({ theme }) => theme.textSoft};
        font-size: 12px;
      }`;
  return (
    <Container>
      <Videos>
        <Video>
          <Thumbnail>
            <img src="https://img.youtube.com/vi/zUwB_imVjmg/maxresdefault.jpg" alt="" />
          </Thumbnail>
          
          <Details>
            <div class="author">
                <img src="https://yt3.ggpht.com/bpzY-S4DYlbTeOpY5hIA7qz_hcbMkgvLAugtwKBGTTImNnWAGudX0y53bo_fJZ0auypxrWkUiw=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div class="title">
                <h3>
                    Introverts & Content Creation | Sumudu Siriwardana
                </h3>
                <a href="">
                        Francesco Ciulla
                </a>
                <span> 2M Views • 3 Months Ago </span>
            </div>
          </Details>
        </Video>
      </Videos>
   </Container>
  
  )
}

export default Main