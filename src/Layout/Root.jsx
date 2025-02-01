import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Home/Banner";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Root;