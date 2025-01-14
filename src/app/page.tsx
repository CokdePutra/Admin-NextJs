import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableUsers from "@/components/Tables/TableUsers";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "Dashboard",
  description: "Show all users",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
      <Breadcrumb pageName="" />

      <div className="flex flex-col gap-10">
        <TableUsers />
      </div>
      </DefaultLayout>
    </>
  );
}
