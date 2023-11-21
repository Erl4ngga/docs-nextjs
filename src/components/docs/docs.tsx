"use client";
"use client";
import { useState } from "react";
import {
  HomeIcon,
  FolderOpenIcon,
  PaintBrushIcon,
  AdjustmentsVerticalIcon,
  IdentificationIcon,
  CreditCardIcon,
  WalletIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import InstallationView from "../installation/installationView";
import ProjectStructureView from "../projectStructure/ProjectStructureView";
import { Account } from "../account/account";
import { PaymentSetting } from "../payment/paymentSetting";
import { StylingComponent } from "../styling/styling";
import { Feature } from "../feature/feature";

export default function DocsView() {
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
            activeTab === "ProjectStructure"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => toggleTab("ProjectStructure")}
        >
          <FolderOpenIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize text">
            Folder Structure
          </h1>
        </button>
        <button
          className={`flex flex-row space-x-4 p-5 ${
            activeTab === "Account"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => toggleTab("Account")}
        >
          <IdentificationIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize">
            Account Setting
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
          <AdjustmentsVerticalIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize">
            Environment
          </h1>
        </button>
        <button
          className={`flex flex-row space-x-4 p-5 ${
            activeTab === "PaymentSetting"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => toggleTab("PaymentSetting")}
        >
          <CreditCardIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize">
            Payment Setting
          </h1>
        </button>
        <button
          className={`flex flex-row space-x-4 p-5 ${
            activeTab === "Feature"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => toggleTab("Feature")}
        >
          <WalletIcon width={30} height={30} />
          <h1 className="justify-center flex items-center capitalize">
            Feature
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
          <InstallationView />
        </div>
        <div
          id="ProjectStructure"
          className={activeTab === "ProjectStructure" ? "block" : "hidden"}
        >
          <ProjectStructureView />
        </div>
        <div
          id="Account"
          className={activeTab === "Account" ? "block" : "hidden"}
        >
          <Account />
        </div>
        <div
          id="PaymentSetting"
          className={activeTab === "PaymentSetting" ? "block" : "hidden"}
        >
          <PaymentSetting />
        </div>
        <div
          id="StylingComponent"
          className={activeTab === "StylingComponent" ? "block" : "hidden"}
        >
          <StylingComponent />
        </div>
        <div
          id="Feature"
          className={activeTab === "Feature" ? "block" : "hidden"}
        >
          <Feature />
        </div>
      </div>
    </div>
  );
}
