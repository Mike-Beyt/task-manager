import React from "react";

import DashboardModule, { DashboardMetaData } from "@/modules/dashboard";

export const metadata = DashboardMetaData;

export default function Dashboard() {
  return <DashboardModule />;
}
