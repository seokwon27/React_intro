import { useState } from 'react'
import './App.css'
import MedalTable from './components/MedalTable';

function App() {
  //메달 현황
  const [medals, setmedals] = useState([]);

  const [country, setCountry] = useState("")
  const [gold, setGold] = useState("0");
  const [silver, setSilver] = useState("0");
  const [bronze, setBronze] = useState("0");

  //인풋 핸들러
  const inputCountryHandler = (e) => { setCountry(e.target.value) }
  const inputGoldHandler = (e) => { setGold(Number(e.target.value)) }
  const inputSilverHandler = (e) => { setSilver(Number(e.target.value)) }
  const inputBronzeHandler = (e) => { setBronze(Number(e.target.value)) }



  //국가추가 버튼
  const handleAddCountry = (event) => {
    event.preventDefault();
    const newMedal = {
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze
    }
    if(!country){ return alert('국가명을 입력해주세요.')}
    medals.some((medal) => {
      return medal.country === country
    }) ? alert("이미 존재한는 국가명입니다.") :
      setmedals([...medals, newMedal])
  }

  //업데이트 버튼
  const handleUpdateCountry = (event) => {
    event.preventDefault();
    if(!country){ return alert('국가명을 입력해주세요.')}
    if (!medals.some((medal) => medal.country === country)) {
      return alert("일치하는 국가명이 없습니다.")
    } else {
      return (
        setmedals(
          medals.map((medal) => {
            if (medal.country === country) {
              const newMedal = {
                ...medal,
                country: country,
                gold: gold,
                silver: silver,
                bronze: bronze
              }
              medal = newMedal
              return medal;
            }
            return medal;
          }))
      )
    }

  };


  // 삭제 버튼
  const deleteMedalHandler = (country) => {
    const deletedMedals = medals.filter(function (medal) {
      return medal.country != country
    })

    const result = confirm("삭제하시겠습니까?")
    if(result){setmedals(deletedMedals)};
  };

  //초기화 버튼
  const initMedalHandler = (event) => {
    event.preventDefault();
    const result = confirm("정말 초기화 하시겠습니까? 입력된 모든 정보가 삭제됩니다.")
    if(result){setmedals([])}
  }

  return (
    <div className='container'>
      <h1>2024 파리 올림픽</h1>
      <form className='input-group'>

        <div className='input-field'>
          <label>국가명</label>
          <input type='text' placeholder='국가 입력' value={country}
            onChange={inputCountryHandler}></input>
        </div>
        <div className='input-field'>
          <label>금메달</label>
          <input type='number' value={gold}
            onChange={inputGoldHandler}></input>
        </div>
        <div className='input-field'>
          <label>은메달</label>
          <input type='number' value={silver}
            onChange={inputSilverHandler}></input>
        </div>
        <div className='input-field'>
          <label>동메달</label>
          <input type='number' value={bronze}
            onChange={inputBronzeHandler}></input>
        </div>

        <div className='button-group'>
          <button onClick={handleAddCountry}>국가 추가</button>
          <button onClick={handleUpdateCountry}>업데이트</button>
        </div>
      </form>
      <div>
        {/* 메달집계*/}
        <MedalTable medals={medals} deleteMedalHandler={deleteMedalHandler} />
      </div>
      <div style={{
        marginTop: "20px"
      }}>
        <button onClick={initMedalHandler}>초기화</button>
      </div>
    </div>
  )
}

export default App




