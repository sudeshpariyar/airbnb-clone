import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1171238184%2F0x0.jpg%3Ffit%3Dscale"
          title="Bucket List Travel"
          description="This is one of the most beautiful place to visit in the world."
        />
        <Card
          src="https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-mount-fuji-japan.jpg"
          title="Asia place to visit"
          description="This is the mountain located in Japan and it is one of the most visited place by tourist in japan"
        />
        <Card
          src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2020/money/thumb-(1).jpg&w=900&height=601"
          title="Traffic in Himalayas"
          description="This is picture ahowing the crowd to reach to the top of the world. This is Mount Everest Traffic jam."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://www.mantra.com.au/Portals/1/Images/homepage/home-slider-salt.jpg?ver=2018-03-20-143528-677"
          title="Mantra Hotel"
          description="Mantra Hotel located in Melbourne"
          price="$120"
        />
        <Card
          src="https://lh3.googleusercontent.com/proxy/pyiDL_lI7qdX4U58nmEBPVLLMXGzpc2hMedaRoW89ECuxPh0-AmyB1LyI85SRCpiAPsa23TA06ytovPnjbhGwykHbSZtx3yj2ApASYsy3dKl6lVYATVkGzg9VFHQaDDSI7_Gqt_3YPNmh1MVouwwyV7lZakHYKk"
          title="Belmore False"
          description="The Belmore Falls is a plunge waterfall with three drops on the Barrengarry Creek in the Southern Highlands and Illawarra regions of New South Wales, Australia."
        />
        <Card
          src="https://cdn.travelstride.com/cdn/763102/media/catalog/product/b/e/beautiful_mountain-bhutan-2691190-p_1.jpg"
          title="Paro Taktsang "
          description="Taktsang Palphug Monastery and the Tiger's Nest), is a prominent Himalayan Buddhist sacred site and temple complex located in the cliffside of the upper Paro valley in Bhutan. ..."
          price="$350"
        />
      </div>
    </div>
  );
}

export default Home;
