import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../../../assets/qZone1.png'
import qZone2 from '../../../../../assets/qZone2.png'
import qZone3 from '../../../../../assets/qZone3.png'


const RightsiteNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login</h2>
                <button className="btn btn-outline w-full"><FaGoogle/>
                Google Login
               </button>
                <button className="btn btn-outline w-full"><FaGithub/>
                Github Login
               </button>
                <button className="btn btn-outline w-full"><FaGoogle/>
                Button
               </button>
            </div>
            <div className="p-4  mb-6">
               <h2 className="text-3xl">Find Us on</h2>
               <a href="" className="flex space-x-4 items-center p-4 text-lg border rounded-t-lg">
                 <FaFacebook className="text-blue-600 " /><div>FaceBook</div>
               </a>
               <a href="" className="flex space-x-4 items-center p-4 text-lg border-x ">
                 <FaTwitter className="text-blue-600 " /><div>Twitter</div>
               </a>
               <a href="" className="flex space-x-4 items-center p-4 text-lg border rounded-b-lg">
                 <FaInstagram className="text-blue-600 " /><div>Instragram</div>
               </a>
            </div>
            {/* Q-Zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl ">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightsiteNav;