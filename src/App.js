// import './App.css';
import './index.css'
import React from 'react';
import JsonReader from './components/JsonReader';
import { Chart } from './components/Chart';
import { RandomJSONMAker} from './components/RandomJSONMakerTemperature';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { CircleText } from './components/CircleText';


function App() {
  console.log(RandomJSONMAker(10))
  // const randomData = RandomJSONMAker(10)

  

  return (
    <div>
      <h1 >H1 element</h1>
      <p>This a pargraph with styling</p>
      <div className="myPara">This is a class in css</div>
      <div className='gridContainer'>
        <div className='gridItem span2Columns'>
            <div className='myPara'>This</div> 
          </div>
        <div className='gridItem'>is</div>
        <div className='gridItem'>a</div>
        <div className='gridItem span2Columns'>grid</div>
        <div className='gridItem span3Columns'>span 3 columns</div>
        <div className='gridItem span3Columns gridItem:rowChild'></div>
      </div>
      <Chart/>
      <CircleText></CircleText>
      {/* <JsonReader/> */}
      </div>
    

  );
}

export default App;
