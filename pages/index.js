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
          <Card>first</Card>
          <Card>second</Card>
          <Card>third</Card>
          <Card>fourth</Card>
          <Card>fifth</Card>
        </Gallery>
      </CardLayout>
    </Phone>
  </Layout>
);

export default Index;
