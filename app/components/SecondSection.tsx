import React from "react";

export default function SecondSection() {
  return (
    <section className="w-full h-screen m-0 p-0 overflow-hidden relative top-0">
      <video
        src="/Secondsection.mp4"
        autoPlay
        loop
        muted
        className="m-0 p-0 w-full h-full  object-fill sm:h-screen md:h-screen lg:h-screen"  // Mudança de object-contain para object-cover
      />
    </section>
  );
}
