import { useState, useEffect } from "react";
import useAuth from "./useAuth";
// import Player from "./Player";
import TrackSearchResult from "./TrackSearchResult";
import { Container, Form, Button } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import Circle from "./Circle";
import { Link } from "react-router-dom";
import Userform from "./Userform";
import Register from "./Register";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
const spotifyApi = new SpotifyWebApi({
  clientId: "db564f6b4a1e41bab7cc3e8b4df55bf7",
});

function Dashboard({ code }) {
  // const accessToken = useAuth(code);
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem("accesstoken")
  );
  const [token, settoken] = useState(window.localStorage.getItem("token"));
  useEffect(() => {
    const acc = window.localStorage.getItem("accesstoken");
    if (acc === null) {
      axios
        .post("http://localhost:3001/login", {
          code,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          window.localStorage.setItem("accesstoken", res.data.accessToken);
          // setRefreshToken(res.data.refreshToken);
          // setExpiresIn(res.data.expiresIn);
          window.history.pushState({}, null, "/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [code]);
  const [search, setSearch] = useState("");
  const [allgenre, setallgenre] = useState([]);
  const [genrescore, setgenrescore] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [counter, setcounter] = useState(0);
  const [lyrics, setLyrics] = useState("");
  const [user, setuser] = useState("");
  const navigate = useNavigate();
  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
    setLyrics("");
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  useEffect(() => {
    spotifyApi.getMyTopArtists({ limit: 50 }).then(
      function (data) {
        let topArtists = data.body.items;
        let a = [];

        topArtists.map((data, i) => {
          a.push(data.genres);
        });
        const b = {};
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < a[i].length; j++) {
            if (b[a[i][j]] == undefined) {
              b[a[i][j]] = 1;
            } else b[a[i][j]]++;
          }
        }
        for (const i in b) {
          sum = sum + b[i];
        }

        var keysSorted = Object.keys(b).sort(function (a1, b1) {
          return b[b1] - b[a1];
        });
        setallgenre(keysSorted);
        var score = {};
        for (let i = 0; i < 3; i++) {
          // score.push((b[keysSorted[i]] / sum) * 100);
          score[keysSorted[i]] = (b[keysSorted[i]] / sum) * 100;
        }
        setgenrescore(score);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken]);
  console.log(allgenre);
  return (
    <div style={{ height: "100vh" }}>
      {/* <Button
        onClick={() => {
          spotifyApi.getMyTopTracks({ limit: 20 }).then(
            function (data) {
              let topTracks = data.body.items;
              console.log(topTracks);
            },
            function (err) {
              console.log("Something went wrong!", err);
            }
          );
        }}
      >
        ooop
      </Button> */}
      {/* <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div> */}

      <Circle genrescore={genrescore} />
      <Button
        onClick={() => {
          const user = window.localStorage.getItem("usertoken");
          axios
            .put(`http://localhost:3001/api/users/${user}`, {
              userId: user,
              genre: allgenre,
              topgenre: genrescore,
            })
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Submit
      </Button>
    </div>
  );
}
export default Dashboard;
