import Header from './components/Header'
import Main from './components/Main';
import MyBlog from './components/MyBlog';
import SideBar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// function App = () =>은 오류가 났다. 왜지?

const App = () => {
  return (
    <div>
          <Routes>
              <Route path={"/"} element={<Main/>}></Route>
              <Route path={"/Myblog"} element={<MyBlog/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
