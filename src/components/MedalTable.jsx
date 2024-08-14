import React from "react";

//메달현황 컴포넌트
const MedalTable = ({ medals, setmedals }) => {
  // 삭제 버튼
  const deleteMedalHandler = (country) => {
    const deletedMedals = medals.filter(function (medal) {
      return medal.country != country;
    });

    const result = confirm("삭제하시겠습니까?");
    if (result) {
      setmedals(deletedMedals);
    }
  };

  //초기화 버튼
  const initMedalHandler = (event) => {
    event.preventDefault();
    const result = confirm("정말 초기화 하시겠습니까? 입력된 모든 정보가 삭제됩니다.");
    if (result) {
      setmedals([]);
    }
  };

  return medals.length === 0 ? (
    <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
  ) : (
    <div>
      <table>
        <thead key={"thead"}>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        {medals
          .sort((a, b) => {
            return b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze;
          })
          .map((medal) => {
            const { country, gold, silver, bronze } = medal;

            return (
              <tbody key={country}>
                <tr>
                  <td>{country}</td>
                  <td>{gold}</td>
                  <td>{silver}</td>
                  <td>{bronze}</td>
                  <td>
                    <button onClick={() => deleteMedalHandler(country)}>삭제</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button onClick={initMedalHandler}>초기화</button>
      </div>
    </div>
  );
};

export default MedalTable;
