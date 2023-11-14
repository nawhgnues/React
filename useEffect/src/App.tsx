import { useState } from "react";

// # 1. useEffect내에서 상태를 업데이트하는 것은 비효율적이다.
// function Form() {
//   const [firstName, setFirstName] = useState('Taylor');
//   const [lastName, setLastName] = useState('Swift');

//   // 🔴 피하기: 중복 상태 및 불필요한 효과
//   const [fullName, setFullName] = useState('');
//   useEffect(() => {
//     setFullName(firstName + ' ' + lastName);
//   }, [firstName, lastName]);
//   // ...
// }

function Form() {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  // ✅ 좋음: 렌더링 중에 계산됨
  const fullName = firstName + ' ' + lastName;
  // ...
}


function App() {
  return (
    <>
    </>
  )
}

export default App
