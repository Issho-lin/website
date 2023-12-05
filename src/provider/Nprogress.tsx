/*
 * @Author: linqibin
 * @Date: 2023-12-04 17:53:55
 * @LastEditors: linqibin
 * @LastEditTime: 2023-12-04 18:00:31
 * @Description:
 *
 * Copyright (c) 2023 by @https://github.com/Issho-lin, All Rights Reserved.
 */
"use client";

import { AppProgressBar } from "next-nprogress-bar";

const NProgressProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      {children}
      <AppProgressBar height="2px" color="#4F46E5"/>
    </>
  );
};
export default NProgressProvider;
