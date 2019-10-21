import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.header`
  position:fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 70px;
  background-color: transparent;
  -webkit-box-shadow: none;
    box-shadow: none;


@media(min-width:993px){
    padding:0px 70px;
}
@media (min-width:1500px){
    padding:0px 180px;
}
@media (min-width:1700px){
    padding: 0px 300px;
}
@media (min-width:1900px){
    padding: 0px 350px;
}
@media(min-width:2100px){
    padding:0px 440px;
}
@media(min-width:2300px){
    padding:0px 520px;
}
@media(min-width:2500px){
    padding: 0px 600px;
}

    
    .logo a {
        padding-top: 33px;
        @page{min-width: 992px !important;}
        display: flex;
        flex-direction: column;
        clear: both;
        padding-bottom: 30px;
        text-decoration: none;
        
        p {
            font-weight:bold;
            color:white;
            font-size:1.8rem;
        }
        em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: black;
  }
  a {
    font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  a:after{
    content: '';
    height:2px;
    width:0px;
    display:block;
    background:white;
    transition: width 0.5s;
  }
  a:hover:after{
    transform: width;
    width:100%;
}
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      font-size: 1em;
    }
    a {
        color:white;
      font-size: 1em;
      text-decoration: none;
    }
  }

  @media only screen and (max-width:576px){
      .logo{
          margin-left:-90px;
      }
  }

  @media only screen and (max-width: 992px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    width:100%;
    .logo {
      display: block;
      margin: 0px;
      margin-left: -30px;
      a {
        padding: 20px 0px;
        p{
            color:black;
            width:100%;
        }
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 21px;
      right: 55px;
      cursor: pointer;
    }
    ul.collapsed {
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-left:-30px;

      overflow: hidden;
      max-height: 0;
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 400px; /* approximate max height */
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 0px;
        margin: 0px 0px;
        width:auto;
        color:black;
      }
    }
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      slide: 0,  // How much should the Navbar slide up or down
    lastScrollY: 0,
    backgroundColor: 'transparent',
    color: 'spacegrey',
    borderBottom: 'none'  // Keep track of current position in state
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-70px', backgroundColor:'white', color:'black', borderBottom:'5px solid black' });
    } else {
      this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    const { isExpanded } = this.state;

    return (
        
      <Navigation style={{
        transform: `translate(0, ${this.state.slide})`,
        transition: 'transform 90ms linear',
        backgroundColor: `${this.state.backgroundColor}`
      }}>
        <div className="logo">
          <Link to="/">
            <p style={{color:`${this.state.color}`}}>Na Prática!</p>
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <li style={{color:`${this.state.color}`, borderBottom:`${this.state.borderBottom}`}}>home</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li style={{color:`${this.state.color}`, borderBottom:`${this.state.borderBottom}`}}>about</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li style={{color:`${this.state.color}`, borderBottom:`${this.state.borderBottom}`}}>contact</li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;


