import React, { useEffect, useState } from "react";
import "./Home.css";
import Row from "./Row";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const apikey = process.env.REACT_APP_NETFLIX_API_KEY;
const url = "https://api.themoviedb.org/3";
const popular = "popular";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const topRated = "top_rated";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Home = () => {
  const [popularlist, setPopularList] = useState([]);
  const [upcominglist, setUpcomingList] = useState([]);
  const [nowplayinglist, setNowPlayingList] = useState([]);
  const [topRatedlist, setTopRatedList] = useState([]);
  const [genrelist, setGenreList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          popularResponse,
          upcomingResponse,
          nowPlayingResponse,
          topRatedResponse,
          genreResponse,
        ] = await Promise.all([
          axios.get(
            `${url}/movie/${popular}?api_key=${apikey}&language=en-US&page=1`
          ),
          axios.get(
            `${url}/movie/${upcoming}?api_key=${apikey}&language=en-US&page=1`
          ),
          axios.get(
            `${url}/movie/${nowPlaying}?api_key=${apikey}&language=en-US&page=1`
          ),
          axios.get(
            `${url}/movie/${topRated}?api_key=${apikey}&language=en-US&page=1`
          ),
          axios.get(
            `${url}/genre/movie/list?api_key=${apikey}&language=en-US&page=1`
          ),
        ]);

        setPopularList(popularResponse.data.results);
        setUpcomingList(upcomingResponse.data.results);
        setNowPlayingList(nowPlayingResponse.data.results);
        setTopRatedList(topRatedResponse.data.results);
        setGenreList(genreResponse.data.genres);
        setLoading(false);
      } catch (error) {
        alert("Error fetching the data");
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <span class="sr-only">Loading...</span>{" "}
        <div class="spinner-border " role="status"></div>{" "}
      </div>
    );
  }

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularlist[0]
            ? `url(${imgUrl}/${popularlist[0].poster_path})`
            : "none",
        }}
      >
        {popularlist[0] && (
          <React.Fragment>
            <div className="banner">
              <div className="col-sm-12 col-md-6 ban">
                <h1 className="mb-4">{popularlist[0].original_title}</h1>
                <p>{popularlist[0].overview}</p>
              </div>
              <div className="col-sm-12 col-md-6 d-flex align-items-center">
                <div className="Option">
                  <button className="btn btn-light button mr-3">
                    Play <BiPlay className="play" />
                  </button>
                  <button className="btn btn-light button">
                    My List <AiOutlinePlus className="play" />
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>

      <Row title="Popular" arr={popularlist} />
      <Row title="Upcoming" arr={upcominglist} />
      <Row title="Now Playing" arr={nowplayinglist} />
      <Row title="Top Rated" arr={topRatedlist} />

      <div className="genreBox">
        {genrelist.map((item, index) => (
          <Link key={index} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
