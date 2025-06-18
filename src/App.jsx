/* eslint-disable*/
import {useCallback, useState} from 'react';
import './App.css'

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);
  let [좋아요, 변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className='App'>
      <div className="pink-nav">
        <h4>ReactBlog</h4>
      </div>
       <button onClick={()=>{
           let copy = [...글제목];
            copy[0] = '여자코트 추천';
            글제목변경(copy);
       }}>👏</button>
        <button onClick={()=>{
            let sort = [...글제목];
            sort.sort();
            글제목변경(sort);
        }}>👌</button>
{/*      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{변경(좋아요+1)}}>❤️</span> {좋아요} </h4>
        <p>5월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>5월 21일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{글제목[2]}</h4>
        <p>5월 21일 발행</p>
      </div>*/}

        {
           글제목.map(function(a, i){
               return(
                   <div className='list' key={i}>
                       <h4>{글제목[i]} <span onClick={()=>{
                           let copyLike = [...좋아요];
                           copyLike[i] = copyLike[i]+1;
                           변경(copyLike);
                       }}>❤️</span>{좋아요[i]}</h4>
                       <p>5월 21일 발행</p>
                   </div>
               )
           })
        }

        {
            modal == true ? <Modal /> : null
        }

    </div>
  )
}

//--컴포넌트문법 return안에는 태그 하나만
function Modal() {
    return (
        <>
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
        <div></div>
        </>
    )
}

const Test = () => {
    return(
        <div>이렇게도 가능</div>
    )
}

export default App
