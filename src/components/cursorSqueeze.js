import React, { useEffect } from "react";

const FancyCursor = () => {
  const updateCoordinates = (e) => {
    const cursor = document.querySelector("#cursor");
    const cursorCircle = document.querySelector(".cursor__circle");
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    const targetElement = e.target;

    if (targetElement.getAttribute("data-hover") === "true") {
      cursorCircle.classList.add("hovering");
    } else if (cursorCircle) {
      cursorCircle.classList.remove("hovering");
    }
  };

  if (typeof document !== "undefined") {
    window.addEventListener("mousemove", updateCoordinates);
  }

  const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
  const pos = { x: 0, y: 0 }; // cursor's coordinates
  const speed = 0.1; // between 0 and 1

  function getAngle(diffX, diffY) {
    return (Math.atan2(diffY, diffX) * 180) / Math.PI;
  }

  function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
  }

  const updateCursor = () => {
    const cursor = document.querySelector("#cursor");
    const cursorCircle = document.querySelector(".cursor__circle");

    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    //   gives the squeeze effect;
    const scale = "scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")";
    const rotate = "rotate(" + angle + "deg)";
    const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

    if (cursor && cursorCircle) {
      cursor.style.transform = translate;
      cursorCircle.style.transform = rotate + scale;
    }
  };

  function loop() {
    updateCursor();
    requestAnimationFrame(loop);
  }

  useEffect(() => {
    requestAnimationFrame(loop);
  }, []);

  return (
    <div id="cursor">
      <div className="cursor__circle"></div>
      <div className="h-10  aspect-square arrow-link absolute top-0 left-0 -translate-x-2/4 -translate-y-2/4 grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="upper-right-arrow"
          height="44"
          width="44"
          fill="#9c9c06a2"
        >
          <path d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z"></path>
        </svg>{" "}
      </div>
    </div>
  );
};

export default FancyCursor;
