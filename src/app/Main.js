import React from 'react'
import { Route , Switch } from 'react-router-dom'

import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Education from './pages/Education'
import Professional from './pages/Professional'
import Wrapper from './components/Wrapper'

import NavSideBar from './components/NavSideBar'

const CurrentPage = Object.freeze({
    ABOUT: 'ABOUT',
    PROFESSIONAL: 'PROFESSIONAL',
    PORTFOLIO : 'PORTFOLIO',
    EDUCATION: 'EDUCATION',
});

const COLOR_OF_PAGE = {
    'ABOUT': '#b7d2e0',
    'PROFESSIONAL': '#a8d6c7' ,
    'PORTFOLIO': '#f1c2bb',
    'EDUCATION': '#f9de77' ,
};

export default class Main extends React.Component {
    handleTransition(currentPage)  {
        return () => {
            this.setState({ currentPage: currentPage });
        }
    };
    getCurrentPage() {
        if (window.location.pathname === '/') {
            return CurrentPage.ABOUT;
        } else if (window.location.pathname === '/professional') {
            return CurrentPage.PROFESSIONAL;
        } else if (window.location.pathname === '/education') {
            return CurrentPage.EDUCATION;
        } else if (window.location.pathname === '/portfolio') {
            return CurrentPage.PORTFOLIO;
        }
    }
    constructor(props){
        super(props)
        this.state = {
            currentPage : this.getCurrentPage()
        }
        this.handleTransition = this.handleTransition.bind(this)
    }

    render () {
        return (
            <div>
            <Wrapper className='component-wrapper' backgroundColor={COLOR_OF_PAGE[CurrentPage[this.state.currentPage]]}>
                <Switch>
                 <Route exact={true} path="/" component={About}/>
                 <Route path="/portfolio" component={Portfolio}/>
                 <Route path="/education" component={Education}/>
                 <Route path="/professional" component={Professional}/>
                </Switch>
            </Wrapper>
            </div>
        )
    }
}