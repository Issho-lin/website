"use client";

import "./layout.css";

export default function WithMenu({ children }: React.PropsWithChildren) {
  return <main className="admin_layout">{children}</main>;
}
