import React from "react";
import styled from "styled-components";
import bannerBG from "images/banner_bg.png";

const bannerTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABJIAAAOOCAMAAABsgMhDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTgyMjNGNkUyRTY2MTFFRDhBQjdENjJFNDQwQTc2REUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTgyMjNGNkYyRTY2MTFFRDhBQjdENjJFNDQwQTc2REUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBODIyM0Y2QzJFNjYxMUVEOEFCN0Q2MkU0NDBBNzZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBODIyM0Y2RDJFNjYxMUVEOEFCN0Q2MkU0NDBBNzZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuoeZyQAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAEIklEQVR42uzBMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBhAgwAQ3oAAXAPDUcAAAAASUVORK5CYII=';

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  transition: all 0.5s;
  font-size: 0;
  @media screen and (orientation: landscape) {
    max-height: 300px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 10%;
  position: relative;
`;

const BannerText = styled.h2`
  position: absolute;
  bottom: 5%;
  left: 5%;
  text-align: left;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colorSet.onboard_color_type1};
`;

const Main = styled.div`
  position: relative;
  ${({ theme }) => theme.fontSet.Type_A24};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
`;

const Sub = styled.div`
  position: relative;
  margin-top: 8px;
  ${({ theme }) => theme.fontSet.Type_A12};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
`;

/**
 * JavaScript?????? true && expression??? ?????? expression?????? ????????????
 *  false && expression??? ?????? false??? ???????????????.

????????? && ?????? ??????????????? ????????? true?????? ????????? ?????????. 
????????? false?????? React??? ???????????? ???????????????.

 */
const Banner = ({ bannerData }) => {
  return(
    <BannerContainer className={bannerData ? "" : "banner-box"}>
      <Img src={bannerData ? bannerBG : bannerTemp} alt={`?????? ?????????`}/>
      <BannerText>
        <Main>
          {bannerData && bannerData.bannerText.split('<br />').map(( line, id ) => {
            line=line.trimStart();
            return (
                <span key={`banner_${id}`}>{line}<br /></span>
              )
            })
          }
          {!bannerData && (
            <span></span>
          )}
        </Main>
        <Sub className={bannerData ? "" : "banner-text"}>{bannerData ? "?????? ????????????????" : "xxxxxxxxxxxx"}</Sub>
      </BannerText>
    </BannerContainer>
  )
}

export default Banner;