"use client";
import React, { useEffect, useRef, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const skills = [
  {
    title: "Market Analysis",
    description: "Lorem ipsum dolor sit amet.",
    percent: 100,
  },
  {
    title: "Optimization",
    description: "Lorem ipsum dolor sit amet.",
    percent: 90,
  },
  {
    title: "Integration",
    description: "Lorem ipsum dolor sit amet.",
    percent: 80,
  },
  {
    title: "Development",
    description: "Lorem ipsum dolor sit amet.",
    percent: 70,
  },
];

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="bg-background max-w-5xl mx-auto my-16 lg:my-24 px-4"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-black">Our Skills</h2>
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            percent={skill.percent}
          />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ title, description, percent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    damping: 50,
    stiffness: 50,
  });

  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    if (inView) {
      progress.set(percent);
    }
  }, [inView, percent, progress]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setDisplayPercent(Math.round(latest));
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 bg-background border border-black rounded-lg shadow hover:shadow-lg transition"
    >
      <div className="w-24 h-24 mb-4">
        <svg height="0">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#f9ce34" }} />
              <stop offset="50%" style={{ stopColor: "#ee2a7b" }} />
              <stop offset="100%" style={{ stopColor: "#6228d7" }} />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgressbar
          value={displayPercent}
          text={`${displayPercent}%`}
          styles={buildStyles({
            pathColor: "url(#gradient1)",
            textColor: "#ee2a7b",
            trailColor: "#fffc00",
            textSize: "24px",
          })}
        />
      </div>
      <h3 className="text-xl text-black mb-2">{title}</h3>
    </div>
  );
}
