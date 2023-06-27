// import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";import RGB from './components/RGB';
import Pessoas from './components/Pessoas';
import Contador from './components/Contador';
import PonteiroMouse from './components/PonteiroMouse';
import Tarefas from './components/Tarefas';
import Navigation from "./components/Navegacao";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation/>,
  },
  {
    path: "/ponteiromouse",
    element: <PonteiroMouse/>,
  },
  {
    path: "/contador",
    element:<Contador/>,
  },
  {
    path: "/pessoas",
    element: <Pessoas/>,
  },
  {
    path: "/rgb",
    element: <RGB/>,
  },
  {
    path: "/tarefas",
    element: <Tarefas/>,
  },
]);

function App({routes}){
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  );
  
}

export default App;