"use client";
import { Link, Snippet } from "@nextui-org/react";
import {
  ShieldExclamationIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
export default function InstallationMobileView() {
  return (
    <div className="flex flex-col p-5">
      <div className="font-bold text-3xl">Quick Start</div>
      <Link
        isExternal
        showAnchorIcon
        href="https://drive.google.com/file/d/1eMJ7dVfdiw1eR5IcDvowPkQBPrfpUEtE/view?usp=sharing"
        color="success"
        size="lg"
        className="my-5"
      >
        Download App
      </Link>
      <div className="flex flex-row mt-5">
        <CheckBadgeIcon width={30} height={30} className="text-green-600" />
        <div className="font-semibold text-large ml-3 justify-center items-center flex">
          React-Native cli Version 0.72
        </div>
        <div className="font-semibold text-large ml-3 justify-center items-center flex">
          Node version &gt;=16
        </div>
        <div className="font-semibold text-large ml-3 justify-center items-center flex">
          OpenJdk Current 11
        </div>
      </div>

      <div className="font-normal text-base my-5">
        To install the required node_modules and start the server for your
        React-native app, follow these steps:
      </div>
      <h2 className="font-medium text-lg my-5">1. Install NPM </h2>
      <Snippet color="success" className="w-64">
        npm install
      </Snippet>
      <h2 className="font-medium text-lg my-5">2. Install Android Studio</h2>
      <Link
        isExternal
        showAnchorIcon
        href="https://developer.android.com/studio"
        color="success"
        size="lg"
      >
        Android Studio
      </Link>
      <h2 className="font-medium text-lg my-5">2. Run </h2>
      <Snippet color="success" className="w-96">
        npx react-native run-android --port=1234
      </Snippet>
      <h2 className="font-medium text-lg my-5">Or</h2>
      <Snippet color="success" className="w-72">
        npx react-native run-android
      </Snippet>
      <div className="my-6">
        <ShieldExclamationIcon
          width={50}
          height={50}
          className="text-orange-300"
        />
      </div>
      <h2 className="font-medium text-lg  text-red-500">
        Note: Make sure you have Node.js installed on your machine before
        executing the above steps. You can download and install Node.js from the
        official Node.js website (https://nodejs.org).
      </h2>
    </div>
  );
}
