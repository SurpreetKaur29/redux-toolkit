import React, { useState } from "react";
import Form from "./form";
import { Data } from "./data";
import { Layout } from "@/components/layout";
const Home = () => {
  const [edit, setEdit] = useState(false);
  return (
    <Layout>
      <Form edit={edit} setEdit={setEdit} />
      <Data setEdit={setEdit} />
    </Layout>
  );
};

export default Home;
