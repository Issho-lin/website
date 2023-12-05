/*
 * @Author: linqibin
 * @Date: 2023-11-28 10:26:02
 * @LastEditors: linqibin
 * @LastEditTime: 2023-12-04 11:10:01
 * @Description:
 *
 * Copyright (c) 2023 by @https://github.com/Issho-lin, All Rights Reserved.
 */
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    // includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
