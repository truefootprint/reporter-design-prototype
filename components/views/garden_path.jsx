import { useEffect, useRef } from "react";
import Summary from "../summary";
import Gallery from "../gallery";
import Card from "../card";
import QuestionText from "../question_text";
import FreeText from "../questions/free_text";
import MultiChoice from "../questions/multi_choice";
import ExpectedValue from "../expected_value";

let c;

const GardenPath = ({ setView, cardIndex, setCardIndex, setScroll }) => {
  const ref = useRef();

  useEffect(() => {
    if (cardIndex > 0) {
      setScroll(ref.current.getBoundingClientRect().top);
    }
  }, []);

  const handleSubmit = (view) => {
    setView(view);
    setCardIndex(0);
    setScroll(0);
  }

  return <>
    <Summary className="green">
      <h1>A new path in the front garden</h1>
      <h2>Project summary</h2>
      <p>The contract states that a black and white mosaic tile pattern will be laid on a foundation made of good quality cement. The path will be 92cm wide and 212 cm long, leading from gate to doorstep. It will be smooth. The actual contract can be read here....</p>
      <button>Project contract</button>
      <button>Record an issue</button>
      <button>Issues in this project (7)</button>
    </Summary>

    <Gallery cardIndex={cardIndex}>
      <Card className="green">
        <span ref={ref} className="ordinal">1 of 4</span>
        <h3>Remove old path</h3>
        <button className="alt1" onClick={() => handleSubmit("garden_path_remove")}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>

      <Card className="yellow">
        <span className="ordinal">2 of 4</span>
        <h3>Lay foundation</h3>
        <button className="alt1" onClick={() => handleSubmit("garden_path_foundation")}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>

      <Card className="blue">
        <span className="ordinal">3 of 4</span>
        <h3>Laying the tiles</h3>
        <button className="alt1" onClick={() => handleSubmit("garden_path_tiles")}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>

      <Card className="purple">
        <span className="ordinal">4 of 4</span>
        <h3>Using the path</h3>
        <button className="alt1" onClick={() => handleSubmit("garden_path_ongoing")}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>
    </Gallery>
  </>;
};

GardenPath.Remove = ({ setView, cardIndex, setCardIndex }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="green">
      <span className="ordinal">1 of 3</span>
      <h3>Remove old path</h3>
      <QuestionText>Have all pieces of old path been removed from garden?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="yellow">
      <span className="ordinal">2 of 3</span>
      <h3>Remove old path</h3>
      <QuestionText>Any comments about removal of old path?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="black">
      <span className="ordinal">3 of 3</span>
      <h3>Remove old path</h3>
      <QuestionText>Has this activity been completed?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => { setCardIndex(1); setView("garden_path"); }}>Submit</button>
    </Card>
  </Gallery>
);

GardenPath.Foundation = ({ setView, cardIndex, setCardIndex }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="green">
      <span className="ordinal">1 of 9</span>
      <h3>Lay foundation</h3>
      <QuestionText>Does the cement float in water? </QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="yellow">
      <span className="ordinal">2 of 9</span>
      <h3>Lay foundation</h3>
      <QuestionText>Does it contain lumps?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">3 of 9</span>
      <h3>Lay foundation</h3>
      <QuestionText>Any comments about the cement?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">4 of 9</span>
      <h3>Lay foundation</h3>
      <QuestionText>What is the width of the foundation?</QuestionText>
      <ExpectedValue>It should be 92 centimeters wide</ExpectedValue>
      <FreeText placeholder="Add a value" unit="cm" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="purple">
      <span className="ordinal">5 of 9</span>
      <h3>Lay foundation</h3>
      <QuestionText>What is the length of the foundation?</QuestionText>
      <ExpectedValue>It should be 212 centimeters long</ExpectedValue>
      <FreeText placeholder="Add a value" unit="cm" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">6 of 9</span>
      <h3>Lay foundation</h3>
      <QuestionText>Is the foundation going from gate to doorstep?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="yellow">
      <span className="ordinal">7 of 9</span>
      <h3>Lay foundation</h3>
      <QuestionText>Is the surface smooth?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">8 of 9</span>
      <h3>Remove old path</h3>
      <QuestionText>Any comments about the foundation?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="black">
      <span className="ordinal">9 of 9</span>
      <h3>Lay foundation</h3>
      <QuestionText>Has this activity been completed?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => { setCardIndex(2); setView("garden_path"); }}>Submit</button>
    </Card>

  </Gallery>
);

GardenPath.Tiles = ({ setView, cardIndex, setCardIndex }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="green">
      <span className="ordinal">1 of 12</span>
      <h3>Laying the tiles</h3>
      <QuestionText>Are the tiles black and white?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="yellow">
      <span className="ordinal">2 of 12</span>
      <h3>Laying the tiles</h3>
      <QuestionText>What is the width of the biggest tile?</QuestionText>
      <FreeText placeholder="Add a value" unit="cm" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">3 of 12</span>
      <h3>Laying the tiles</h3>
      <QuestionText>What is the length of the biggest tile?</QuestionText>
      <FreeText placeholder="Add a value" unit="cm" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">4 of 12</span>
      <h3>Laying the tiles</h3>
      <QuestionText>Are there any broken tiles?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="purple">
      <span className="ordinal">5 of 12</span>
      <h3>Remove old path</h3>
      <QuestionText>Any comments about the tiles?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">6 of 12</span>
      <h3>Laying the tiles</h3>
      <QuestionText>Have the tiles been laid in a mosaic pattern?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="yellow">
      <span className="ordinal">7 of 12</span>
      <h3>Laying the tiles</h3>
      <QuestionText>Do the tiles cover the foundation entirely?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">8 of 12</span>
      <h3>Laying the tiles</h3>
      <QuestionText>Is the surface even?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">9 of 12</span>
      <h3>Remove old path</h3>
      <QuestionText>Any comments about laying the tiles?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="purple">
      <span className="ordinal">10 of 12</span>
      <h3>Remove old path</h3>
      <QuestionText>Have all the remaining tiles been handed over?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">11 of 12</span>
      <h3>Remove old path</h3>
      <QuestionText>Have all the remaining items been removed from the premises?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="black">
      <span className="ordinal">12 of 12</span>
      <h3>Lay foundation</h3>
      <QuestionText>Has this activity been completed?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => { setCardIndex(3); setView("garden_path"); }}>Submit</button>
    </Card>
  </Gallery>
);

GardenPath.Ongoing = ({ setView, cardIndex, setCardIndex }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="green">
      <span className="ordinal">1 of 3</span>
      <h3>Using the path</h3>
      <QuestionText>Does the new path look good?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="yellow">
      <span className="ordinal">2 of 3</span>
      <h3>Using the path</h3>
      <QuestionText>Is the new path slippery in the rain?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">3 of 3</span>
      <h3>Using the path</h3>
      <QuestionText>Overall, how happy are you with the new path?</QuestionText>
      <MultiChoice choices={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <button className="alt1">Submit</button>
    </Card>
  </Gallery>
);

export default GardenPath;
