import React from 'react';
import styles from './App.scss';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../FAQ/FAQ';
import List from '../List/ListContainer';
import MainLayout from '../MainLayout/MainLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import SearchResultsContainer from '../SearchResults/SearchResultsContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}>
        <Route exact path='/' component={Home} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:id" component={SearchResultsContainer} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;