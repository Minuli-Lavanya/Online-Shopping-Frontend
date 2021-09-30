import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './Components/headers/Header'
import MainPages from './Components/mainpages/Pages'
import SideBar from './Components/mainpages/dashboard/SideBar'
import HeaderComponent from './Components/mainpages/dashboard/HeaderComponent'
import SupplierDetails from './Components/mainpages/supplierManagement/SupplierDetails';
import SupplierDetailsList from './Components/mainpages/supplierManagement/SupplierDetailsList'
import ItemDetails from './Components/mainpages/supplied_ItemManagement/ItemDetails';
import ItemList from './Components/mainpages/supplied_ItemManagement/ItemList';
import ViewItem from './Components/mainpages/supplied_ItemManagement/ViewItem';
import Dashboard from './Components/mainpages/dashboard/Dashboard';
import supplierUpdate from './Components/mainpages/supplierManagement/supplierUpdate';
import ItemsReport from './Components/mainpages/supplied_ItemManagement/itemReport';
import itemUpdate from './Components/mainpages/supplied_ItemManagement/ItemUpdate';
import Reportsupplier from './Components/mainpages/supplierManagement/Reportsuppliertable';




function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />

            <HeaderComponent/>
            <SideBar/>
            <Route path="/" exact component={SupplierDetailsList}/> 
            <Route path="/add" exact component={SupplierDetails}/>
            <Route path="/itemadd" exact component={ItemDetails}/>
            <Route path ="/itemList" exact component={ItemList}/>
            <Route path ="/itemList/:id" exact component={ViewItem}/>
            <Route path ="/Dashboard" exact component={Dashboard}/> 
            <Route path ="/supupdate/:id" exact component={supplierUpdate}/>
            <Route path ="/itemReport" exact component={ItemsReport}/>
            <Route path ="/itemupdate/:id" exact component={itemUpdate}/>
            <Route path ="/reportsupplier" exact component={Reportsupplier}/>

        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
