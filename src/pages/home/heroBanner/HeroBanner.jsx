import "./style.scss";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import {useSelector} from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state) => state.home);

  // Call API
  const {data, loading} = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [url.backdrop, data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome </span>
          <span className="subTitle">
            Popcorn, Pixels, Passion! Welcome to the Cinematic Wonderland!
            <br></br>Explore Now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
