import Breadcrumb from "@/components/Common/Breadcrumb";
import Layout from "@/components/Dashboard/Layout";
import React from "react";


const index = () => {
  return (
    <Layout>
      <Breadcrumb
        Icon={"wpf:administrator"}
        Title={"Admin"}
        From={"Home"}
        Add={"Add Admin"}
        Path={"/dashboard/admin/add"}
      />
      dsadasd
    </Layout>
  );
};

export default index;
