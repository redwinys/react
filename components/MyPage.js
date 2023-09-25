import  React from 'react';
import '../css/new.css'

function MyPage(props) {
  const userId = props.userData.id;
  const userName = props.userData.Name; 
    return (
    <div className='Box'>
    <h2> MyPage </h2>
    <p>환영합니다.</p>
    <p><h3> ID: {userId}</h3> </p> 
    <p> <h3>  이름: {userName}</h3></p>
    </div>
  )
} 
export default MyPage;

