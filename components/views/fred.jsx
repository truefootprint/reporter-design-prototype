import { useEffect, useRef } from "react";
import Summary from "../summary";
import Gallery from "../gallery";
import Card from "../card";
import QuestionText from "../question_text";
import FreeText from "../questions/free_text";
import MultiChoice from "../questions/multi_choice";
import ExpectedValue from "../expected_value";

let c;

const Fred = ({ setView, cardIndex, setCardIndex, setScroll, setTitle }) => {
  const ref = useRef();

  useEffect(() => {
    setTitle(null);

    if (cardIndex > 0) {
      setScroll(ref.current.getBoundingClientRect().top);
    }

    window.onback = () => {
      setView("projects");
      setCardIndex(1);
      setScroll(0);
    };
  }, []);

  const backIndex = cardIndex + 0;

  const handleSubmit = (view, backIndex) => {
    const backScroll = ref.current.getBoundingClientRect().top;

    window.onback = () => {
      setView("fred");
      setCardIndex(backIndex);
      setScroll(backScroll);
      setTitle(null);
    };

    setView(view);
    setCardIndex(0);
    setScroll(0);
    setTitle({
      "fred_dinner": "Dinner time",
      "fred_bath": "Bath time",
      "fred_play": "Play time",
    }[view]);
  }

  return <>
    <Summary>
      <h1>Looking after Fred</h1>
      <h2>Project summary</h2>
      <p>Project summary text</p>
      <button>Project contract</button>
      <button>Record an issue</button>
      <button>Issues in this project (7)</button>
    </Summary>

    <Gallery cardIndex={cardIndex}>
      <Card className="green">
        <span ref={ref} className="ordinal">1 of 3</span>
        <h3>Dinner time</h3>
        <button className="alt1" onClick={() => handleSubmit("fred_dinner", 0)}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>

      <Card className="red">
        <span className="ordinal">2 of 3</span>
        <h3>Bath time</h3>
        <button className="alt1" onClick={() => handleSubmit("fred_bath", 1)}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>

      <Card className="blue">
        <span className="ordinal">3 of 3</span>
        <h3>Play time</h3>
        <button className="alt1" onClick={() => handleSubmit("fred_play", 2)}>
          Update progress
        </button>
        <button>Record an issue</button>
      </Card>
    </Gallery>
  </>;
};

Fred.Dinner = ({ setView, cardIndex, setCardIndex, setTitle }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="green">
      <span className="ordinal">1 of 3</span>
      <h3>Decide what to make for dinner</h3>
      <QuestionText>Has Fred eaten all food groups today?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">2 of 3</span>
      <h3>Decide what to make for dinner</h3>
      <QuestionText>Has Fred had at least 3 portions of fruit and vegetables today?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">3 of 3</span>
      <h3>Decide what to make for dinner</h3>
      <QuestionText>Is Fred in a fussy mood?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green-2">
      <span className="ordinal">1 of 3</span>
      <h3>Gather ingredients</h3>
      <QuestionText>What do we have in the fridge?</QuestionText>
      <FreeText placeholder="Add ingredients" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green-2">
      <span className="ordinal">2 of 3</span>
      <h3>Gather ingredients</h3>
      <QuestionText>What do we have in the freezer?</QuestionText>
      <FreeText placeholder="Add ingredients" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green-2">
      <span className="ordinal">3 of 3</span>
      <h3>Gather ingredients</h3>
      <QuestionText>Have we got leftovers?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green-3">
      <span className="ordinal">1 of 2</span>
      <h3>Cook dinner</h3>
      <QuestionText>Is the frying pan clean?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green-3">
      <span className="ordinal">2 of 2</span>
      <h3>Cook dinner</h3>
      <QuestionText>How much salt is added?</QuestionText>
      <em>There should be no salt added to Fred’s food</em>
      <FreeText placeholder="Add a value" unit="grams" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green-4">
      <span className="ordinal">1 of 2</span>
      <h3>Chase down Fred</h3>
      <QuestionText>Where is Fred?</QuestionText>
      <FreeText placeholder="Add a place" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green-4">
      <span className="ordinal">2 of 2</span>
      <h3>Chase down Fred</h3>
      <QuestionText>Is the highchair clean?</QuestionText>
      <em>The highchair should have been cleaned after the last meal</em>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">1 of 7</span>
      <h3>Sit Fred in highchair and feed him</h3>
      <QuestionText>Is Fred clipped in?</QuestionText>
      <em>Fred should be clipped in now because he keeps standing up in the highchair</em>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">2 of 7</span>
      <h3>Sit Fred in highchair and feed him</h3>
      <QuestionText>Does Fred’s mum reprimand him for throwing food on the floor?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">3 of 7</span>
      <h3>Sit Fred in highchair and feed him</h3>
      <QuestionText>How much does Fred eat?</QuestionText>
      <MultiChoice choices={["All of it", "Some of it", "None of it"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">4 of 7</span>
      <h3>Sit Fred in highchair and feed him</h3>
      <QuestionText>Has Fred had some water?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">5 of 7</span>
      <h3>Sit Fred in highchair and feed him</h3>
      <QuestionText>Has Fred’s mum persuaded him to have more?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="green">
      <span className="ordinal">6 of 7</span>
      <h3>Sit Fred in highchair and feed him</h3>
      <QuestionText>Has Fred’s mum cleaned him with a wet wipe after he has eaten?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="black">
      <span className="ordinal">7 of 7</span>
      <h3>Sit Fred in highchair and feed him</h3>
      <QuestionText>Has this activity been completed?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => { setCardIndex(1); setView("fred"); }}>Submit</button>
    </Card>
  </Gallery>
);

Fred.Bath = ({ setView, cardIndex, setCardIndex }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="red">
      <span className="ordinal">1 of 2</span>
      <h3>Run the bath</h3>
      <QuestionText>Have the taps been turned on?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">2 of 2</span>
      <h3>Run the bath</h3>
      <QuestionText>Has the plug been put in?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-2">
      <span className="ordinal">1 of 1</span>
      <h3>Check the temperature</h3>
      <QuestionText>Is the temperature below 38 degrees?</QuestionText>
      <em>The water should be below 38 degrees centigrade.</em>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-3">
      <span className="ordinal">1 of 2</span>
      <h3>Find the bath toys</h3>
      <QuestionText>Where are the bath toys?</QuestionText>
      <FreeText placeholder="Add a place" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-3">
      <span className="ordinal">2 of 2</span>
      <h3>Find the bath toys</h3>
      <QuestionText>Which bath toys does Fred want today?</QuestionText>
      <FreeText placeholder="Add toys" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-4">
      <span className="ordinal">1 of 2</span>
      <h3>Undress Fred</h3>
      <QuestionText>Are his buttons undone before the top is pulled over his head?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-4">
      <span className="ordinal">2 of 2</span>
      <h3>Undress Fred</h3>
      <QuestionText>Can the clothes be worn another day?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">1 of 5</span>
      <h3>Wash Fred</h3>
      <QuestionText>Do you know where the flannel is?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">2 of 5</span>
      <h3>Wash Fred</h3>
      <QuestionText>Do you know where the toothbrush is?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">3 of 5</span>
      <h3>Wash Fred</h3>
      <QuestionText>Is Fred’s skin clean?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">4 of 5</span>
      <h3>Wash Fred</h3>
      <QuestionText>Are Fred’s teeth clean?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red">
      <span className="ordinal">5 of 5</span>
      <h3>Wash Fred</h3>
      <QuestionText>Is Fred standing up in the bath?</QuestionText>
      <em>Fred should remain seated in the bath</em>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-2">
      <span className="ordinal">1 of 1</span>
      <h3>Dry Fred</h3>
      <QuestionText>Do you know where Fred’s towel is?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-3">
      <span className="ordinal">1 of 4</span>
      <h3>Dress Fred in warm, clean pyjamas</h3>
      <QuestionText>Has Fred got a clean nappy on?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-3">
      <span className="ordinal">2 of 4</span>
      <h3>Dress Fred in warm, clean pyjamas</h3>
      <QuestionText>Do you know where his pyjamas are?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="red-3">
      <span className="ordinal">3 of 4</span>
      <h3>Dress Fred in warm, clean pyjamas</h3>
      <QuestionText>Does Fred need distraction when getting dressed?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="black">
      <span className="ordinal">4 of 4</span>
      <h3>Dress Fred in warm, clean pyjamas</h3>
      <QuestionText>Has this activity been completed?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => { setCardIndex(2); setView("fred"); }}>Submit</button>
    </Card>
  </Gallery>
);

Fred.Play = ({ setView, cardIndex, setCardIndex }) => (
  <Gallery channel={c={}} cardIndex={cardIndex}>
    <Card className="blue">
      <span className="ordinal">1 of 2</span>
      <h3>Lay out toys and books</h3>
      <QuestionText>Which toys and books are already out?</QuestionText>
      <FreeText placeholder="Add items" />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue">
      <span className="ordinal">2 of 2</span>
      <h3>Lay out toys and books</h3>
      <QuestionText>Where will you play?</QuestionText>
      <MultiChoice choices={["Living room", "Fred’s room"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue-2">
      <span className="ordinal">1 of 3</span>
      <h3>Make Fred laugh</h3>
      <QuestionText>Is Fred having fun?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue-2">
      <span className="ordinal">2 of 3</span>
      <h3>Make Fred laugh</h3>
      <QuestionText>Is he enjoying reading or playing more?</QuestionText>
      <MultiChoice choices={["Reading books", "Playing with toys"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>

    <Card className="blue-2">
      <span className="ordinal">3 of 3</span>
      <h3>Make Fred laugh</h3>
      <QuestionText>Is Fred playing independently?</QuestionText>
      <MultiChoice choices={["Yes", "No", "Not sure"]} />
      <button className="alt1" onClick={() => c.next()}>Submit</button>
    </Card>
  </Gallery>
);

export default Fred;
