import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './Pages/Home/Home';
import Collections from "./Pages/Browsebook/Collections";
import ProductCard from "./Pages/Bookdetail/ProductCard";
import CartItem from "./Components/CartItem";
import NotFound from "./Pages/Error/NotFound";
const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/browsebook',
                element:<Collections />
            },{
                path:'/book/:id',
                element:<ProductCard />
            },{
                path:'/books/:catergory',
                element:<CartItem />
            }
        ],
        errorElement:<NotFound />
    },
    
])

export default router;