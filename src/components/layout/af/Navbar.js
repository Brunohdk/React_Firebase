import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Link as LinkReplace} from 'react-scroll';

const Navigation = styled.header`
  position:fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 60px;
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
        @page{min-width: 992px !important;}
        display: flex;
        flex-direction: column;
        clear: both;
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
    display: block;
    position: relative;
    width:100%;
    background: black !important;
    
    .logo {
      display:flex;
      height:60px;
      .logoA{
        margin-top:18px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 18px;
      right: 55px;
      cursor: pointer;
    }
    .nav{
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
          color:#FFFF !important;
        }
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
      this.setState({ slide: '-70px', backgroundColor:'black', color:'black', borderBottom:'5px solid black' });
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
          <div className="logoA">
          <Link to="/">
            <p style={{color:'#FFFF'}}>Na Prática!</p>
          </Link>
          </div>
        </div>
        <nav className="nav">
          <i style={{color:'#FFFF'}}
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <LinkReplace activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          hashSpy={false}
                          offset={50}
                          duration={600}
                          delay={300}
                          isDynamic={true}
                          ignoreCancelEvents={false}>
              <li 
              style={{color:'#FFFF', borderBottom:`${this.state.borderBottom}`, cursor:'pointer'}}>home</li>
            </LinkReplace>
            <LinkReplace activeClass="active"
                          to="aboutMe"
                          spy={true}
                          smooth={true}
                          hashSpy={false}
                          offset={50}
                          duration={600}
                          delay={300}
                          isDynamic={true}
                          ignoreCancelEvents={false}>
              <li style={{color:'#FFFF', borderBottom:`${this.state.borderBottom}`, cursor:'pointer'}}>
              about
              </li>
              </LinkReplace>
              <LinkReplace activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          hashSpy={false}
                          offset={50}
                          duration={600}
                          delay={300}
                          isDynamic={true}
                          ignoreCancelEvents={false}>
              <li style={{color:'#FFFF', borderBottom:`${this.state.borderBottom}`, cursor:'pointer'}}>
              contact</li>
              </LinkReplace>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;


