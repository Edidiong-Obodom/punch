import React, { useEffect, useState } from "react";
import Steps from "./steps";
import { MOCK_STEPS } from "../../utilities/mock_data";

const InGoodHands = () => {
  const [open, setOpen] = useState("");

  useEffect(() => {
    setOpen(MOCK_STEPS[0].id);
  }, []);
  return (
    <section className="mt-16 md:mt-24 eddyContainerFull pb-8">
      <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="">
            <h1 className="font-bold text-[26px] md:text-[36px] max-w-[400px]">
              How we ensure you’re in good hands.
            </h1>
          </div>
          <div className="mt-5 mb-7 max-w-[480px]">
            <p>
              With our comprehensive screening process, we hand-pick highly
              skilled candidates so you can onboard them in a matter of days.
            </p>
          </div>

          {MOCK_STEPS.map((data) => {
            return (
              <Steps
                key={data.id}
                id={data.id}
                title={data.title}
                details={data.details}
                opened={open}
                setOpen={setOpen}
              />
            );
          })}
        </div>
        <div className="md:w-1/2"></div>
      </div>
    </section>
  );
};

export default InGoodHands;
