import Layout from "../components/layout";
import Phone from "../components/phone";
import CardLayout from "../components/card_layout";
import Summary from "../components/summary";
import Gallery from "../components/gallery";
import Card from "../components/card";
import FreeText from "../components/questions/free_text";
import MultiChoice from "../components/questions/multi_choice";
import QuestionText from "../components/question_text";
import ExpectedValue from "../components/expected_value";

const Index = () => (
  <Layout>
    <Phone>
      <CardLayout>
        <Summary className="red">
          <h1>Build a school in Vihiga</h1>
          <h2>Project summary</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
          <button>Project contract</button>
          <button>Record an issue</button>
          <button>Issues in this project (7)</button>
        </Summary>

        <Gallery>
          <Card className="red">
            <span className="ordinal">1 of 5</span>
            <h3>Clear the land</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
            <img src="/images/map.png" />
            <button className="alt1">Update progress</button>
            <button>Record an issue</button>
          </Card>

          <Card className="green">
            <span className="ordinal">2 of 5</span>
            <h3>Lay the foundations</h3>
            <QuestionText>Are the foundations laid?</QuestionText>
            <MultiChoice choices={["Yes", "No", "Not sure"]} />
            <button className="alt1">Submit</button>
          </Card>

          <Card className="blue">
            <span className="ordinal">3 of 5</span>
            <h3>Build the walls</h3>
            <QuestionText>What is the length of the walls?</QuestionText>
            <ExpectedValue>They should be 5 metres wide</ExpectedValue>
            <FreeText placeholder="Add a value" unit="metres" />
            <button className="alt1">Submit</button>
          </Card>

          <Card className="yellow">
            <span className="ordinal">4 of 5</span>
            <h3>Put the roof on</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
            <img src="/images/map.png" />
            <button className="alt1">Update progress</button>
            <button>Record an issue</button>
          </Card>

          <Card className="purple">
            <span className="ordinal">5 of 5</span>
            <h3>Educate the children</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
            <img src="/images/map.png" />
            <button className="alt1">Update progress</button>
            <button>Record an issue</button>
          </Card>
        </Gallery>
      </CardLayout>
    </Phone>
  </Layout>
);

export default Index;
