import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Home/Footer/Footer';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import CheckOut from './components/CheckOut/CheckOut';
import AddItem from './components/AddItem/AddItem';
import ManageItem from './components/ManageItem/ManageItem';
import Success from './components/Success/Success';
import ImportantLink from './components/ImportantLink/ImportantLink';
import MyItems from './components/MyItems/MyItems';







function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/success' element={<Success></Success>}></Route>
        <Route path='/important' element={<ImportantLink></ImportantLink>}></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageItem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
