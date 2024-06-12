import React, { useEffect, useState } from "react";
import Questions from "./questions";
import { MOCKFAQs } from "../../utilities/mock_data";

const Faqs = () => {
  const [active, setActive] = useState();
  useEffect(() => {
    setActive(MOCKFAQs[2].id);
  }, []);
  return (
    <section className="bg-[#F3F3F3] slanted-border py-12">
      <div className="slanted-border-null flex flex-col h-fit items-center">
        <h1 className="text-center mb-16 w-fit font-[700] text-[26px] md:text-[45px] md:leading-[64px]">
          Frequently asked questions
        </h1>

        <div className="flex flex-col w-full">
          {MOCKFAQs.map((data) => {
            return (
              <Questions
                key={data.id}
                id={data.id}
                type={data.type}
                subType={data.subType}
                question={data.question}
                active={active}
                setActive={setActive}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
