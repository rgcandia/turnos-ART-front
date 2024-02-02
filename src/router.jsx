import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Children from "./redux/components/Children/Children.jsx";
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />, 
      children:[
        {
          index:true,
          element:<Children/>
        },
    //     {
    //       path:'/formulario',
    //       element:<DynamicForm/>
    //     },
    //     {
    //       path:'/formulario/:id',
    //       element:<ViewForm/>
    //     }
      ]
    },


  ]);

  export default router;