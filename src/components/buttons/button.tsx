import React, { Children } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

export interface buttonProps {
  // bgColor?: string;
  // textColor?: string;
  // width?: string;
  className?: string;
  // label: string;
  url: string;
  variant: "prime" | "sec"  | "icon" | "outlined";
  children: string;
  onClick?: () => void;
}
const Button: React.FC<buttonProps> = ({
  // bgColor,
  // textColor,
  // width,
  className,
  // label,
  url,
  variant = "prime",
  onClick,
  children,
  ...rest
}) => {
  switch (variant) {
    case "prime":
      return (
        <Link
          href={url}
          className={`rounded-md  bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          {...rest}
        >
          {/* {label} */}
          {children}
        </Link>
      );
    case "sec":
      return (
        <Link
          href={url || ""}
          className={`rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100`}
          {...rest}
        >
          {/* {label} */}
          {children}
        </Link>
      );
    case "icon":
      return (
        <Link
          href={url || ""}
          className={`inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          {...rest}
        >
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: 15, color: "white", padding: 0 }}
          />
          {/* {label} */}
          {children}
        </Link>
      );

    // case "text":
    //   return (
    //     <Link
    //       href={url}
    //       className={`
    //       rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold outline-none border-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
    //       {...rest}
    //     >
    //       {/* FIX icon */}
    //       {label}
    //     </Link>
    //   );

    case "outlined":
      return (
        <Link
          href={url}
          className={`
          rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
          {...rest}
        >
          {/* FIX icon */}
          {/* {label} */}
          {children}
        </Link>
      );

    default:
      return (
        <Link
          href={url || ""}
          className={`inline-flex items-center px-3.5 py-2 border border-transparent text-sm font-medium rounded shadow-sm t hover:opacity-9 focus:outline-none focus:ring-2 focus:ring-offset-2 duration-300  ${
            className || ""
          }`}
          {...rest}
        >
          {/* {label} */}
          {children}
        </Link>
      );
  }
};

export default Button;
