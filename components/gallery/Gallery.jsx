import { useState, useEffect, useRef, createRef } from "react";
import css from "./styles.scss";

const minSize = 0.88;
const minOpacity = 0.5;

const LEFT_KEY = 37;
const RIGHT_KEY = 39;

const Gallery = ({ children }) => {
  const [sizes, setSizes] = useState(children.map(_ => 1));
  const [opacities, setOpacities] = useState(children.map(_ => 0));

  const [baseWidth, setBaseWidth] = useState(null);
  const [itemIndex, setItemIndex] = useState(0);

  const galleryRef = useRef();
  const itemRefs = useRef(children.map(c => createRef()));

  const items = children.map((c, i) => (
    <div key={i} ref={e => itemRefs.current[i] = e} className={css.item}
         style={{ transform: `scale(${sizes[i]})`, opacity: opacities[i] }}>

      <div className={css.inner}>{c}</div>
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

    const listener = window.addEventListener("keydown",  handleKeyDown);
    return () => window.removeEventListener(listener);
  }, []);

  const handleKeyDown = (event) => {
    if (event.keyCode == LEFT_KEY)  {
      setItemIndex(i => Math.max(i - 1, 0));
    }

    if (event.keyCode == RIGHT_KEY) {
      setItemIndex(i => Math.min(i + 1, children.length - 1));
    }
  };

  useEffect(() => {
    galleryRef.current.scrollTo(itemIndex * baseWidth, 0);
  }, [itemIndex]);

  return (
    <div ref={galleryRef} className={css.gallery} onScroll={scaleItems}>
      {items}
    </div>
  );
};

export default Gallery;
