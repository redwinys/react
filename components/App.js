import React, {useState} from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";
import '../css/new.css' //css
import HeaderAdmin from './Header/Header admin'; // header
import Footer from './Footer/Footer';// footer
import LoginForm from './LoginForm';  // login
import MyPage from './MyPage.js'; //myPage
import Register from './Register'; //회원가입 

const App =()=> {
  const [name, setName] = useState('');
  const [mode, setMode] = useState('Main'); //Main, MyPage, Register
  const userData = {
    id : '123',
    password: '123',
    Name : '유지혜'
  }
  const navigate = useNavigate();
  const toInfo=(e)=>{ 
    // setName('유지혜')
    e.preventDefault();
    setMode('MyPage');
    navigate('/MyPage');
    console.log(mode);
    console.log(userData.name);
  }
  const createDone =(e)=>{
    e.preventDefault();
    setMode('Main');
    navigate('/');
    alert('회원가입이 완료되었습니다.')
  }
  return (
    <div className="App">
        <HeaderAdmin userName={userData.Name}/>
          <Routes>
            <Route path='/' element={<LoginForm userData={userData} toInfo={toInfo} setName={setName}></LoginForm>} />
            <Route path='/MyPage' element={<MyPage name={name} navigate={navigate} userData={userData} />} />
            <Route path='/Register' element={<Register createDone={createDone}></Register>} />
          </Routes>
        <Footer/>
        </div>
  );
}

export default App;



// import React,{useState} from 'react';
// import { Route, Routes, useNavigate } from "react-router-dom";
// import '../css/new.css'; //css
// import HeaderAdmin from './Header/Header admin'; //header
// import Footer from './Footer/Footer'; //footer
// import LoginForm from './LoginForm'; //login
// import reactThrottle from './R095_reactThrottle'; //myPage
// import Register from './Register'; //회원가입 

// const App= ()=> {
//   const [name,setName] = useState('');
//   const [mode, setMode] =useState('main');
//   const history = useNavigate(); 
//   const useInfo = {
//     id:'1234',
//     pass:'1234',
//     name :'유지혜'
//   };

//   const navigate = useNavigate();
//   const changeMode = (e,n) =>{
//     e.preventDefault();
//     setMode('Info')
//     setMode('/throttle')
//   }



//   let getContents = ()=>{
//     let contents=[];
//     if(mode === 'main'){
//       contents.push(
//         [<Route exact path='/' element={<LoginForm changeMode={changeMode}
//         />}
//         />],
//         // [<Route exact path='/Throttle' element={<reactThrottle/>} />]
//       )
//     }
//     else if(mode === '/Throttle'){
//       contents.push(
//       [<Route exact path='/Throttle' element={<reactThrottle/>} />]
//       )
//     } 
//     else if (mode === '/Register'){
//       contents.push(
//         [<Route exact path="Register" element={<Register/>}/>]
//       )
//     }return contents;
//   }
  
//   console.log(getContents)
  


//     return (
//       <div className="App">
//         <HeaderAdmin name={name}/> 
//         <Routes>
//         {getContents()}
//         </Routes>
//         <Footer name={name}/>
//       </div>
//     );
//   }


// export default App;