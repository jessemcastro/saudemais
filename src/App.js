import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';
import List from './pages/customer/List';
import Home from './pages/Home';

import Newstudent from './pages/Newstudent';
import Register from './pages/customer/Register';

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/newstudent">
            <TemplatePage title="Cadastro de Alunos" Component={Newstudent} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Listar Alunos" Component={List} />
          </Route>
          <Route path="/register">
            <TemplatePage title="Register " Component={Register} />
          </Route>
          <Route path="/">
            <TemplatePage title="Página Inicial" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
};

export default App;
