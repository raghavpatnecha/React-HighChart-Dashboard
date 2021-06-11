import Form from "./components/Form";
import Display from "./components/Display";
import { useState } from "react";
import  Menu  from "./components/Menu";
import  Side  from "./components/Side";

const App = () => {
  const [channels, setChannels] = useState([]);
  const [views, setViews] = useState([]);
  const [spent, setSpent] = useState([]);
  return (
   <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"> 
      <Menu/>
      <div className="app-main">     
            <Side/>
            <div className="app-main__outer">
              <div className="app-main__inner">
                <Display channels = {channels} views = {views} spent = {spent}/>
                <Form setChannels = {setChannels} setViews = {setViews} setSpent = {setSpent}/>
              </div>
            </div>
        </div>  
    </div>
  );
}

export default App;
