import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import { LeftMenu } from "./Components/LeftMenu";

import MainContainer from "./Components/MainContainer";
import Search from "./Components/Search";
import Artist from "./Components/Artist";
import AudioPlayer from "./Components/Albums";
import Liked from "./Components/Liked";
import { Songs } from "./Components/Songs";
import Library from "./design/Library";
import { PlayList } from "./Components/PlayList";

function UserRoutes() {
  return (
    <div className="App">
      <LeftMenu />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/albums" element={<AudioPlayer tracks={Songs} />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
      <div className="background"></div>
    </div>
  );
}
export default UserRoutes;
