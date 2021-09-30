import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import SupplierDetails from './Components/SupplierDetails';
import SupplierDetailsList from './Components/SupplierDetailsList';
import ItemDetails from './Components/ItemDetails';
import ItemList from './Components/ItemList';
import ViewItem from './Components/ViewItem';
import HeaderComponent from './Components/HeaderComponent';
import SideBar from './Components/SideBar';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    
    <Router>
      
      
      <div>
        
        <HeaderComponent/>
        <SideBar/>
        <Route path="/" exact component={SupplierDetailsList}/> 
        <Route path="/add" exact component={SupplierDetails}/>
        <Route path="/itemadd" exact component={ItemDetails}/>
        <Route path ="/itemList" exact component={ItemList}/>
        <Route path ="/itemList/:userId" exact component={ViewItem}/>
        <Route path ="/login" exact component={Login}/>
        <Route path ="/Register" exact component={Register}/>
        <Route path ="/Dashboard" exact component={Dashboard}/> 
        
      </div>
      
    </Router>  
    
  );
}

export default App;
