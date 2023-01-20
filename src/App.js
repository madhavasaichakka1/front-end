import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/about' element={<AboutPage/>}></Route>
                <Route path='/*' element={<NotFoundPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;