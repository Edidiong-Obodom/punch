import React from "react";
import logoTransDIcon from "../../assets/logo-purple-d.svg";
import { Link } from "react-router-dom";
import LinksAndRedirects from "./links_and_redirects";
import ConnectingPeople from "./connecting_people";

const Footer = () => {
  return (
    <section className="mt-20 text-white bg-[#0C0C0C]">
      <div className="bg-white h-[100px] slanted-border"></div>
      <div className="">
        <div className="slanted-border w-full mt-5 py-[3rem] md:mb-16">
          <div className="bg-[#525AA0] h-[300px] eddyContainerFull">
            <div className="slanted-border-null h-full w-full flex flex-col items-center justify-center">
              <h1 className="text-white text-[32px] max-w-[400px] text-center font-semibold mb-7">
                Need a job done, and done well? Get started
              </h1>
              <div
                className={`bg-[#202229] h-[60px] w-[60px] rounded-[20px] flex items-center justify-center`}
              >
                <img src={logoTransDIcon} height="15" width="15" alt="more" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row eddyContainerFull py-4">
          <LinksAndRedirects />
          <ConnectingPeople />
        </div>
        <div className="border-t border-t-[#575656] py-4 text-white">
          <div className="h-full eddyContainerFull flex flex-col md:flex-row">
            <h6 className="w-full md:w-1/2 text-center md:text-left">
              All rights reserved by Zwilt
            </h6>
            <div className="mt-7 md:mt-0 flex flex-col md:flex-row w-full md:w-1/2 text-[#b1aeae]">
              <div
                className={`text-center md:text-right flex-1 underline decoration-[#b1aeae]`}
              >
                <Link href={"/"}>Privacy Policy</Link>
              </div>
              <div
                className={`text-center md:text-right md:ml-7 underline decoration-[#b1aeae]`}
              >
                <Link href={"/"}>Terms and Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
