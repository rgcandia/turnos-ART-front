import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    //   errorElement: <Error404 />,
    //   children:[
    //     {
    //       index:true,
    //       element:<Index/>
    //     },
    //     {
    //       path:'/formulario',
    //       element:<DynamicForm/>
    //     },
    //     {
    //       path:'/formulario/:id',
    //       element:<ViewForm/>
    //     }
    //   ]
    },


  ]);

  export default router;