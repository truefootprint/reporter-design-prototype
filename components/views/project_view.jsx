import Gallery from "../gallery";
import Card from "../card";

const ProjectView = ({ setView }) => (
  <Gallery>
    <Card className="green" onClick={() => setView("garden_path")}>
      <span className="ordinal">1 of 2</span>
      <h3>A new path in the front garden</h3>
    </Card>

    <Card className="yellow">
      <span className="ordinal">2 of 2</span>
      <h3>Another project</h3>
    </Card>
  </Gallery>
);

export default ProjectView;
