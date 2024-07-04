import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Root from './../layout/Root';
import About from '../pages/About/About';

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : '/about',
                element : <About/>
            },
           
        ]
    }
])

export default Routes;