import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableUsers from "@/components/Tables/TableUsers";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

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
      <div className="w-[20rem]">
          <ButtonDefault
            label="Tambah User"
            link="#"
            customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            // onClick={() => setShowModal(true)}
          />
        </div>
        <TableUsers />
      </div>
      </DefaultLayout>
    </>
  );
}
