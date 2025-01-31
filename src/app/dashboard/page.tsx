import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import DataKSR from "@/components/Dashboard/DataKSR";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

const Dashboard = () => {
    return (
    <>
      <DefaultLayout>
        <DataKSR />
      </DefaultLayout>
    </>
  );
}
export default Dashboard;