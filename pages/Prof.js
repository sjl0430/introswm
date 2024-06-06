import React from "react";
import { useParams } from "react-router-dom";

function name(prop) {
    if(prop == 1) return "양태천";
    else if(prop == 2) return "성낙운";
    else if(prop == 3) return "홍석희";
    else if(prop == 4) return "지상문";
    else if(prop == 5) return "강인수";
    else if(prop == 486) return "김주현";
};

function major(prop) {
    if(prop == 1) return "알고리즘, 컴퓨터그래픽스";
    else if(prop == 2) return "운영체제";
    else if(prop == 3) return "데이터베이스, 실시간 데이터베이스, 실시간 시스템, 트랜잭션 시스템, 소프트웨어 시험, 저장 장치";
    else if(prop == 4) return "딥러닝, 생물정보학";
    else if(prop == 5) return "자연어처리, 정보검색, 시맨틱웹";
};

function sch(prop) {
    if(prop == 1) return "KAIST 전산학과(박사)";
    else if(prop == 2) return "KAIST 전산학(박사)";
    else if(prop == 3) return "KAIST 전산학과 졸업(박사)";
    else if(prop == 4) return "KAIST 박사";
    else if(prop == 5) return "포항공과대학교 박사";
};

function lab(prop) {
    if(prop == 1) return "(051)663-5141";
    else if(prop == 2) return "(051)663-5142";
    else if(prop == 3) return "(051)663-5145";
    else if(prop == 4) return "(051)663-5146";
    else if(prop == 5) return "(051)663-5147";
};

function tel(prop){
    if(prop == 1) return "051-663-5141";
    else if(prop == 2) return "051-663-5142";
    else if(prop == 3) return "051-663-5145";
    else if(prop == 4) return "051-663-5146";
    else if(prop == 5) return "051-663-5147";
};
function email(prop) {
    if(prop == 1) return "tcyang@ks.ac.kr";
    else if(prop == 2) return "nuseong@ks.ac.kr";
    else if(prop == 3) return "shong@ks.ac.kr";
    else if(prop == 4) return "smchiks@ks.ac.kr";
    else if(prop == 5) return "dbaisk@ks.ac.kr";
};

const Prof = () => {
    const { id } = useParams();
    return (
        (id != 486)? 
            <div>
                <h1 class="profh">{name(id)} 교수님</h1>
                <p class="profp">세부전공: {major(id)}</p>
                <p class="profp">최종학력: {sch(id)}</p>
                <p class="profp">연구실: {lab(id)}</p>
                <p class="profp">전화번호: {tel(id)}</p>
                <p class="profp">e-mail: {email(id)}</p>
                <br/>
            </div> :
            <div>
                <h1 class="profh">{name(id)} 교수님</h1>
                <h1 class="secr">Top Secret</h1>
                <br/>
            </div>  
  );
};
export default Prof;
