"use client";
"use client";
import { useState } from "react";
import {
  HomeIcon,
  FolderOpenIcon,
  PaintBrushIcon,
  CreditCardIcon,
  WalletIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import InstallationView from "../installation/installationView";
import ProjectStructureView from "../projectStructure/ProjectStructureView";
import { Account } from "../account/account";
import { PaymentSetting } from "../payment/paymentSetting";
import { StylingComponent } from "../styling/styling";
import InstallationMobileView from "./installation/InstallationView";
import { StylingMobileComponent } from "./styling/StylingMobile";
import { WrenchIcon, WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
import FixedErrorMobileView from "./FixedError/FixedErorView";
import ServiceView from "./service/serviceView";

export default function MobileView() {
  const [activeTab, setActiveTab] = useState("Installation"); // Set the initial active tab

  /**
   * The function `toggleTab` sets the active tab based on the provided tab ID.
   * @param {string} tabId - The `tabId` parameter is a string that represents the unique identifier of a
   * tab.
   */
  const toggleTab = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col p-5  h-full ">
        <button
          className={`flex flex-row space-x-4 p-5 ${
            activeTab === "Installation"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => toggleTab("Installation")}
        >
          <HomeIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize">
            Installation
          </h1>
        </button>

        <button
          className={`flex flex-row space-x-4 p-5 ${
            activeTab === "StylingComponent"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => toggleTab("StylingComponent")}
        >
          <PaintBrushIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize">
            Styling
          </h1>
        </button>

        <button
          className={`flex flex-row space-x-4 p-5 ${
            activeTab === "Environment"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => toggleTab("Environment")}
        >
          <WrenchScrewdriverIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize">
            Fixed Error
          </h1>
        </button>

        <button
          className={`flex flex-row space-x-4 p-5 ${
            activeTab === "Service"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => toggleTab("Service")}
        >
          <WalletIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize">
            Service & managament state
          </h1>
        </button>
        <button
          className={`flex flex-row space-x-4 p-5 ${
            activeTab === "ContactMe"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => toggleTab("ContactMe")}
        >
          <ChatBubbleLeftIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize">
            Contact Me
          </h1>
        </button>
      </div>
      <div className="col-span-3">
        <div
          id="Installation"
          className={activeTab === "Installation" ? "block" : "hidden"}
        >
          <InstallationMobileView />
        </div>

        <div
          id="Environment"
          className={activeTab === "Environment" ? "block" : "hidden"}
        >
          <FixedErrorMobileView />
        </div>
        <div
          id="StylingComponent"
          className={activeTab === "StylingComponent" ? "block" : "hidden"}
        >
          <StylingMobileComponent />
        </div>
        <div
          id="Service"
          className={activeTab === "Service" ? "block" : "hidden"}
        >
          <ServiceView />
        </div>
      </div>
    </div>
  );
}
