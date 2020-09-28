import React from 'react';
import './App.css';
import Profile from './Profile';
import Data from './Data';
import Blog from './Blog';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state={
          number:0
      }
  }
  render(){
      let content;
      if(this.state.number === 0){
        content = <Data />
      }else if(this.state.number === 1){
        content = <Profile />
      }else if(this.state.number === 2){
        content = <Blog />
      }

      return (
        <div className='App'>
          <nav className='menu'>
            <ul>
              <li onClick={()=>{this.setState({number:0})}}>Works</li>
              <li onClick={()=>{this.setState({number:1})}}>About</li>
              <li onClick={()=>{this.setState({number:2})}}>Blog</li>
            </ul>
          </nav>
          <div className='top-image'>Ryo Portfolio</div>
          <div className='content-width'>
            {content}
          </div>
        </div>
      );
  }
}

export default App;
