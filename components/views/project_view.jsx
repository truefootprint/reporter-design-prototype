import { useEffect } from "react";
import Gallery from "../gallery";
import Card from "../card";

const ProjectView = ({ setView, setTitle }) => {
  useEffect(() => setTitle(null), []);

  return (
    <Gallery>
      <Card className="green" onClick={() => setView("garden_path")}>
        <span className="ordinal">1 of 2</span>
        <h3>A path in the front garden</h3>
        <img src="/images/garden_path.jpg" />
      </Card>

      <Card className="red" onClick={() => setView("fred")}>
        <span className="ordinal">2 of 2</span>
        <h3>Looking after Fred</h3>
        <img src="/images/baby.png" />
      </Card>
    </Gallery>
  );
};

export default ProjectView;
