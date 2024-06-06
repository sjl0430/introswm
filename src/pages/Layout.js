import React from "react";
import { ThemeProvider } from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../component/button";
import "./pages.scss";

const Layout = () => {
const navigate = useNavigate();
const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };
  const goHome = () => {
    // Home 경로로 이동
    navigate("/");
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          pink: "#ff0033",
          yellow: "#ffcc33",
          blue: "#3399ff",
          green: "#33cc00"
        },
      }}
    >
      <div>
        <header style={{textAlign: "center", padding: 15}}>
            <img src="https://kscms.ks.ac.kr/resources/_Img/Common/logo.png" org_width="140" org_height="33" alt="ksu.logo" onClick={() => window.open("https://ks.ac.kr")}></img>
            <span class="layspan"> 소프트웨어학과 </span>
        </header>
        <div class="laydiv">
            <Button color="pink" onClick={goBack}>뒤로 가기</Button>
            <Button color="yellow" onClick={goHome}>홈으로</Button>
            <Button onClick={() => window.open("https://kscms.ks.ac.kr/software/Main.do")}> 공식사이트</Button>
            <Button color="green" onClick={() => window.open("https://kscms.ks.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN042")}>오시는 길</Button>
        </div>
        <main>
            <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};
export default Layout;
