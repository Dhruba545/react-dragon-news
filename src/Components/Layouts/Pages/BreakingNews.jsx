import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex" >
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={200} className="ml-2">
                <Link to="/" className="mx-6">
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as..........</Link>
                <Link to="/" className="mx-6">
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as..........</Link>
                <Link to="/" className="mx-6">
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as..........</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;