import type { NextPage } from "next";
import Image from "next/image";

import styles from "./styles.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const FAQAccordion: NextPage<{
  key: number;
  question: string;
  answer: string;
  color: string;
}> = ({ key, question, answer, color }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={`${styles.borderRow} ${color} w-11/12 lg:w-full container mx-auto py-3 px-3`}
      key={key}
    >
      <div className=" flex flex-row ">
        <div className="basis-1/2">
          <h2>{question}</h2>
        </div>
        <div className="basis-1/2 flex justify-end">
          <FontAwesomeIcon
            icon={showMore ? faCircleMinus : faCirclePlus}
            className={`${color} fa-2x`}
            onClick={() => setShowMore(!showMore)}
          />
        </div>
      </div>
      <div>{showMore && <p>{answer}</p>}</div>
    </div>
  );
};

export default FAQAccordion;
