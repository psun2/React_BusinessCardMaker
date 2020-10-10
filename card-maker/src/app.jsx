import React from 'react';
import './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login authService={authService} />}
          />
          <Route
            path="/maker"
            // route에서 바로 component={Maker} 로 인라인 작성 시,
            // History props이 오게 되는데 ....
            // props에 있는 Histoy 객체를 건드릴때마다 매번
            // state가 변경됨...
            // 성능적 한계(공식문서) : lnline로 컴포넌트를 보내면
            // 이미 만들어진 컴포넌트를 unmount 시키고 다시 mount 합니다.
            // 즉 다시 새로 만들어 냅니다.
            // 결과 적으로 성능 적인 측면이 떨어지며, 깜박임을 발생시킬 수 있습니다.
            render={() => (
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
