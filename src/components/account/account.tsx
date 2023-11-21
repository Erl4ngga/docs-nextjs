import { ShieldExclamationIcon } from "@heroicons/react/20/solid";
import { Snippet } from "@nextui-org/react";
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
const nodes = [
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
                value: "auth",
                label: "auth",
                children: [
                  {
                    value: "[..nextauth]",
                    label: "[..nextauth]",
                    children: [{ value: "option.ts", label: "option.ts" }],
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
export function Account() {
  const [checked, setChecked] = useState<any[]>([]);
  const [expanded, setExpanded] = useState<any[]>([]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="my-6">
          <ShieldExclamationIcon
            width={50}
            height={50}
            className="text-orange-300"
          />
        </div>
        <div className="font-bold text-3xl justify-between items-center flex ml-2">
          Urgent
        </div>
      </div>
      <h2 className="font-medium text-lg  text-red-500">
        Before changing the user, you must do this.
      </h2>
      <div className="font-normal text-base my-5">
        open your terminal,write this line
      </div>
      <Snippet color="success" className="w-72">
        openssl rand -base64 32
      </Snippet>
      <div className="font-normal text-base my-5">
        After that, place the code from the terminal into the environment.
      </div>
      <Snippet color="success" className="w-72">
        NEXTAUTH_SECRET="w8********"
      </Snippet>
      <div className="font-normal text-base my-5">Enter this folder.</div>
      <div>
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
          nodes={nodes}
          checked={checked}
          expanded={expanded}
          onCheck={(checked) => setChecked(checked)}
          onExpand={(expanded) => setExpanded(expanded)}
        />
      </div>
      <div className="font-normal text-base my-5">
        find name: "Erlangga", email: "ss@gmail.com", password: "nextauth",
      </div>
    </div>
  );
}
