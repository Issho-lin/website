"use client";

import StyledComponentsRegistry from "@/provider/AntdRegistry";
import { ConfigProvider } from "antd";
import theme from "@/theme/antd";

export default function AdminLayout({ children }: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </StyledComponentsRegistry>
  );
}
