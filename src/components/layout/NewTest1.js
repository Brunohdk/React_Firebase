import React, {Component} from 'react'
import styled from 'styled-components'

const MainNav = styled.div`
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  -webkit-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  @media (min-width: 992px){
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  font-family: "Merriweather", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

const Container = styled.div`
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  @page{min-width: 992px !important;}
 @media (min-width: 576px){max-width:540px;}; 
 @media (min-width: 768px){max-width:720px;};
 @media (min-width: 992px){max-width:960px;-ms-flex-wrap: nowrap;
    flex-wrap: nowrap;};
 @media (min-width:1200px){max-width:1140px;};
 @media (max-width: 991.98px){padding-right:0; padding-left:0}; 
`  
const ANav = styled.a`
display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  &:hover{text-decoration:none;};
  &:focus{text-decoration:none;};
  font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #212529;
  @media(min-width:992px){color: rgba(255, 255, 255, 0.7);};
  @media(min-width:992px)&:hover{color:#fff;};
  `
const ButtonNav = styled.button`
padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  display: none;
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
  &:hover{text-decoration:none;};
  &:focus{text-decoration:none;};
  `  
const SpanNav = styled.span`
display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  `  
const DivBar = styled.div`
&:not(.show){display:none;};
-ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
`  /* VER FLEX BASIS */
const NavBarUl = styled.ul`
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  margin-left: auto !important;
  margin-top: 0.5rem !important;
  list-style: none;
  @media(min-width:992px){
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  };
  @media(min-width:1200px){
      .show > .nav-link{color: rgba(0, 0, 0, 0.9);};
      .active > .nav-link{color: rgba(0, 0, 0, 0.9);};  
    }
    @media(min-width:992px){margin-top: 0 !important;margin-bottom: 0 !important;};  
  `
const NavBarLi = styled.li`
` 

const NavBarA = styled.a`
display: block;
&:hover{text-decoration:none;};
&:focus{text-decoration:none;};
.disabled{color: #6c757d;;
    pointer-events: none;
    cursor: default;};
    padding: 0.5rem 1rem; 
    @media(min-width:992px){padding-right: 0.5rem;
        padding-left: 0.5rem;color: rgba(255, 255, 255, 0.7);};
        color: rgba(0, 0, 0, 0.5);
        .show > .nav-link{color: rgba(0, 0, 0, 0.9);};
        .active > .nav-link{color: rgba(0, 0, 0, 0.9);};  

    `/* VER O PADDING e HOVER FOCUS */

const Newtest1 = () => {

    

    return(
        <MainNav className="navbar navbar-expand-lg navbar-light fixed-top py-3">
            <Container>
                <ANav className="js-scroll-trigger" href="#page-top">ProgrammingKnowledge</ANav>
                <ButtonNav type="buton" className="navbar-toggler-right" data-toggle="collapse" data-target="#navBarResponsive" aria-controls="navBarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <SpanNav></SpanNav>
                </ButtonNav>
                <DivBar id="navBarResponsive">
                    <NavBarUl>
                        <NavBarLi>
                            <NavBarA className="js-scroll-trigger" href="#">About</NavBarA>
                        </NavBarLi>
                        <NavBarLi>
                            <NavBarA className="js-scroll-trigger" href="#">Services</NavBarA>
                        </NavBarLi>
                        <NavBarLi>
                            <NavBarA className="js-scroll-trigger" href="#">Portfolio</NavBarA>
                        </NavBarLi>
                        <NavBarLi>
                            <NavBarA className="js-scroll-trigger" href="#">Contact</NavBarA>
                        </NavBarLi>
                    </NavBarUl>
                </DivBar>
            </Container>
        </MainNav>
    )

}

export default Newtest1