import { useLayoutEffect, useState } from "react";
const maxItemInRow = 5; 
const maxNoOfRow = 2; 
const totalVerticalSpacing = 120;
const totalHorizontalSpacing = 80;
const footerHeight = 50;

export const useVideoCardSize = (cardCount) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      let width = calWidth(cardCount);
      let height = calHeight(cardCount);
      if(hasCardListOverflow(width)) {
        width = 0.75*height;
      } else {
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
  return (
    (window.innerWidth - totalHorizontalSpacing) /
    (cardCount >= maxItemInRow ? maxItemInRow : cardCount)
  );
}

function calHeight(cardCount) {
  return (
    (window.innerHeight - totalVerticalSpacing) /
    (cardCount >= maxItemInRow ? maxNoOfRow : 1)
  );
}

function getParticipantContainerHeight() {
  return document.getElementById('participant_lists').clientHeight
}

function hasCardListOverflow(width) {
  return maxNoOfRow*1.33*width > (window.innerHeight - (totalVerticalSpacing + footerHeight));
}