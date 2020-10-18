import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import Search from "./Search";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variat="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Go near</h1>
        <h5>
          Settle in somewhere new. Discover nearby stays to live, work or just
          relax.
        </h5>
        <Button onClick={() => history.push("/search")} vaariant="outlined">
          ExploreNearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
