"use client";
import { Link, Snippet } from "@nextui-org/react";
import {
  ShieldExclamationIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import CodeBlock from "@/components/codeBlock";
const product = `<meta-data
android:name="com.google.android.geo.API_KEY"
android:value="Your Google maps API Key Here"/>`;
export default function FixedErrorMobileView() {
  return (
    <div className="flex flex-col p-5">
      <div className="font-bold text-3xl mt-3">Install OpenJDK !!!</div>
      <div className="flex flex-row space-x-2">
        <Link
          isExternal
          showAnchorIcon
          href="https://openjdk.org/"
          color="primary"
          size="md"
          className="my-5"
        >
          Open JDK
        </Link>
        <div className="font-normal text-base my-5">Or Read</div>
        <Link
          isExternal
          showAnchorIcon
          href="https://reactnative.dev/docs/environment-setup?guide=native"
          color="primary"
          size="md"
          className="my-5"
        >
          React Native CLI
        </Link>
      </div>
      <div className="font-bold text-3xl mt-3">Add Build Verison </div>
      <div className="font-normal text-base my-6">Go to android</div>
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
      <div className="font-bold text-3xl mt-10">Add Google Maps Api</div>
      <div className="font-normal text-base my-5">
        Go to android/app/src/main/AndroidManifest.xml
      </div>
      <div>
        <CodeBlock code={product} language="react" />
      </div>
    </div>
  );
}
