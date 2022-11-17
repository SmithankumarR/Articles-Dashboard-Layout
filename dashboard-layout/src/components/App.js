import React from 'react';
import Sidebar from './Sidebar';
import { Route, Switch } from 'react-router-dom'
import Main from './Main';
import SingleArticle from './SingleArticle';
import data from '../data'
import NotFound from './NotFound';
import Home from './Home';
import Help from './Help';
import Header from './Header';
// import data from '../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    var dataeach = data.map((each) => {
      return each
    })
    return (
      <>
        <Header />
        <div className="flex ">
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/articles" exact>
              <Main />
            </Route>

            <Route path="/help" exact>
              <Help />
            </Route>

            <Route path="/post/:slug" component={SingleArticle} data={dataeach} />

            <Route path="*" >
              <NotFound />
            </Route>
          </Switch>
        </div>
      </>
    )
  }
}

export default App;


