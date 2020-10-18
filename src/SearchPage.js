import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 18 october to 30 october . 1 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/05/71/7f/11/coral-beach-hotel-resort.jpg"
        location="Queensland"
        title="Beach Hotel"
        description="Beach Hotel offers a selection of rooms including Ocean View Rooms, Premium Ocean View Rooms & Suites with views across to the Coral Sea and the islands to the north. The Village View rooms have an aspect back towards town and the hills to the west. The hotel is centrally located and the ideal base to explore all Airlie Beach and the Whitsundays has to offer."
        star="4.5"
        price="$150/Night"
        total="$500"
      />
      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/05/71/7f/11/coral-beach-hotel-resort.jpg"
        location="Queensland"
        title="Beach Hotel"
        description="Beach Hotel offers a selection of rooms including Ocean View Rooms, Premium Ocean View Rooms & Suites with views across to the Coral Sea and the islands to the north. The Village View rooms have an aspect back towards town and the hills to the west. The hotel is centrally located and the ideal base to explore all Airlie Beach and the Whitsundays has to offer."
        star="4.5"
        price="$150/Night"
        total="$500"
      />
      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/05/71/7f/11/coral-beach-hotel-resort.jpg"
        location="Queensland"
        title="Beach Hotel"
        description="Beach Hotel offers a selection of rooms including Ocean View Rooms, Premium Ocean View Rooms & Suites with views across to the Coral Sea and the islands to the north. The Village View rooms have an aspect back towards town and the hills to the west. The hotel is centrally located and the ideal base to explore all Airlie Beach and the Whitsundays has to offer."
        star="4.5"
        price="$150/Night"
        total="$500"
      />
      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/05/71/7f/11/coral-beach-hotel-resort.jpg"
        location="Queensland"
        title="Beach Hotel"
        description="Beach Hotel offers a selection of rooms including Ocean View Rooms, Premium Ocean View Rooms & Suites with views across to the Coral Sea and the islands to the north. The Village View rooms have an aspect back towards town and the hills to the west. The hotel is centrally located and the ideal base to explore all Airlie Beach and the Whitsundays has to offer."
        star="4.5"
        price="$150/Night"
        total="$500"
      />
    </div>
  );
}

export default SearchPage;
