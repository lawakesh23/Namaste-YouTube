
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import store  from "./utils/store";
import { Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';


const approuter= createBrowserRouter([
  {
    path:'/',
    element: <Body/>,
    children: [
      {
        path: '/',
        element: <MainContainer/>
      },
      {
        path: "/watch",
        element: <Watch/>
      }
    ]
  }
])


function App() {

  return (
    <>
      <Provider store={store}>
        <Header/>

        <RouterProvider router={approuter}/>

      </Provider>
    </>
  );
}

export default App;
