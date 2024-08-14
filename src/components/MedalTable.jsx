import React from 'react';

//메달현황 컴포넌트
const MedalTable = ({ medals, deleteMedalHandler }) => {
  return medals.length === 0 ? (
    <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
  ) : (
    <table>
      <thead key={'thead'}>
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
  );
};

export default MedalTable;
