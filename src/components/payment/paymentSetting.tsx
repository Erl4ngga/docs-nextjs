"use client";
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
import { Link, Snippet } from "@nextui-org/react";
import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faChevronRight,
  faChevronDown,
  faPlusSquare,
  faMinusSquare,
  faFolder,
  faFolderOpen,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
const paymentStripe = [
  {
    value: "src",
    label: "src",
    children: [
      {
        value: "lib",
        label: "lib",
        children: [
          {
            value: "payment",
            label: "payment",
            children: [
              {
                value: "stripe ",
                label: "stripe.ts",
              },
            ],
          },
        ],
      },
    ],
  },
];
const paymentPaypal = [
  {
    value: "src",
    label: "src",
    children: [
      {
        value: "lib",
        label: "lib",
        children: [
          {
            value: "payment",
            label: "payment",
            children: [
              {
                value: "paypal ",
                label: "paypal.ts",
              },
            ],
          },
        ],
      },
    ],
  },
];
const formStripe = [
  {
    value: "src",
    label: "src",
    children: [
      {
        value: "app",
        label: "app",
        children: [
          {
            value: "api",
            label: "api",
            children: [
              {
                value: "action",
                label: "action",
                children: [
                  {
                    value: "payment",
                    label: "payment",
                    children: [
                      {
                        value: "stripe.ts",
                        label: "stripe.ts",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
const formPaypal = [
  {
    value: "src",
    label: "src",
    children: [
      {
        value: "app",
        label: "app",
        children: [
          {
            value: "api",
            label: "api",
            children: [
              {
                value: "action",
                label: "action",
                children: [
                  {
                    value: "payment",
                    label: "payment",
                    children: [
                      {
                        value: "paypal.ts",
                        label: "paypal.ts",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
export function PaymentSetting() {
  const [checked, setChecked] = useState<any[]>([]);
  const [expanded, setExpanded] = useState<any[]>([]);
  const [checked1, setChecked1] = useState<any[]>([]);
  const [expanded1, setExpanded1] = useState<any[]>([]);
  const [checked3, setChecked3] = useState<any[]>([]);
  const [expanded3, setExpanded3] = useState<any[]>([]);
  const [checked4, setChecked4] = useState<any[]>([]);
  const [expanded4, setExpanded4] = useState<any[]>([]);
  return (
    <div className="flex flex-col">
      <div className="font-bold text-3xl">1.Stripe</div>
      <div className="font-normal text-base my-5">
        If the API version expires or you want to change production credentials,
        then you can open this folder.
      </div>
      <div className="flex flex-row">
        <WrenchScrewdriverIcon width={25} height={25} />
        <div className="justify-center items-center flex ml-2">
          Api Version:<span className="text-green-600 ml-2">2023-10-16</span>
        </div>
      </div>
      <div className="my-4">
        <Link
          isExternal
          showAnchorIcon
          href="https://stripe.com/"
          color="success"
        >
          Stripe
        </Link>
      </div>
      <div>
        <Snippet color="success">STRIPE_SECRET_KEY=""</Snippet>
      </div>
      <div className="my-5">
        <CheckboxTree
          icons={{
            check: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-check"
                icon={faCheckSquare}
              />
            ),
            uncheck: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-uncheck"
                icon={faSquare}
              />
            ),
            halfCheck: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-half-check"
                icon={faCheckSquare}
              />
            ),
            expandClose: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-close"
                icon={faChevronRight}
              />
            ),
            expandOpen: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-open"
                icon={faChevronDown}
              />
            ),
            expandAll: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-all"
                icon={faPlusSquare}
              />
            ),
            collapseAll: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-collapse-all"
                icon={faMinusSquare}
              />
            ),
            parentClose: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-parent-close"
                icon={faFolder}
              />
            ),
            parentOpen: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-parent-open"
                icon={faFolderOpen}
              />
            ),
            leaf: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-leaf-close"
                icon={faFile}
              />
            ),
          }}
          nodes={paymentStripe}
          checked={checked}
          expanded={expanded}
          onCheck={(checked) => setChecked(checked)}
          onExpand={(expanded) => setExpanded(expanded)}
        />
      </div>
      <div className="font-medium text-xl">Form Stripe</div>
      <div className="font-normal text-base my-5">
        If you want to add a checkout feature to Stripe.
      </div>
      <div className="my-2">
        <CheckboxTree
          icons={{
            check: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-check"
                icon={faCheckSquare}
              />
            ),
            uncheck: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-uncheck"
                icon={faSquare}
              />
            ),
            halfCheck: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-half-check"
                icon={faCheckSquare}
              />
            ),
            expandClose: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-close"
                icon={faChevronRight}
              />
            ),
            expandOpen: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-open"
                icon={faChevronDown}
              />
            ),
            expandAll: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-all"
                icon={faPlusSquare}
              />
            ),
            collapseAll: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-collapse-all"
                icon={faMinusSquare}
              />
            ),
            parentClose: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-parent-close"
                icon={faFolder}
              />
            ),
            parentOpen: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-parent-open"
                icon={faFolderOpen}
              />
            ),
            leaf: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-leaf-close"
                icon={faFile}
              />
            ),
          }}
          nodes={formStripe}
          checked={checked1}
          expanded={expanded1}
          onCheck={(checked1) => setChecked1(checked1)}
          onExpand={(expanded1) => setExpanded1(expanded1)}
        />
      </div>
      <div className="font-bold text-3xl my-5">2.Paypal</div>
      <div className="my-4">
        <Link
          isExternal
          showAnchorIcon
          href="https://developer.paypal.com/home"
          color="success"
        >
          Paypal
        </Link>
      </div>
      <div className="font-normal text-base my-1">
        If the API version expires or you want to change production credentials,
        then you can open this folder.
      </div>
      <div className="my-3">
        <Snippet color="success">PAYPAL_CLIENT_SECRET=""</Snippet>
      </div>
      <div className="my-3">
        <Snippet color="success">PAYPAL_CLIENT_ID=""</Snippet>
      </div>
      <div className="my-5">
        <CheckboxTree
          icons={{
            check: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-check"
                icon={faCheckSquare}
              />
            ),
            uncheck: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-uncheck"
                icon={faSquare}
              />
            ),
            halfCheck: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-half-check"
                icon={faCheckSquare}
              />
            ),
            expandClose: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-close"
                icon={faChevronRight}
              />
            ),
            expandOpen: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-open"
                icon={faChevronDown}
              />
            ),
            expandAll: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-all"
                icon={faPlusSquare}
              />
            ),
            collapseAll: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-collapse-all"
                icon={faMinusSquare}
              />
            ),
            parentClose: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-parent-close"
                icon={faFolder}
              />
            ),
            parentOpen: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-parent-open"
                icon={faFolderOpen}
              />
            ),
            leaf: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-leaf-close"
                icon={faFile}
              />
            ),
          }}
          nodes={paymentPaypal}
          checked={checked4}
          expanded={expanded4}
          onCheck={(checked4) => setChecked4(checked4)}
          onExpand={(expanded4) => setExpanded4(expanded4)}
        />
      </div>
      <div className="font-medium text-xl">Form Paypal</div>
      <div className="font-normal text-base my-5">
        If you want to add a checkout feature to Paypal.
      </div>
      <div className="my-5">
        <CheckboxTree
          icons={{
            check: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-check"
                icon={faCheckSquare}
              />
            ),
            uncheck: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-uncheck"
                icon={faSquare}
              />
            ),
            halfCheck: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-half-check"
                icon={faCheckSquare}
              />
            ),
            expandClose: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-close"
                icon={faChevronRight}
              />
            ),
            expandOpen: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-open"
                icon={faChevronDown}
              />
            ),
            expandAll: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-all"
                icon={faPlusSquare}
              />
            ),
            collapseAll: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-collapse-all"
                icon={faMinusSquare}
              />
            ),
            parentClose: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-parent-close"
                icon={faFolder}
              />
            ),
            parentOpen: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-parent-open"
                icon={faFolderOpen}
              />
            ),
            leaf: (
              <FontAwesomeIcon
                className="rct-icon rct-icon-leaf-close"
                icon={faFile}
              />
            ),
          }}
          nodes={formPaypal}
          checked={checked3}
          expanded={expanded3}
          onCheck={(checked3) => setChecked3(checked3)}
          onExpand={(expanded3) => setExpanded3(expanded3)}
        />
      </div>
      <div className="font-bold text-3xl my-5">3.Cash On delivery</div>
      <div className="font-medium text-xl">Form Cash on Delivery</div>
      <div className="font-normal text-base my-5">
        If you want to add a checkout feature to Cash on Delivery.
      </div>
    </div>
  );
}
