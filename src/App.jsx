/* eslint-disable*/
import { useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);
  let [좋아요, 변경] = useState(0);

  return (
    <div className='App'>
      <div className="pink-nav">
        <h4>ReactBlog</h4>
      </div>
       <span onClick={()=>{
        글제목[0] = '여자코트 추천';
        글제목변경(글제목);
       }}>🤷‍♂️</span>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{변경(좋아요+1)}}>❤️</span> {좋아요} </h4>
        <p>5월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>5월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>5월 21일 발행</p>
      </div>
    </div>
  )
}

export default App
