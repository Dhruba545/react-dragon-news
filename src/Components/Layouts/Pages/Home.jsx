import BreakingNews from "./BreakingNews";
import Header from "./shaired/Header/Header";
import LeftsiteNav from "./shaired/Navbar/LeftsiteNav";
import Navbar from "./shaired/Navbar/Navbar";
import RightsiteNav from "./shaired/Navbar/RightsiteNav";

const Home = () => {
    return (
        <div>
            <div  className="flex items-center text-center justify-center "><Header></Header></div>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="border-2 ">
                    <LeftsiteNav></LeftsiteNav>
                </div>
                <div className="text-4xl md:col-span-2 border-2 "> News coming soon</div>
                <div  className="border-2 border-red-300">
                    <RightsiteNav ></RightsiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;