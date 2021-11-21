import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmpresaList from "./components/EmpresaList";
import AddEmpresa from "./components/AddEmpresa";
import EditEmpresa from "./components/EditEmpresa";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Switch>
            <Route exact path="/">
              <EmpresaList />
            </Route>
            <Route path="/add">
              <AddEmpresa />
            </Route>
            <Route path="/edit/:id">
              <EditEmpresa />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;