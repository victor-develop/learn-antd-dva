import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

function RouterConfig({ history }) {
  /**
   * see? it returns (...)
   * This must be the legend "JSX" syntax
   */
  return (
    /**
     * Well, even Router in JSX?
     * but this is not a seen UI component...
     * okay, creative use.
     * 
     */
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {/* 
          This is how you can comment in JSX.
          Look at the attribute component={Products}
          This is how a page component get linked with a route
          Now let's go read "Products"
          ...
        */} 
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
