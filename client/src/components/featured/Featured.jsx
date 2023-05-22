
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { useNavigate } from "react-router-dom";


const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByArea?areas=North,Atlas,South"
  );
  const navigate = useNavigate();
  const handleClick = (area) => {
    navigate(`/hotels?area=${area}`);
  };
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem" onClick={() => handleClick("North")}>
            <img
              src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/07/Chefchaouen.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>North</h1>
              
              
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleClick("Atlas")}
>
            <img
              src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2021/05/2c775re-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Atlas</h1>
              
            </div>
          </div>
          <div className="featuredItem" onClick={() => handleClick("South")}
>
            <img
              src="https://www.tripsavvy.com/thmb/uz9eLrHiCGum8SLI4_fcxD0OtPU=/2000x1500/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-513029751-5c6690da46e0fb0001befa9a.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>South</h1>
              
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
