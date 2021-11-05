import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';
import Home from './pages/Home';
import Newstudent from './pages/Newstudent';
import CustomersList from './pages/customer/List';
import CustomersRegister from './pages/customer/Register';
import Professors from './pages/Professors';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/newstudent">
            <TemplatePage title="Cadastro de Alunos" Component={Newstudent} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Listar Alunos" Component={CustomersList} />
          </Route>
          <Route path="/register">
            <TemplatePage title="Register " Component={CustomersRegister} />
          </Route>
          <Route path="/professors">
            <TemplatePage title="Professores" Component={Professors} />
          </Route>
          <Route path="/calendar">
            <TemplatePage title="Agenda" Component={Calendar} />
          </Route>
          <Route path="/login">
            <TemplatePage title="Login" Component={Login} />
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
