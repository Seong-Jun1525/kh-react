import React from 'react'

const ProfileCard = () => {
    const profileInfo = {
        name: "하이유",
        age: 20,
        job: "가수",
        isStudent: false
    };

    const clickFun = () => {
        alert(`안녕 ${profileInfo.name}`);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent : "center"}}>
            <h3>이름 : {profileInfo.name}</h3>
            <h3>나이 : {profileInfo.age}</h3>
            <h3>직업 : {profileInfo.job}</h3>
            <p style={{color: "red", fontWeight: "900"}}>
                {/* 학생인 경우 학생입니다. 그렇지 않으면 학생이 아닙니다. */}
                {profileInfo.isStudent === "학생" ? "학생입니다." : "학생이 아닙니다."}
            </p>

            {/* 버튼 클릭 시 안녕하세요 xxx님 알림창 표시 */}
            <button onClick={clickFun}>확인</button>
        </div>
    );
}

export default ProfileCard;