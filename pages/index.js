import { useState } from "react";
import Layout from "../components/layout";
import Phone from "../components/phone";
import CardLayout from "../components/card_layout";
import Summary from "../components/summary";

import ProjectView from "../components/views/project_view";
import GardenPath from "../components/views/garden_path";

const Index = () => {
  const [view, setView] = useState("projects");
  const [cardIndex, setCardIndex] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [title, setTitle] = useState(null);

  const props = { setView, cardIndex, setCardIndex, setScroll, setTitle };

  return (
    <Layout>
      <Phone>
        <CardLayout scroll={scroll} title={title}>
          { view === "projects"               && <ProjectView {...props} /> }

          { view === "garden_path"            && <GardenPath {...props} /> }
          { view === "garden_path_remove"     && <GardenPath.Remove {...props} /> }
          { view === "garden_path_foundation" && <GardenPath.Foundation {...props} /> }
          { view === "garden_path_tiles"      && <GardenPath.Tiles {...props} /> }
          { view === "garden_path_ongoing"    && <GardenPath.Ongoing {...props} /> }
        </CardLayout>
      </Phone>
    </Layout>
  );
};

export default Index;
