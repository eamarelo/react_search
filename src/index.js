import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import SearchPage from './pages/search'
import Navigation from './navbar'

const navLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Search',
    href: '/search'
  }]

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={SearchPage} />
  </Switch>
)

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Navigation bgColor="red" titleColor="white" navData={navLinks} />
        <Router />
      </div>
    </BrowserRouter>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
