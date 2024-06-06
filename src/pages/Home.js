import React from "react";
import "./pages.scss";

const Home = () => {
  return (
    <div class="homediv">
        <p class="homep">
          <button class="homebt1" onClick={() => window.location.href="/about"}>학과소개</button>
        </p>
        <p>
            <button class="homebt2" onClick={() => window.location.href="/object"}>교육목표 & 인재상</button>
        </p>
        <p>
            <button class="homebt3" onClick={() => window.location.href="/profs"}>교수진소개</button>
        </p>
    </div>
  );
};
export default Home;
