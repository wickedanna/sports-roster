import React from 'react';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNabar';
import Team from '../components/Team/Team';

import './App.scss';

class App extends React.Component {
  state = {
    authed: false,
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <Team />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <MyNavbar />
      <h2>Team Name</h2>
      {loadComponent()}
    </div>
    );
  }
}

export default App;
