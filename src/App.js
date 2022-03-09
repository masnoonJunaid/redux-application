import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import {actionCreators} from "./state/index"
import react,{useState} from 'react'


let alertStyle = {
  color:"black"
}

let numberStyle = {
  color:"black"
}

// if(account == -5000){
//   alertStyle.color = "red"
// }



function App(props) {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const [defaultTitle,alertTitle] = useState("You are good to go")


  const {depositMoney,withdrawMoney,resetMoney} = bindActionCreators(actionCreators,dispatch);

  if(account==-5000){alertStyle={color:"red"}}else{alertStyle={color:"black"}}

  return (
    <div className="App">
      <h1
      style={account ==-5000?{color:"red"}:{color:"black"}}
       >
        {account}
        </h1>
        <p style={account ==-5000?{color:"red"}:{color:"black"}}>{account==-5000?"You have reached the credit limit":"You are good to go"}</p>
      <button onClick={()=>depositMoney(1000)}>Deposit</button>
      <button onClick={()=>withdrawMoney(1000)}>withdraw</button>
      <br/>
      <button onClick={()=>resetMoney()}>Reset</button>
    </div>
  );
}

export default App;
