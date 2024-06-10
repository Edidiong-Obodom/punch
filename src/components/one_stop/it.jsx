import React from 'react'
import starIcon from "../../assets/star-icon.svg";
import dashboardIcon from "../../assets/dashboard-icon.svg";
import starCustomerIcon from "../../assets/star-customer.svg";
import shopifyIcon from "../../assets/shopify.svg";
import magentoIcon from "../../assets/magento.svg";
import dataIcon from "../../assets/data-science.svg";
import webflowIcon from "../../assets/webflow.svg";
import dotnetIcon from "../../assets/dotnet.svg";
import logoBlackRIcon from "../../assets/logo-black-r.svg";

const It = () => {
  return (
    <div className="flex flex-col md:flex-row w-full mt-20">
      <div className="w-full md:w-1/2 py-6">
        <h1 className="text-[20px] max-w-[300px] font-semibold">
          Find Dev and IT professionals to scale your business.
        </h1>
        <div className="mt-3 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={starIcon}
              className="inline"
              height="20"
              width="20"
              alt="star"
            />{" "}
            &nbsp; 989 Skills
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <img
              src={dashboardIcon}
              className="inline"
              height="20"
              width="20"
              alt="dashboard icon"
            />{" "}
            &nbsp; 45 Sub-Categories
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={starCustomerIcon}
              className="inline"
              height="20"
              width="20"
              alt="star customer"
            />{" "}
            &nbsp; 1011 Profiles
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 bg-white text-[14px] font-semibold rounded-[7px] px-6 py-4">
        <h1>IT & Development</h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-3">
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img
                src={shopifyIcon}
                height="30"
                width="30"
                alt="shopify icon"
              />
            </div>
            <p className="mt-3 max-w-[100px] text-center">
              Shopify Developer
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img
                src={magentoIcon}
                height="30"
                width="30"
                alt="magento icon"
              />
            </div>
            <p className="mt-3 max-w-[100px] text-center">
              Magento Developer
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img
                src={dataIcon}
                height="30"
                width="30"
                alt="data science icon"
              />
            </div>
            <p className="mt-3 max-w-[100px] text-center">Data Scientist</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img
                src={webflowIcon}
                height="30"
                width="30"
                alt="web flow icon"
              />
            </div>
            <p className="mt-3 max-w-[100px] text-center">
              Webflow Developer
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img
                src={dotnetIcon}
                height="20"
                width="20"
                alt="dot net icon"
              />
            </div>
            <p className="mt-3 max-w-[100px] text-center">
              Dot Net Developer
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-[15px] flex items-center justify-center">
              <img src={logoBlackRIcon} height="20" width="20" alt="more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default It