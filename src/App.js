import { useState } from 'react';
import './App.css';
import Box from"./component/Box"


//1. 박스 2개(타이틀, 사진, 결과)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 선택이 된다.
//5. 3과 4의 결과로 승패 나눔
//6. 승패 결과에 따라 박스 테두리 색상 변경(승리-초록, 패배-빨강, 무-검정) 

const choice ={
  rock:{
    name:"Rock",
    img:"https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVBJUIwJTgwJUVDJTlDJTg0JUVCJUIwJTk0JUVDJTlDJTg0JUVCJUIzJUI0fGVufDB8fDB8fHww"
  },
  scissors:{
    name:"Scissors",
    img:"https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVBJUIwJTgwJUVDJTlDJTg0JUVCJUIwJTk0JUVDJTlDJTg0JUVCJUIzJUI0fGVufDB8fDB8fHww"
  },
  paper:{
    name:"Paper",
    img:"https://images.unsplash.com/photo-1614032686158-b880f7e82c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVBJUIwJTgwJUVDJTlDJTg0JUVCJUIwJTk0JUVDJTlDJTg0JUVCJUIzJUI0fGVufDB8fDB8fHww"
  }
}
function App() {
const[userSelect, setUserSelect] = useState(null)

  const play=(userChoice)=>{
    setUserSelect (choice[userChoice])
  };


  return(
    <div>
    <div className="main">
     <Box title="You" item={userSelect}/>
     {/* <Box title="Computer"/> */}
    </div>
    <div className="main">
      <button onClick={() => play("scissors")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>
    </div>
    </div>
  );
}

export default App;
