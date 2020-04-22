import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page from '../Page'
import Error from '../Error'
import RouterBattleSim from '../RouterBattleSim'
import RouterCardBuilder from '../RouterCardBuilder'
import RouterCollection from '../RouterCollection'
import RouterDeckBuilder from '../RouterDeckBuilder'
import RouterGuides from '../RouterGuides'
import RouterListBuilder from '../RouterListBuilder'
import RouterQuestBuilder from '../RouterQuestBuilder'
import RouterStories from '../RouterStories'
import load from '../../helpers/load'

const FAQ = load('FAQ')
const Brawl = load('Brawl')
const Home = load('Home')
const Member = load('Member')

const Router = props => (
  <BrowserRouter>
    <Switch>
      <Route path='/sim'>
        <RouterBattleSim />
      </Route>

      <Route path='/card'>
        <RouterCardBuilder />
      </Route>

      <Route path='/deck'>
        <RouterDeckBuilder />
      </Route>

      <Route path='/collection'>
        <RouterCollection />
      </Route>

      <Route path='/quest'>
        <RouterQuestBuilder />
      </Route>

      <Route path='/stories'>
        <RouterStories />
      </Route>

      <Route path='/guides'>
        <RouterGuides />
      </Route>

      <Route path='/list'>
        <RouterListBuilder />
      </Route>

      <Page path='/brawl' active='HOME'>
        <Brawl />
      </Page>

      <Page path='/faq' active='HOME'>
        <FAQ />
      </Page>

      <Page exact path='/' active='HOME'>
        <Home />
      </Page>

      <Page path='/member/:memberId'>
        <Member />
      </Page>

      <Page path='*'>
        <Error error='HTTP 404 — Not Found' />
      </Page>
    </Switch>
  </BrowserRouter>
)

export default Router
