
import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, PageHeader, Grid, Col } from 'react-bootstrap';

import Button from './Button'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
`

const NavWrapper = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: flex-end;

    /* If navigation is open (show is true) */
    ${props => props.isOpen && css`
      ul {
        position: absolute;
        top: 64px;
        max-height: 1000px;
      }
    `}
  }
`

const NavList = styled.ul`
  margin: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  list-style-type: none;
  height: auto;
  max-height: 0;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    max-height: 1000px;
  }
`

const NavItem = styled.li`
  & + & {
    margin-top: 12px;
  }

  @media (min-width: 480px) {
    & + & {
      margin-top: 0;
      margin-left: 32px;
    }
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #000;
    transition: color .25s ease-in-out;

    &:hover {
      color: #888;
    }
  }
`

const NavButton = styled(Button)`
  @media (min-width: 479px) {
    display: none;
  }
`

export default class NavSideBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState({
            show: !this.state.show
        })
    }

    clickHandler() {
        const element = document.getElementById('slide-panel');
        element.style.animation = 'none';
        setTimeout(function () {
            element.style.animation = '';
        }, 5);
        element.classList.add('slide-out');
    }

    render () {
        return (
                <Navbar>
                    <Nav className="flex-column">

                    <Nav.Link to='/about' href="/about" onClick={this.clickHandler}>
                                <h3>About Me</h3>
                            </Nav.Link>
                            <Nav.Link to='/professional' href="/professional">
                                <h3>Professional</h3>
                            </Nav.Link>
                            <Nav.Link to='/education' href="/education">
                                <h3>Education</h3>
                            </Nav.Link>
                            <Nav.Link to='/portfolio' href="/portfolio">
                                <h3>Portfolio</h3>
                            </Nav.Link>
                        </Nav>
                </Navbar>

        )
    }
}