import Layout from "../components/layout";
import Phone from "../components/phone";
import CardLayout from "../components/card_layout";
import Gallery from "../components/gallery";
import Card from "../components/card";

const Index = () => (
  <Layout>
    <Phone>
      <CardLayout title="Lay the foundations">
        <Gallery>
          <Card>first</Card>
          <Card>second</Card>
          <Card>third</Card>
        </Gallery>
      </CardLayout>
    </Phone>
  </Layout>
);

export default Index;
