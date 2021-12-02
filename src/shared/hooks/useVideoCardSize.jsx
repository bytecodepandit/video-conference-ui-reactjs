import { useLayoutEffect, useState } from "react";
import { FOOTER_HEIGHT, MAX_ITEM_IN_ROW , MAX_NO_OF_ROW} from "../../app.config";
const totalVerticalSpacing = 120;
const totalHorizontalSpacing = 80;

export const useVideoCardSize = (cardCount) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      let width = calWidth(cardCount);
      let height = calHeight(cardCount);
      if (hasCardListOverflow(width)) {
        width = 0.75 * height;
      } else {
        height = 1.33 * width;
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
    (cardCount >= MAX_ITEM_IN_ROW ? MAX_ITEM_IN_ROW : cardCount)
  );
}

function calHeight(cardCount) {
  return (
    (window.innerHeight - totalVerticalSpacing) /
    (cardCount >= MAX_ITEM_IN_ROW ? MAX_NO_OF_ROW : 1)
  );
}

function getParticipantContainerHeight() {
  return document.getElementById("participant_lists").clientHeight;
}

function hasCardListOverflow(width) {
  return (
    MAX_NO_OF_ROW * 1.33 * width >
    window.innerHeight - (totalVerticalSpacing + FOOTER_HEIGHT)
  );
}
