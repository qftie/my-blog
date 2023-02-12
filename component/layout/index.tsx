import type { NextPage } from "next"
import Navbar from "../Navbar";
import Footer from "../Footer";

// layout就是个架子，渲染什么由js决定
const Layout: NextPage = (props) => {
    return (
        <div>
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;