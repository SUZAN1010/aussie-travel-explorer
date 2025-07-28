import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import sydneyImage from "../assets/sydney.jpg";
import melbourneImage from "../assets/melbourne.jpeg";
import brisbaneImage from "../assets/brisbane.jpeg";
import perthImage from "../assets/perth.jpeg";
import adelaideImage from "../assets/adelaide.jpeg";
import hobartImage from "../assets/hobart.jpeg";
import darwinImage from "../assets/darwin.jpeg";
import canberraImage from "../assets/canberra.jpeg";

import operaHouse from "../assets/opera_house.jpeg";
import bondiBeach from "../assets/bondi_beach.jpeg";
import royalBotanic from "../assets/royal_botanic.jpg";

import federationSquare from "../assets/federation_square.jpeg";
import royalExhibition from "../assets/royal_exhibition.jpeg";

import southBank from "../assets/south_bank.jpeg";
import storyBridge from "../assets/story_bridge.jpeg";

import kingsPark from "../assets/kings_park.jpeg";
import cottesloeBeach from "../assets/cottesloe_beach.jpeg";

import adelaideZoo from "../assets/adelaide_zoo.jpeg";
import mountLofty from "../assets/mount_lofty.jpeg";

import museumTasmania from "../assets/museum_tasmania.jpeg";
import mtWellington from "../assets/mt_wellington.jpeg";

import mindilBeach from "../assets/mindil_beach.jpeg";
import kakaduPark from "../assets/kakadu_park.jpeg";

import australianWarMemorial from "../assets/war_memorial.jpeg";
import lakeBurleyGriffin from "../assets/lake_burley_griffin.jpeg";

type Destination = {
  id: string;
  title: string;
  cityName: string;
  cityId: string;
  image: string;
  description: string;
};

const cities = [
  {
    id: "sydney",
    name: "Sydney",
    image: sydneyImage,
    destinations: [
      {
        id: "opera-house",
        title: "Sydney Opera House",
        image: operaHouse,
        description: "Iconic performing arts venue.",
      },
      {
        id: "bondi-beach",
        title: "Bondi Beach",
        image: bondiBeach,
        description: "Popular surfing and sunbathing spot.",
      },
    ],
  },
  {
    id: "melbourne",
    name: "Melbourne",
    image: melbourneImage,
    destinations: [
      {
        id: "federation-square",
        title: "Federation Square",
        image: federationSquare,
        description: "Arts, events and cultural hub.",
      },
      {
        id: "royal-exhibition-building",
        title: "Royal Exhibition Building",
        image: royalExhibition,
        description: "Historic World Heritage site.",
      },
    ],
  },
  {
    id: "brisbane",
    name: "Brisbane",
    image: brisbaneImage,
    destinations: [
      {
        id: "south-bank",
        title: "South Bank Parklands",
        image: southBank,
        description: "Riverfront gardens, markets and pools.",
      },
      {
        id: "story-bridge",
        title: "Story Bridge",
        image: storyBridge,
        description: "Iconic steel cantilever bridge.",
      },
    ],
  },
  {
    id: "perth",
    name: "Perth",
    image: perthImage,
    destinations: [
      {
        id: "kings-park",
        title: "Kings Park",
        image: kingsPark,
        description: "Huge park with city views.",
      },
      {
        id: "cottesloe-beach",
        title: "Cottesloe Beach",
        image: cottesloeBeach,
        description: "Popular beach for swimming and sunset watching.",
      },
    ],
  },
  {
    id: "adelaide",
    name: "Adelaide",
    image: adelaideImage,
    destinations: [
      {
        id: "adelaide-zoo",
        title: "Adelaide Zoo",
        image: adelaideZoo,
        description: "Famous zoo with pandas and native animals.",
      },
      {
        id: "mount-lofty",
        title: "Mount Lofty",
        image: mountLofty,
        description: "Scenic lookout point with gardens.",
      },
    ],
  },
  {
    id: "hobart",
    name: "Hobart",
    image: hobartImage,
    destinations: [
      {
        id: "museum-tasmania",
        title: "Museum of Tasmania",
        image: museumTasmania,
        description: "Learn about Tasmania's history and wildlife.",
      },
      {
        id: "mt-wellington",
        title: "Mount Wellington",
        image: mtWellington,
        description: "Mountain with panoramic views.",
      },
    ],
  },
  {
    id: "darwin",
    name: "Darwin",
    image: darwinImage,
    destinations: [
      {
        id: "mindil-beach",
        title: "Mindil Beach",
        image: mindilBeach,
        description: "Famous for markets and sunsets.",
      },
      {
        id: "kakadu-park",
        title: "Kakadu National Park",
        image: kakaduPark,
        description: "UNESCO World Heritage wilderness area.",
      },
    ],
  },
  {
    id: "canberra",
    name: "Canberra",
    image: canberraImage,
    destinations: [
      {
        id: "war-memorial",
        title: "Australian War Memorial",
        image: australianWarMemorial,
        description: "Tribute to Australia's military history.",
      },
      {
        id: "lake-burley-griffin",
        title: "Lake Burley Griffin",
        image: lakeBurleyGriffin,
        description: "Scenic lake with walking trails.",
      },
    ],
  },
];

const TravelListings = () => {
  // Flatten all destinations into one array with city info
  const allDestinations: Destination[] = useMemo(() => {
    return cities.flatMap((city) =>
      city.destinations.map((dest) => ({
        ...dest,
        cityName: city.name,
        cityId: city.id,
      }))
    );
  }, []);

  // State for filtering and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCity, setFilterCity] = useState("All");
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");

  // Unique city names for filter dropdown
  const cityOptions = ["All", ...cities.map((c) => c.name)];

  // Filter and sort destinations
  const filteredDestinations = allDestinations
    .filter((dest) => {
      const matchesCity = filterCity === "All" || dest.cityName === filterCity;
      const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCity && matchesSearch;
    })
    .sort((a, b) =>
      sortOrder === "az" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );

  return (
    <>
      <Header />
      <div style={{ padding: 32, fontFamily: "sans-serif", maxWidth: 1000, margin: "auto" }}>
        <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 24 }}>
          Explore Destinations
        </h1>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 14px",
            fontSize: 16,
            border: "1px solid #ddd",
            borderRadius: 8,
            marginBottom: 16,
          }}
        />

        {/* Filter and sort */}
        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <select
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            style={{
              flex: 1,
              padding: "10px 14px",
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            {cityOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "az" | "za")}
            style={{
              flex: 1,
              padding: "10px 14px",
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            <option value="az">Sort A - Z</option>
            <option value="za">Sort Z - A</option>
          </select>
        </div>

        {/* Destination cards */}
        {filteredDestinations.length === 0 ? (
          <p>No destinations found.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                  cursor: "default",
                  transition: "transform 0.2s ease",
                }}
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  style={{ width: "100%", height: 180, objectFit: "cover" }}
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ marginBottom: 6 }}>{dest.title}</h3>
                  <p style={{ fontSize: 14, fontWeight: "bold", color: "#2563eb" }}>
                    {dest.cityName}
                  </p>
                  <p style={{ fontSize: 14, color: "#374151" }}>{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TravelListings;
