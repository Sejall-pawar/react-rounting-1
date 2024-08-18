import ReactDOM from 'react-dom/client';

import Home from "./views/home/home"
import About from "./views/about/about"
import Recipelist from './views/recipe/recipelist';

const root = ReactDOM.createRoot(document.getElementById('root'));

const currentPath =window.location.pathname;

if (currentPath=="/"){
    root.render(<Home/>)
}
else if (currentPath=="/about"){
    root.render(<About/>)
}
else if (currentPath=="/recipelist"){
    root.render(<Recipelist/>)
}
else
{
    root.render(<h1>404 Not Found</h1>)
}