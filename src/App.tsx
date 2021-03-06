import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'

import HomeRoute from './routes/HomeRoute'
import SampleRoute from './routes/SampleRoute'

import stores from './stores'

import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH,
  TODOS_ROUTE_PATH,
  POST_ROUTE_PATH,
  HOVER_ROUTE_PATH
} from './constants/NavigationConstants'
//import TodosRoute from './routes/TodosRoute'
//import PostRoute from './routes/PostRoute'

const TodosRoute = lazy(() => import('./routes/TodosRoute'))
const PostRoute = lazy(() => import('./routes/PostRoute'))
const HoverModel = lazy(() => import('./routes/netflixHoverModel/route'))

import i18n from './i18n'
import Loader from './components/common/Icons/Loader/SvgFile'

const App = () => {
  return (
    <Provider {...stores}>
      <I18nextProvider i18n={i18n}>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path={HOVER_ROUTE_PATH}>
                <HoverModel />
              </Route>
              <Route exact path={POST_ROUTE_PATH}>
                <PostRoute />
              </Route>
              <Route exact path={SAMPLE_ROUTE_PATH}>
                <SampleRoute />
              </Route>
              <Route exact path={TODOS_ROUTE_PATH}>
                <TodosRoute />
              </Route>
              <Route path={HOME_ROUTE_PATH}>
                <HomeRoute />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </I18nextProvider>
    </Provider>
  )
}

export default App
