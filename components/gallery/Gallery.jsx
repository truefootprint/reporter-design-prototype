import { useState, useEffect, useRef, createRef } from "react";
import smoothscroll from "smoothscroll-polyfill";
import css from "./styles.scss";

const minSize = 0.88;
const minOpacity = 0.7;

const LEFT_KEY = 37;
const RIGHT_KEY = 39;

const Gallery = ({ children, channel={}, cardIndex=0 }) => {
  const [sizes, setSizes] = useState(children.map(_ => 1));
  const [opacities, setOpacities] = useState(children.map(_ => 0));

  const [baseWidth, setBaseWidth] = useState(null);
  const [itemIndex, setItemIndex] = useState(cardIndex);

  const galleryRef = useRef();
  const itemRefs = useRef(children.map(c => createRef()));

  const items = children.map((child, i) => (
    <div key={i} ref={e => itemRefs.current[i] = e} className={css.item}
         style={{ transform: `scale(${sizes[i]})`, opacity: opacities[i] }}>

      <div className={css.inner}>
        {child}
      </div>
    </div>
  ));

  const scaleItems = () => {
    const ratios = children.map((_, i) => {
      const itemRect = itemRefs.current[i].getBoundingClientRect();
      const galleryRect = galleryRef.current.getBoundingClientRect();

      const itemLeft = itemRect.x;
      const itemRight = itemRect.x + itemRect.width;
      const itemWidth = itemRect.width;

      const galleryLeft = galleryRect.x;
      const galleryWidth = galleryRect.width;

      const visibleFrom = Math.max(itemLeft - galleryLeft, 0);
      const visibleUntil = Math.min(itemRight - galleryLeft, galleryWidth);

      const visibleWidth = Math.max(visibleUntil - visibleFrom, 0);

      return visibleWidth / itemWidth;
    });

    setSizes(ratios.map(r => minSize + (1 - minSize) * r));
    setOpacities(ratios.map(r => minOpacity + (1 - minOpacity) * r));
  };

  useEffect(scaleItems, []);

  useEffect(() => {
    const itemRect = itemRefs.current[0].getBoundingClientRect();
    setBaseWidth(itemRect.width);

    smoothscroll.polyfill();

    const listener = window.addEventListener("keydown",  (event) => {
      if (event.keyCode === LEFT_KEY) left();
      if (event.keyCode === RIGHT_KEY) right();
    });

    // https://github.com/hammerjs/hammer.js/issues/1065#issuecomment-285855090
    const hammer = new Hammer.Manager(galleryRef.current, {
      touchAction: 'auto',
      inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
      recognizers: [
        [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]
      ]
    });

    hammer.on("swipe", (event) => {
      if (event.direction === Hammer.DIRECTION_RIGHT) left();
      if (event.direction === Hammer.DIRECTION_LEFT) right();
    });

    // TODO: unbind swipe listener

    return () => window.removeEventListener("keydown", listener);
  }, []);

  const left = () => setItemIndex(i => Math.max(i - 1, 0));
  const right = () => setItemIndex(i => Math.min(i + 1, children.length - 1));

  channel.next = right;

  useEffect(() => {
    galleryRef.current.scroll({ left: itemIndex * baseWidth, behavior: "smooth" });
  }, [itemIndex]);

  useEffect(() => {
    galleryRef.current.scroll({ left: itemIndex * baseWidth, behavior: "smooth" });
  }, [baseWidth]);

  return (
    <div ref={galleryRef} className={css.gallery} onScroll={scaleItems}>
      {items}
    </div>
  );
};

export default Gallery;
