import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';

import Customers from './pages/Customers';
import Home from './pages/Home';

import Newstudent from './pages/Newstudent';

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/newstudent">
            <TemplatePage title="Cadastro de Alunos" Component={Newstudent} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Listar Alunos" Component={Customers} />
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
