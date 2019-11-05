import { useEffect, useRef } from "react";
import Summary from "../summary";
import Gallery from "../gallery";
import Card from "../card";
import QuestionText from "../question_text";
import FreeText from "../questions/free_text";
import MultiChoice from "../questions/multi_choice";
import ExpectedValue from "../expected_value";

let c;

const GardenPath = ({ setView, cardIndex, setCardIndex, setScroll, setTitle }) => {
  const ref = useRef();

  useEffect(() => {
    setTitle(null);

    if (cardIndex > 0) {
      setScroll(ref.current.getBoundingClientRect().top);
    }

    window.onback = () => {
      setView("projects");
      setCardIndex(0);
      setScroll(0);
    };
  }, []);

  const backIndex = cardIndex + 0;

  const handleSubmit = (view, backIndex) => {
    const backScroll = ref.current.getBoundingClientRect().top;

    window.onback = () => {
      setView("garden_path");
      setCardIndex(backIndex);
      setScroll(backScroll);
      setTitle(null);
    };

    setView(view);
    setCardIndex(0);
    setScroll(0);
    setTitle({
      "garden_path_remove": "Remove old path",
      "garden_path_foundation": "Lay foundation",
      "garden_path_tiles": "Laying the tiles",
      "garden_path_ongoing": "Using the path",
    }[view]);
  }

  return <>
    <Summary>
      <h1>A path in the front garden</h1>
      <h2>Project summary</h2>
      <p>The contract states that a black and white mosaic tile pattern will be laid on a foundation made of good quality cement. The path will be 92cm wide and 212 cm long, leading from gate to doorstep. It will be smooth.</p>
      <img src="/images/map.png" />
      <button>Project contract</button>
      <button>Record an issue</button>
      <button>Issues in this project (7)</button>
    </Summary>

    <Gallery cardIndex={cardIndex}>
      <Card className="green">
        <span ref={ref} className="ordinal">1 of 4</span>
        <h3>Remove old path</h3>
        <p>As part of the contract the builder has committed to remove all the old concrete. There will be no rubbish left and you will not have to go to the tip yourself.</p>
        <button className="alt1" onClick={() => handleSubmit("garden_path_remove", 0)}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>

      <Card className="red">
        <span className="ordinal">2 of 4</span>
        <h3>Lay foundation</h3>
        <p>A common problem with builders laying foundations is that they use inferior quality cement. Sometimes they even don't use any cement and just use sand. In the long run this results in uneven paths. Another common issue is skimping on materials and making the foundation too short or too narrow.</p>
        <button className="alt1" onClick={() => handleSubmit("garden_path_foundation", 1)}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>

      <Card className="blue">
        <span className="ordinal">3 of 4</span>
        <h3>Laying the tiles</h3>
        <p>Key things to look out for during this phase is whether they are using the right tiles, how level the tiles are, and whether they cover the foundation entirely.</p>
        <button className="alt1" onClick={() => handleSubmit("garden_path_tiles", 2)}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>

      <Card className="yellow">
        <span className="ordinal">4 of 4</span>
        <h3>Using the path</h3>
        <p>Throughout the course of the first year it is good to assess from time to time how well the path is working for you.</p>
        <button className="alt1" onClick={() => handleSubmit("garden_path_ongoing", 3)}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>
    </Gallery>
  </>;
};

GardenPath.Remove = ({ setView, cardIndex, setCardIndex, setTitle }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="green">
      <span className="ordinal">1 of 3</span>
      <h3>Removal</h3>
      <QuestionText>Have all pieces of old path been removed from garden?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">2 of 3</span>
      <h3>Removal</h3>
      <QuestionText>Any comments about removal of old path?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="black">
      <span className="ordinal">3 of 3</span>
      <h3>Removal</h3>
      <QuestionText>Has this activity been completed?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => { setCardIndex(1); setView("garden_path"); }}>Submit</button>
    </Card>
  </Gallery>
);

GardenPath.Foundation = ({ setView, cardIndex, setCardIndex }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="red">
      <span className="ordinal">1 of 3</span>
      <h3>Cement</h3>
      <QuestionText>Does the cement float in water? </QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">2 of 3</span>
      <h3>Cement</h3>
      <QuestionText>Does it contain lumps?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">3 of 3</span>
      <h3>Cement</h3>
      <QuestionText>Any comments about the cement?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-2">
      <span className="ordinal">1 of 6</span>
      <h3>Sizes and position</h3>
      <QuestionText>What is the width of the foundation?</QuestionText>
      <ExpectedValue>It should be 92 centimeters wide</ExpectedValue>
      <em>You measure from the outside border to the other outside border.</em>
      <FreeText placeholder="Add a value" unit="cm" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-2">
      <span className="ordinal">2 of 6</span>
      <h3>Sizes and position</h3>
      <QuestionText>What is the length of the foundation?</QuestionText>
      <ExpectedValue>It should be 212 centimeters long</ExpectedValue>
      <FreeText placeholder="Add a value" unit="cm" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-2">
      <span className="ordinal">3 of 6</span>
      <h3>Sizes and position</h3>
      <QuestionText>Is the foundation going from gate to doorstep?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-2">
      <span className="ordinal">4 of 6</span>
      <h3>Sizes and position</h3>
      <QuestionText>Is the surface smooth?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-2">
      <span className="ordinal">5 of 6</span>
      <h3>Sizes and position</h3>
      <QuestionText>Any comments about the foundation?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="black">
      <span className="ordinal">6 of 6</span>
      <h3>Sizes and position</h3>
      <QuestionText>Has this activity been completed?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => { setCardIndex(2); setView("garden_path"); }}>Submit</button>
    </Card>

  </Gallery>
);

GardenPath.Tiles = ({ setView, cardIndex, setCardIndex }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="blue">
      <span className="ordinal">1 of 5</span>
      <h3>Tiles</h3>
      <QuestionText>Are the tiles black and white?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">2 of 5</span>
      <h3>Tiles</h3>
      <QuestionText>What is the width of the biggest tile?</QuestionText>
      <FreeText placeholder="Add a value" unit="cm" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">3 of 5</span>
      <h3>Tiles</h3>
      <QuestionText>What is the length of the biggest tile?</QuestionText>
      <FreeText placeholder="Add a value" unit="cm" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">4 of 5</span>
      <h3>Tiles</h3>
      <QuestionText>Are there any broken tiles?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">5 of 5</span>
      <h3>Tiles</h3>
      <QuestionText>Any comments about the tiles?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue-2">
      <span className="ordinal">1 of 4</span>
      <h3>Laying them</h3>
      <QuestionText>Have the tiles been laid in a mosaic pattern?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue-2">
      <span className="ordinal">2 of 4</span>
      <h3>Laying them</h3>
      <QuestionText>Do the tiles cover the foundation entirely?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue-2">
      <span className="ordinal">3 of 4</span>
      <h3>Laying them</h3>
      <QuestionText>Is the surface even?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue-2">
      <span className="ordinal">4 of 4</span>
      <h3>Laying them</h3>
      <QuestionText>Any comments about laying the tiles?</QuestionText>
      <FreeText placeholder="Add a comment" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue-3">
      <span className="ordinal">1 of 3</span>
      <h3>Tidy-up</h3>
      <QuestionText>Have all the remaining tiles been handed over?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue-3">
      <span className="ordinal">2 of 3</span>
      <h3>Tidy-up</h3>
      <QuestionText>Have all the remaining items been removed from the premises?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="black">
      <span className="ordinal">3 of 3</span>
      <h3>Tidy-up</h3>
      <QuestionText>Has this activity been completed?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => { setCardIndex(3); setView("garden_path"); }}>Submit</button>
    </Card>
  </Gallery>
);

GardenPath.Ongoing = ({ setView, cardIndex, setCardIndex }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="yellow">
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

    <Card className="yellow">
      <span className="ordinal">3 of 3</span>
      <h3>Using the path</h3>
      <QuestionText>Overall, how happy are you with the new path?</QuestionText>
      <MultiChoice choices={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <button className="alt1">Submit</button>
    </Card>
  </Gallery>
);

export default GardenPath;
