/*
 * @Author: linqibin
 * @Date: 2023-11-28 15:47:13
 * @LastEditors: linqibin
 * @LastEditTime: 2023-12-04 17:45:13
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
import { theme as _theme } from 'antd'
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  algorithm: _theme.defaultAlgorithm,
  token: {
    colorPrimary: '#165dff',
    borderRadius: 4,
  },
};

export default theme;