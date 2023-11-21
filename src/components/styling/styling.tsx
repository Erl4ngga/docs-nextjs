// app/providers.tsx
"use client";

import { Code, Link } from "@nextui-org/react";
import CodeBlock from "../codeBlock";
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
export function StylingComponent() {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-3xl mt-3">1.Library UI</div>
      <div className="font-normal text-base mt-3">
        I am using the NextUI library
      </div>
      <div className="my-4 ">
        <div className="space-x-3">
          <Link
            isExternal
            showAnchorIcon
            href="https://nextui.org/"
            color="success"
            size="lg"
          >
            NextUI
          </Link>
          <Link
            isExternal
            showAnchorIcon
            href="https://tailwindcss.com/docs/installation"
            color="success"
            size="lg"
          >
            Tailwind Css
          </Link>
        </div>
        <div className="font-bold text-3xl mt-6">2.UI Icon</div>
        <div className="font-normal text-base mt-3">
          Follow these rules to avoid confusion in customizing.
        </div>
        <div className="font-medium text-lg mt-3">example.</div>
        <div>
          <CodeBlock code={Icon} language="react" />
        </div>
        <div className="font-bold text-3xl mt-6">3.Social Media UI</div>
        <div className="font-normal text-base mt-3">
          Follow these rules to avoid confusion in customizing.
        </div>
        <div className="font-medium text-lg mt-3">example.</div>
        <div>
          <CodeBlock code={SocialMedia} language="react" />
        </div>
        <div className="font-bold text-3xl mt-6">4.UI Button</div>
        <div className="font-normal text-base mt-3">
          Follow these rules to avoid confusion in customizing.
        </div>
        <div className="font-medium text-lg mt-3">example.</div>
        <div>
          <CodeBlock code={button} language="react" />
        </div>
        <div className="font-bold text-3xl mt-6">5.Form</div>
        <div className="font-normal text-base mt-3">
          if you want to add required.
        </div>
        <div className="font-medium text-lg mt-3">example.</div>
        <div>
          <CodeBlock code={form} language="react" />
        </div>
      </div>
    </div>
  );
}
