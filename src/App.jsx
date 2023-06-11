import {useEffect} from "react";
import {fetchDataFromApi} from "./utils/api";
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {getApiConfiguration, getGenres} from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch(); //Dispatching plain object actions to the store when something happens in the app
  const {url} = useSelector((state) => state.home);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      //Pure reducer functions looking at those actions and returning immutably updated state
      dispatch(getApiConfiguration(url));
    });
  };

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  // API Call for Tv & Genre List Label on Carousel-------
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];

    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => {
        allGenres[item.id] = item;
      });
    });
    dispatch(getGenres(allGenres)); //saving to store
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
