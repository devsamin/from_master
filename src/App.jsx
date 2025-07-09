
import './App.css'
import Hookfrom from './components/Hookfrom/Hookfrom'
import RefFrom from './components/RefFrom/RefFrom'
// import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFullform from './components/StateFullform/StateFullform'
import ReuseableFrom from './components/ReuseableFrom/ReuseableFrom'
function App() {

  const handelsginupData = (data) =>{
    console.log(data)
  }
  const handelupdateData = (data) =>{
    console.log(data)
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullform></StateFullform> */}
      {/* <RefFrom></RefFrom> */}
      {/* <Hookfrom></Hookfrom> */}
      <ReuseableFrom formtitle={'Sgin Up'} handelsubmit={handelsginupData}
       > <div>
        <h1>Sgin up</h1>
        <p>Please now you should sgin up</p></div></ReuseableFrom>
      <ReuseableFrom formtitle={'Profile Update'} submitbtn={'Update'} handelsubmit={handelupdateData}> <div>
        <h1>Update Profile</h1>
        <p>Alwase keep your profile</p></div></ReuseableFrom>
      
    </>
  )
}

export default App
