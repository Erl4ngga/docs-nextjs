"use client";
import { Snippet } from "@nextui-org/react";
import {
  ShieldExclamationIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
export default function FixedErrorMobileView() {
  return (
    <div className="flex flex-col p-5">
      <div className="font-bold text-3xl mt-3">Add Build Verison </div>
      <div className="font-normal text-base my-5">Go to android</div>
      <div className="my-5">
        <Image width={550} height={550} src="/fixed.png" alt="asd" />
      </div>
      <h2 className="font-medium text-lg mt-5">1. Go to android Studio</h2>
      <h2 className="font-medium text-lg my-5">2. click more action</h2>
      <Image width={200} height={30} src="/action.png" alt="asd" />
      <h2 className="font-medium text-lg my-5">3. click SDK Manager</h2>
      <Image width={200} height={200} src="/sdk-manager.png" alt="asd" />
      <h2 className="font-medium text-lg my-5">4. Go to System Setting</h2>
      <h2 className="font-medium text-lg my-5">5. Click Android SDK</h2>
      <Image width={200} height={30} src="/System-setting.png" alt="asd" />
      <h2 className="font-medium text-lg my-5">6. Click Sdk Tools</h2>
      <Image width={550} height={550} src="/sdk-tool.png" alt="asd" />
    </div>
  );
}