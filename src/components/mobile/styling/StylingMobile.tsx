// app/providers.tsx
"use client";

import { Code, Link } from "@nextui-org/react";
const button = `<Button
href="/product"
text_color="text-green-600"
title="shop now"
icon="arrow"
icon_color="stroke-green-600"
background="bg-white"
/>"
`;
const Icon = `<Profile width={35} height={35} color="stroke-white" />
`;
const form = `<Form type="text" title="Text" name="" required />
`;
const SocialMedia = `<SocialMedia twitter_href="" facebook_href="" instagram_href="" />`;
export function StylingMobileComponent() {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-3xl mt-3">1.Library UI</div>
      <div className="my-4 ">
        <div className="space-x-3">
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/jaredh159/tailwind-react-native-classnames"
            color="success"
            size="lg"
          >
            twrnc
          </Link>
          <Link
            isExternal
            showAnchorIcon
            href="https://reactnativeelements.com/"
            color="success"
            size="lg"
          >
            React native element
          </Link>
          <Link
            isExternal
            showAnchorIcon
            href="https://reactnativepaper.com/"
            color="success"
            size="lg"
          >
            react native paper
          </Link>
        </div>
      </div>
    </div>
  );
}
