import React from "react";
import { motion } from "framer-motion";

const Wrapper = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

const AnimatedText = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      // color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      // color: "#FF0088",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
    <Tag className=" lg:text-[8rem] lg:pt-52 md:text-[6rem] text-5xl pt-3 mt-44 lg:pl-32 lg:mt-0 md:mt-[20rem] md:ml-10 pl-1">
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <motion.span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                  className=""
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </motion.span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedText;
