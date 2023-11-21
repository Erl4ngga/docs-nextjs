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
    value: "public",
    label: "public",
    children: [
      {
        value: "background",
        label: "backgrounds",
        children: [
          // Tambahkan anak folder lagi di sini
          { value: "1 background", label: "1.png" },
          { value: "2 background", label: "2.png" },
          { value: "4 background", label: "4.png" },
          { value: "BG.png", label: "BG.png" },
          { value: "breadcrumbs", label: "breadcrumbs" },
        ],
      },
      {
        value: "banner",
        label: "banner",
        children: [
          // Tambahkan anak folder lagi di sini
          { value: "2 banner", label: "2.png" },
          { value: "3 banner", label: "3.png" },
          { value: "4 banner", label: "4.png" },
          { value: "5 banner", label: "5.png" },
          { value: "6 banner", label: "6.png" },
          { value: "BG banner", label: "BG.pngg" },
          { value: "Big-banner banner", label: "Big-banner.pngg" },
          { value: "Big-banner1 banner", label: "Big-banner1.pngg" },
        ],
      },
      {
        value: "category",
        label: "category",
        children: [
          // Tambahkan anak folder lagi di sini
          { value: "1 category", label: "1.png" },
          { value: "2 category", label: "2.png" },
          { value: "3 category", label: "3.png" },
        ],
      },
      {
        value: "member",
        label: "member",
        children: [
          // Tambahkan anak folder lagi di sini
          { value: "1 member", label: "1.png" },
          { value: "2 member", label: "2.png" },
          { value: "3 member", label: "3.png" },
          { value: "4 member", label: "4.png" },
        ],
      },
      {
        value: "product",
        label: "product",
        children: [
          // Tambahkan anak folder lagi di sini
          { value: "1 product", label: "1.png" },
          { value: "2 product", label: "2.png" },
          { value: "3 product", label: "3.png" },
          { value: "4 product", label: "4.png" },
          { value: "5 product", label: "5.png" },
          { value: "6 product", label: "6.png" },
          { value: "7 product", label: "7.png" },
          { value: "8 product", label: "8.png" },
        ],
      },
      { value: "next.svg", label: "next.svg" },
      { value: "vercel.svg", label: "vercel.svg" },
    ],
  },
];

const src = [
  {
    value: "src",
    label: "src",
    children: [
      {
        value: "app",
        label: "app",
        children: [
          {
            value: "about",
            label: "about",
            children: [
              { value: "layout.tsx", label: "layout.tsx" },
              { value: "page.tsx", label: "page.tsx" },
            ],
          },
          {
            value: "api",
            label: "api",
            children: [],
          },
          {
            value: "auth",
            label: "auth",
            children: [
              { value: "layout auth", label: "layout.tsx" },
              { value: "page auth", label: "page.tsx" },
            ],
          },
          {
            value: "cart",
            label: "cart",
            children: [
              { value: "layout cart", label: "layout.tsx" },
              { value: "page cart", label: "page.tsx" },
            ],
          },
          {
            value: "checkout",
            label: "checkout",
            children: [
              { value: "layout checkout", label: "layout.tsx" },
              { value: "page checkout", label: "page.tsx" },
            ],
          },
          {
            value: "contact",
            label: "contact",
            children: [
              { value: "layout contact", label: "layout.tsx" },
              { value: "page contact", label: "page.tsx" },
            ],
          },
          {
            value: "product",
            label: "product",
            children: [
              { value: "layout product", label: "layout.tsx" },
              { value: "page product", label: "page.tsx" },
            ],
          },
          {
            value: "user",
            label: "user",
            children: [
              { value: "layout user", label: "layout.tsx" },
              { value: "page user", label: "page.tsx" },
            ],
          },
          {
            value: "wishlist",
            label: "wishlist",
            children: [
              { value: "layout wishlist", label: "layout.tsx" },
              { value: "page wishlist", label: "page.tsx" },
            ],
          },
          {
            value: "layout View",
            label: "layout.tsx",
          },
          {
            value: "pages View",
            label: "pages.tsx",
          },
        ],
      },
      {
        value: "components",
        label: "components",
        children: [
          {
            value: "about components",
            label: "about",
            children: [{ value: "about index", label: "index" }],
          },
          {
            value: "action components",
            label: "action",
            children: [{ value: "action index", label: "redux" }],
          },
          {
            value: "auth components",
            label: "auth",
            children: [{ value: "auth index", label: "redux" }],
          },
          {
            value: "banner components",
            label: "banner",
            children: [
              { value: "big-banner", label: "big-banner.tsx" },
              { value: "medium-banner", label: "medium-banner.tsx" },
              { value: "small-banner", label: "small-banner.tsx" },
            ],
          },
          {
            value: "blog components",
            label: "blog",
            children: [
              {
                value: "card blog",
                label: "card",
                children: [{ value: "index card blog", label: "index.tsx" }],
              },
              {
                value: "form blog",
                label: "form",
                children: [{ value: "index form blog", label: "index.tsx" }],
              },
              {
                value: "grid blog",
                label: "grid",
                children: [{ value: " grid blog", label: "index.tsx" }],
              },
              {
                value: "modal blog",
                label: "sidebar",
                children: [{ value: " modal sidebar", label: "index.tsx" }],
              },
              {
                value: "view blog",
                label: "view",
                children: [{ value: "index view blog", label: "index.tsx" }],
              },
            ],
          },
          {
            value: "cart components",
            label: "cart",
            children: [
              {
                value: "card cart",
                label: "card",
                children: [{ value: "index card cart", label: "index.tsx" }],
              },
              {
                value: "form cart",
                label: "form",
                children: [{ value: "index form cart", label: "index.tsx" }],
              },
              {
                value: "view cart",
                label: "view",
                children: [{ value: "index view cart", label: "index.tsx" }],
              },
            ],
          },
          {
            value: "category components",
            label: "category",
            children: [
              {
                value: "card category",
                label: "card",
                children: [
                  { value: "index card category", label: "index.tsx" },
                ],
              },
              {
                value: "form category",
                label: "form",
                children: [
                  { value: "index form category", label: "index.tsx" },
                ],
              },
              {
                value: "view category",
                label: "view",
                children: [
                  { value: "index view category", label: "index.tsx" },
                ],
              },
            ],
          },
          {
            value: "checkout components",
            label: "checkout",
            children: [
              {
                value: "card checkout",
                label: "card",
                children: [
                  { value: "index card checkout", label: "index.tsx" },
                ],
              },
              {
                value: "form checkout",
                label: "form",
                children: [
                  { value: "index form checkout", label: "index.tsx" },
                ],
              },
              {
                value: "view checkout",
                label: "view",
                children: [
                  { value: "index view checkout", label: "index.tsx" },
                ],
              },
            ],
          },
          {
            value: "client components",
            label: "client",
            children: [
              {
                value: "card client",
                label: "card",
                children: [{ value: "index card client", label: "index.tsx" }],
              },
            ],
          },
          {
            value: "contact components",
            label: "contact",
            children: [
              {
                value: "card contact",
                label: "card",
                children: [{ value: "index card contact", label: "index.tsx" }],
              },
              {
                value: "form contact",
                label: "form",
                children: [{ value: "index form contact", label: "index.tsx" }],
              },
              {
                value: "view contact",
                label: "view",
                children: [{ value: "index view contact", label: "index.tsx" }],
              },
            ],
          },
          {
            value: "footer",
            label: "footer",
            children: [{ value: "footer index", label: "footeer.tsx" }],
          },
          {
            value: "Home index",
            label: "Home",
            children: [{ value: "home index", label: "index.tsx" }],
          },
          {
            value: "icon index",
            label: "icon",
            children: [{ value: "icon view index", label: "index.tsx" }],
          },
          {
            value: "incentives index",
            label: "incentives",
            children: [{ value: "incentives view index", label: "index.tsx" }],
          },
          {
            value: "member components",
            label: "member",
            children: [
              {
                value: "card member",
                label: "card",
                children: [{ value: "index card member", label: "index.tsx" }],
              },
            ],
          },
          {
            value: "navbar index",
            label: "navbar",
            children: [
              { value: "header1 view index", label: "header1.tsx" },
              { value: "header2 view index", label: "header2.tsx" },
              { value: "header3 view index", label: "header3.tsx" },
            ],
          },
          {
            value: "newsletter index",
            label: "newsletter",
            children: [{ value: "newsletter view index", label: "index.tsx" }],
          },
          {
            value: "popup index",
            label: "popup",
            children: [{ value: "popup view index", label: "index.tsx" }],
          },
          {
            value: "product components",
            label: "product",
            children: [
              {
                value: "card product",
                label: "card",
                children: [{ value: "index card product", label: "index.tsx" }],
              },
              {
                value: "form product",
                label: "form",
                children: [{ value: "index form product", label: "index.tsx" }],
              },
              {
                value: "grid product",
                label: "grid",
                children: [{ value: " grid product", label: "index.tsx" }],
              },
              {
                value: "modal product",
                label: "modal",
                children: [{ value: " modal product", label: "index.tsx" }],
              },
              {
                value: "view product",
                label: "view",
                children: [{ value: "index view product", label: "index.tsx" }],
              },
            ],
          },
          {
            value: "sidebar index",
            label: "sidebar",
            children: [{ value: "sidebar view index", label: "index.tsx" }],
          },
          {
            value: "theme index",
            label: "theme",
            children: [
              { value: "theme view index", label: "theme-switch.tsx" },
            ],
          },
          {
            value: "user components",
            label: "user",
            children: [
              {
                value: "card user",
                label: "card",
                children: [{ value: "index card user", label: "index.tsx" }],
              },
              {
                value: "form user",
                label: "form",
                children: [{ value: "index form user", label: "index.tsx" }],
              },
              {
                value: "view user",
                label: "view",
                children: [{ value: "index view user", label: "index.tsx" }],
              },
            ],
          },
          {
            value: "wishlist components",
            label: "wishlist",
            children: [
              {
                value: "card wishlist",
                label: "card",
                children: [
                  { value: "index card wishlist", label: "index.tsx" },
                ],
              },
              {
                value: "form wishlist",
                label: "form",
                children: [
                  { value: "index form wishlist", label: "index.tsx" },
                ],
              },
              {
                value: "view wishlist",
                label: "view",
                children: [
                  { value: "index view wishlist", label: "index.tsx" },
                ],
              },
            ],
          },
        ],
      },
      {
        value: "config",
        label: "config",
        children: [{ value: "", label: "" }],
      },
      {
        value: "feature",
        label: "feature",
        children: [
          {
            value: "countdown",
            label: "countdown",
            children: [
              { value: "CountdownSlice.ts", label: "CountdownSlice.ts" },
            ],
          },
          {
            value: "form",
            label: "form",
            children: [{ value: "PaymentSlice.ts", label: "PaymentSlice.ts" }],
          },
          {
            value: "PopUp",
            label: "PopUp",
            children: [{ value: "PopUpSlice.ts", label: "PopUpSlice.ts" }],
          },
          {
            value: "Product",
            label: "Product",
            children: [
              {
                value: "cart redux",
                label: "cart",
                children: [{ value: "cartSlice redux", label: "cartSlice" }],
              },
              {
                value: "wishlist redux",
                label: "wishlist",
                children: [
                  { value: "wishlistSlice redux", label: "wishlistSlice" },
                ],
              },
            ],
          },
        ],
      },
      {
        value: "lib",
        label: "lib",
        children: [
          {
            value: "data",
            label: "data",
            children: [
              { value: "product.json", label: "product.json" },
              { value: "category.json", label: "category.json" },
              { value: "type.ts product", label: "type.ts" },
            ],
          },
          {
            value: "payment lib",
            label: "payment",
            children: [
              {
                value: "paypal lib",
                label: "paypal",
                children: [{ value: "paypal api", label: "paypal.ts" }],
              },
              {
                value: "stripe lib",
                label: "stripe",
                children: [{ value: "stripe api", label: "stripe.ts" }],
              },
            ],
          },
        ],
      },
      {
        value: "store",
        label: "store",
        children: [{ value: "store.ts", label: "store.ts" }],
      },
    ],
  },
];
export default function ProjectStructureView() {
  const [checked, setChecked] = useState<any[]>([]);
  const [expanded, setExpanded] = useState<any[]>([]);
  const [checked1, setChecked1] = useState<any[]>([]);
  const [expanded1, setExpanded1] = useState<any[]>([]);
  return (
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
        nodes={src}
        checked={checked1}
        expanded={expanded1}
        onCheck={(checked1) => setChecked1(checked1)}
        onExpand={(expanded1) => setExpanded1(expanded1)}
      />
    </div>
  );
}
