import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border [#333333] rounded-full h-48 w-48 mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-64 w-64 mt-52 " />
      <div className="absolute border border-[#333333] rounded-full h-96 w-96 mt-52 " />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[600px] w-[600px] mt-52 animate-pulse absolute" />
    </div>
  );
};

export default BackgroundCircles;
