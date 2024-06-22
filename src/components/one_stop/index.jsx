import It from "./it";
import Design from "./design";
import logoTransRIcon from "../../assets/logo-trans-r.svg";
import AnimatedButton from "../animatedButton";

const OneStop = () => {
  return (
    <section className="bg-[#EDEFFF] slanted-border h-fit w-full mt-5 py-[6rem]">
      <div className="flex flex-col h-fit items-center slanted-border-null eddyContainerFull">
        <h1 className="md:text-center max-w-[880px] font-[700] text-[26px] md:text-[45px] md:leading-[64px]">
          Your one-stop marketplace for finding the talent your business needs.
        </h1>
        <It />
        <Design />
        <div className="flex flex-col-reverse md:flex-row w-full mt-16 md:mt-20">
          <div className="w-full md:w-1/2 py-3 md:py-6 flex items-center cursor-pointer">
            <AnimatedButton
              icon={logoTransRIcon}
              iconStyle={{ height: "20", width: "20", alt: "Explore more" }}
              iconDivStyle="bg-[#202229] h-[70px] w-[70px] rounded-[30px] flex items-center justify-center"
              text={"Explore More"}
              textStyle={{
                normalStyle: "ml-3 text-[20px] font-semibold",
                isHoveredStyle: "text-white",
              }}
              buttonStyle={{
                normalStyle:
                  "h-[70px] w-full md:max-w-[250px] py-6 flex items-center",
                isHoveredStyle: "bg-[#202229] rounded-[30px]",
              }}
            />
          </div>
          <div className="w-full md:w-1/2 py-3 md:py-6 flex items-center">
            <h1 className="text-[20px]">
              <span className="font-[600]">30 more</span> to explore
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStop;
