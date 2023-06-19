import type { NextPage } from "next";
import Image from "next/image";

import styles from "./styles.module.scss";
import { useState } from "react";

const FAQAccordion: NextPage<{
  id: number;
  question: string;
  answer: string;
}> = ({ id, question, answer }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={
        styles.borderRow + " w-11/12 lg:w-full container mx-auto py-3 px-3"
      }
      key={id}
    >
      <div className=" flex flex-row ">
        <div className="basis-1/2">
          <h2>{question}</h2>
        </div>
        <div className="basis-1/2 flex justify-end">
          <Image
            src={showMore ? "/icons/minus.svg" : "/icons/plus.svg"}
            width={30}
            height={30}
            alt="minus"
            className="mx-0"
            onClick={() => setShowMore(!showMore)}
          />
        </div>
      </div>
      <div>{showMore && <p>{answer}</p>}</div>
    </div>
  );
};

export default FAQAccordion;
