import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { getChar } from './util';
import {Api} from './api';
import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '75ch',
    },
  },
}));



function App() {
  const classes = useStyles();
  const [data, setData] = useState('');
  const [soulData,getSoulData]= useState([]);
  const [name,setName]=useState("");
  
  const [dreamData,getDreamData]= useState([]);
  const [destinyData,getDestinyData]= useState([]);
  const [soul,getSoul] = useState(null)
  const [dream,getDream] = useState(null)
  const [destiny,getDestiny] = useState(null)
  const [comp,getComp] = useState(null)
  const handleChange=()=>{
     setName(data);
    let info =getChar(data);
     getSoul(info[2]);
     getDream(info[3]);
     getDestiny(info[1]);
     getComp(info[0]);
     getSoulData (Api.filter((elem) => elem.id==soul))
     getDreamData (Api.filter((elem) => elem.id==dream))
     getDestinyData (Api.filter((elem) => elem.id==destiny))
    

  }

  const reset=()=>{
    setData('')
    setName('');
     getSoul(null);
     getDream(null);
     getDestiny(null);
     getComp(null);
     getSoulData ([])
     getDreamData ([])
     getDestinyData ([])
  }
  console.log("ajdhh" , soul);
  
  
  
  return (
    <div className="app">
      <div className="main">
        <div className="text_div">
          <h1 className="text">Chaldean Name Numerology- Destiny, Heart Desires and Dream Numbers</h1>
          <p>Online Name Numerology Calculator </p>
        </div>
        <div className="calculator">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={data} onChange={(e) => setData(e.target.value)} />
          </form>
          <div className="btn_div">
            <div className="btn">
              <Button variant="contained" color="secondary" onClick={()=>handleChange()}>
                Calculate
              </Button>
            </div>
            <div className="btn">
              <Button variant="outlined" color="secondary" onClick={() => reset()}>
                Reset
              </Button>
            </div>
          </div>
        </div>
        <h3 className="text">Chaldean Name Numerology Reading </h3>
        <div className="info">
          {console.log("wefewfewfwefwef",soul)}
          <div className="comp_info">
            <h2>Hi {name.toUpperCase()}</h2>
            
            <p>Your Compound Name Number :<span className="num"> {comp}</span></p>

          </div>
            
          <div className="destiny_info">
            <p><b>Destiny Number- </b> The Expression number which describes who you are, and what you are, or what you become .</p>
            <p><b>Name Destiny/Expression Nmber or Namanak : </b>{destiny}</p>
            <p>{destinyData.length>0 && destinyData[0].destiny}</p>
          </div>
          <div className="soul_info">
            <p><b>Soul urge number - </b>The heart desire number which describe your inner potentials and inner resources.</p>
            <p><b>Soul Urge/Heart desire Number : </b><span className="num">{soul}</span></p>
            <p>{soulData.length>0 && soulData[0].soul}</p>
          </div>
          <div className="dream_info">
            <p><b>Dream Number - </b>The personality number which describes your personality ,indeed your first impression on others.</p>
            <p><b>Name Dream/Personality Number : </b><span className="num">{dream}</span></p>
            <p>{dreamData.length>0 && dreamData[0].dream}</p>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;
