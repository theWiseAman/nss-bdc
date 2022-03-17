import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home.js";
import TopBar from './TopBar/Topbar';
import Footer from './Footer/Footer'
import Developers from './Developers/Developers';
import Error_404 from './Error_404/Error_404';
import ScrollToTop from './ScrollToTop';

const Main = () => (
    <BrowserRouter>
    <ScrollToTop />
    <TopBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="*" element={<Error_404 />} />
    </Routes>
    <Footer />
    </BrowserRouter>
)
export default Main;