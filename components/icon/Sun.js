import React from "react";

export default function Sun({ color = "#fff" }) {
  return (
    <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.993 10A5.013 5.013 0 0 0 11 15.007 5.013 5.013 0 0 0 16.007 10 5.013 5.013 0 0 0 11 4.993 5.013 5.013 0 0 0 5.993 10ZM11 6.993A3.01 3.01 0 0 1 14.007 10 3.01 3.01 0 0 1 11 13.007 3.01 3.01 0 0 1 7.993 10 3.01 3.01 0 0 1 11 6.993ZM9.998 17h2v3h-2v-3Zm0-17h2v3h-2V0Zm-9 9h3v2h-3V9Zm17 0h3v2h-3V9ZM3.219 16.363l2.12-2.122 1.415 1.414-2.12 2.122-1.415-1.414ZM15.24 4.344l2.122-2.122 1.414 1.414-2.122 2.122-1.414-1.414ZM5.342 5.759 3.22 3.637l1.415-1.414 2.12 2.122-1.413 1.414Zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414 2.122 2.122Z"
        fill={color}
      />
    </svg>
  );
}
