import Layout from "../components/layout";
import Phone from "../components/phone";
import CardLayout from "../components/card_layout";
import Summary from "../components/summary";
import Gallery from "../components/gallery";
import Card from "../components/card";

const Index = () => (
  <Layout>
    <Phone>
      <CardLayout title="Build a school in Vihiga">
        <Summary>
          <h2>Project summary</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
          <button>Project contract</button>
        </Summary>

        <Gallery>
          <Card color="#12814f">
            <span className="ordinal">1 of 5</span>
            <h3>Clear the land</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
            <img src="/images/map.png" />
          </Card>

          <Card color="#fff120">
            <span className="ordinal">2 of 5</span>
            <h3>Lay the foundations</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
          </Card>

          <Card color="#a3c643">
            <span className="ordinal">3 of 5</span>
            <h3>Build the walls</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
          </Card>

          <Card color="#ff4c1f">
            <span className="ordinal">4 of 5</span>
            <h3>Put the roof on</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
          </Card>

          <Card color="#c62b9f">
            <span className="ordinal">5 of 5</span>
            <h3>Educate the children</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
          </Card>
        </Gallery>
      </CardLayout>
    </Phone>
  </Layout>
);

export default Index;
