import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

<<<<<<< HEAD
import CustomersList from './pages/customer/List'
import CustomersRegister from './pages/customer/Register'
=======
import Customers from './pages/Customers'
import Professors from './pages/Professors'
import Calendar from './pages/Calendar'
>>>>>>> branch_alberth
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
        <TemplateDefault>
        <Switch>
          <Route path="/customers/add">
            <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Lista de Clientes" Component={CustomersList} />
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
  )
}

export default App
