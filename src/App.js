import React, {Component} from 'react';
import './reset.css';
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      menuStatus: 'drop-down-menu',
      // sideStatus: 'drop-down-side',
      isOpen: false
    }
  }

  handleClick = () => {
    if(this.state.menuStatus === 'drop-down-menu-open') {
      this.setState({menuStatus: 'drop-down-menu-closed'})
      // this.setState({sideStatus: 'drop-down-side-closed'})
    }else {
      this.setState({menuStatus: 'drop-down-menu-open'})
      // this.setState({sideStatus: 'drop-down-side-open'})
    }
    
  }
  render() {
    return (
      <header>
        <nav>
          <ul >
            <div className='logo'>
              <li>Start Bootstrap</li>
            </div>
              <li className='elements'>SERVICES</li>
              <li className='elements'>PORTFOLIO</li>
              <li className='elements'>ABOUT</li>
              <li className='elements'>TEAM</li>
              <li className='elements'>CONTACT</li>

              <div className="hamburger" >
                <li 
                   onClick={this.handleClick} className='menuham'>
                  MENU
                  <img 
                  src="https://img.icons8.com/material/24/000000/menu.png"/>
                </li>
            </div>
            
            <div className={this.state.menuStatus}>
              <ul className='mobile'>
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </ul>
        </nav>

        {/* <div className="header-main">
          <h3>Welcome To Our Studio</h3>
          <h1>IT'S NICE TO MEET YOU </h1>
          <button>TELL ME MORE</button>
        </div> */}
      </header>
      
    );
  }
}

export default App;
