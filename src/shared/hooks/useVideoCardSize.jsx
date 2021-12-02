import { useLayoutEffect, useState } from "react";

export const useVideoCardSize = (cardCount) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      let width, height; 
      if(isCardOverflowing()) {
        height = calHeight(cardCount);
        width = 0.75*height;
      } else {
        width = calWidth(cardCount);
        height = 1.33*width;
      }
      setSize([width, height]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

function calWidth(cardCount) {
  const totalHorizontalSpacing = 90;
  return (
    (window.innerWidth - totalHorizontalSpacing) /
    (cardCount >= 5 ? 5 : cardCount)
  );
}

function calHeight(cardCount) {
  const totalVerticalSpacing = 120;
  return (
    (window.innerHeight - totalVerticalSpacing) /
    (cardCount >= 5 ? 2 : 1)
  );
}

function getParticipantContainerHeight() {
  return document.getElementById('participant_lists').clientHeight
}

function isCardOverflowing() {
  const totalVerticalSpacing = 80;
  const footerHeight = 50;
  return getParticipantContainerHeight() > (window.innerHeight - (totalVerticalSpacing + footerHeight));

}
