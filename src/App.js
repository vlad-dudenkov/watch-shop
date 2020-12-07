import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HeaderContainer } from './components/header/HeaderContainer';
import { SectionContainer } from './components/SectionContainer/SectionContainer';


function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <Switch>
        <Route exact path="/" component={SectionContainer}/>
      </Switch>
    </div>
  );
}

export default App;
