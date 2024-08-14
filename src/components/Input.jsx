import React, { useState } from "react";
import "../App.css";

function Input({ medals, setmedals }) {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("0");
  const [silver, setSilver] = useState("0");
  const [bronze, setBronze] = useState("0");

  //인풋 핸들러
  const inputCountryHandler = (e) => {
    setCountry(e.target.value);
  };
  const inputGoldHandler = (e) => {
    setGold(Number(e.target.value));
  };
  const inputSilverHandler = (e) => {
    setSilver(Number(e.target.value));
  };
  const inputBronzeHandler = (e) => {
    setBronze(Number(e.target.value));
  };

  //국가추가 버튼
  const addMedalHandler = (event) => {
    event.preventDefault();
    const newMedal = {
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    if (!country) {
      alert("국가명을 입력해주세요.");
      return;
    }
    medals.some((medal) => {
      return medal.country === country;
    })
      ? alert("이미 존재한는 국가명입니다. 업데이트를 사용해주세요.")
      : setmedals([...medals, newMedal]) || alert("추가 완료");
  };

  //업데이트 버튼
  const updateMedalHandler = (event) => {
    event.preventDefault();
    if (!country) {
      return alert("국가명을 입력해주세요.");
    }
    if (!medals.some((medal) => medal.country === country)) {
      return alert("일치하는 국가명이 없습니다. 추가 기능을 사용해주세요.");
    } else {
      alert("업데이트 완료");
      return setmedals(
        medals.map((medal) => {
          if (medal.country === country) {
            const newMedal = {
              ...medal,
              country: country,
              gold: gold,
              silver: silver,
              bronze: bronze,
            };
            medal = newMedal;
            return medal;
          }
          return medal;
        })
      );
    }
  };

  return (
    <form className="input-group">
      <div className="input-field">
        <label>국가명</label>
        <input
          type="text"
          placeholder="국가 입력"
          value={country}
          onChange={inputCountryHandler}
        ></input>
      </div>
      <div className="input-field">
        <label>금메달</label>
        <input type="number" value={gold} onChange={inputGoldHandler}></input>
      </div>
      <div className="input-field">
        <label>은메달</label>
        <input type="number" value={silver} onChange={inputSilverHandler}></input>
      </div>
      <div className="input-field">
        <label>동메달</label>
        <input type="number" value={bronze} onChange={inputBronzeHandler}></input>
      </div>

      <div className="button-group">
        <button onClick={addMedalHandler}>국가 추가</button>
        <button onClick={updateMedalHandler}>업데이트</button>
      </div>
    </form>
  );
}

export default Input;
