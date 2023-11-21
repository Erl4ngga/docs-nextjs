"use client";
import { Snippet } from "@nextui-org/react";
import {
  ShieldExclamationIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
export default function InstallationView() {
  return (
    <div className="flex flex-col p-5">
      <div className="font-bold text-3xl">Quick Start</div>
      <div className="flex flex-row mt-5">
        <CheckBadgeIcon width={30} height={30} className="text-green-600" />
        <div className="font-semibold text-large ml-3 justify-center items-center flex">
          Next.JS Version 13.5.4
        </div>
      </div>
      <div className="font-normal text-base my-5">
        To install the required node_modules and start the server for your
        Next.js front-end app, follow these steps:
      </div>
      <h2 className="font-medium text-lg my-5">1. Install NPM </h2>
      <Snippet color="success" className="w-64">
        npm install
      </Snippet>
      <h2 className="font-medium text-lg my-5">2. Run</h2>
      <Snippet color="success" className="w-64">
        npm run dev
      </Snippet>
      <h2 className="font-medium text-lg my-5">3. Visit</h2>
      <Snippet color="success" className="w-64">
        http://localhost:3000
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
