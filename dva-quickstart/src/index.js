import dva from 'dva';

/**
 * This line suprised me.
 * Seemed that it will magically apply the css to
 * the html rendered by React
 */
import './index.css';

/**
 * I guess "initialState" is a fixed key.
 */
// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1},
      { name: 'antd', id: 2},
    ],
  },
});

// 2. Plugins
// app.use({});

/**
 * Wait? How does it use model files?
 * Go to that file and have a look...
 * Got it. Models defines the update of states
 */
// 3. Model
app.model(require('./models/products').default);

/**
 * Go check the file...
 * Okay.
 */
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

