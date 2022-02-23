import React, { useState, useEffect } from "react";
import Left from "../icons/Left";
import Right from "../icons/Right";
import Image from "./Image";
import { CarouselProps, ImageArray } from "../types";

export default function Carousel({ images, delay = 2000 }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);
  const [newImages, setNewImages] = useState<ImageArray>(
    images.map((img) => {
      return {
        src: img,
        classess: "item",
      };
    })
  );
  //click handlers
  const next = () => {
    setNext(current + 1, "next");
  };
  const prev = () => {
    setNext(current - 1, "prev");
  };
  const handleDotClick = (index: number) => {
    let dir = index > current ? "next" : "prev";

    setNext(index, dir);
  };

  //get the newIndex to set and the direction of the animation.
  const setNext = (newIndex: number, dir = "next") => {
    let newCurrent = newIndex;
    if (newCurrent < 0) newCurrent = images.length - 1;
    if (newCurrent >= images.length) newCurrent = 0;
    //modify array of images with the classnames.
    setNewImages(
      newImages.map((img, index) => {
        let newClassess = img.classess;
        if (dir === "next") {
          if (index === newCurrent) newClassess += " enter-r";
          if (index === current) newClassess += " leave-l";
        } else {
          if (index === newCurrent) newClassess += " enter-l";
          if (index === current) newClassess += " leave-r";
        }
        return {
          ...img,
          classess: newClassess,
        };
      })
    );
    //sets a timer to delete the classess of animations
    setTimeout(() => {
      setNewImages(
        newImages.map((img, index) => {
          let newClassess = "item";
          return {
            ...img,
            classess: newClassess,
          };
        })
      );
    }, 500);
    setCurrent(newCurrent);
  };

  useEffect(() => {
    //sets an interval to autoplay the carousel
    const interval = setInterval(() => {
      setNext(current + 1, "next");
    }, delay);

    return () => clearInterval(interval);
  });
  return (
    <div className="carousel">
      {newImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          active={index === current}
          classess={image.classess}
        />
      ))}
      <button onClick={prev} className="left">
        <Left size={60} />
      </button>
      <button onClick={next} className="right">
        <Right size={60} />
      </button>
      <div className="dots">
        {newImages.map((item, index) => {
          return (
            <button
              className={`dot ${index === current ? "active-dot" : ""}`}
              onClick={() => handleDotClick(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
