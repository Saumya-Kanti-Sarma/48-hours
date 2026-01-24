"use client";
import Link from "next/link";
import { useState } from "react";

type ListWrapperProps = {
  heading: string;
  topics: string[];
};

const ListWrapper = ({ heading, topics }: ListWrapperProps) => {
  const LIMIT = 5;

  const [showAll, setShowAll] = useState(false);

  const visibleTopics = showAll ? topics : topics.slice(0, LIMIT);
  const showBtn = topics.length > LIMIT;

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="w-74">
      <h1 className="font-sans font-bold text-4xl">{heading}</h1>

      <ul>
        {visibleTopics.map((item) => (
          <li key={item} className="py-2">
            <Link
              href={`/${heading}/${item}`}
              className="underline-offset-4 hover:underline transition-ease-in-out font-medium font-sans text-xl"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {showBtn && (
        <div className="flex justify-end text-xs opacity-80">
          <button
            className="cursor-pointer font-sans"
            onClick={handleToggle}
          >
            {showAll ? "show less..." : "show more..."}
          </button>
        </div>
      )}
    </section>
  );
};

export default ListWrapper;
