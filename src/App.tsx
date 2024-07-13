import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import Add from './routes/my-list-data/add/add.component';
import Edit from './routes/my-list-data/edit/edit.component';
import MyListData from './routes/my-list-data/my-list-data.component';
import MyList from './routes/my-list/my-list.component';
import Register from './routes/register/register.component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="my-list" element={<MyList />} />
          <Route path="my-list-data" element={<MyListData />} />
          <Route path="my-list-data/add" element={<Add />} />
          <Route path="my-list-data/:id" element={<Edit />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
