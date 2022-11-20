import { useState } from "react";
import Layout from "../components/Layout";
import PlanleggerSteg1 from "../components/PlanleggerSteg1";
import PlanleggerSteg2 from "../components/PlanleggerSteg2";
import PlanleggerSteg3 from "../components/PlanleggerSteg3";
import PlanleggerSteg4 from "../components/PlanleggerSteg4";

const Solcelleplanlegger = () => {
  const submit = () => {
    console.log(formData);
  };

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState([
    {
      takflate: "",
      takutnyttelse: "",
      takareal: "",
    },
  ]);

  const componentList = [
    <PlanleggerSteg1
      key={1}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <PlanleggerSteg2
      key={2}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <PlanleggerSteg3
      key={3}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      submit={submit}
    />,
    <PlanleggerSteg4 key={4} page={page} setPage={setPage} />,
  ];

  return (
    <Layout>
      <main className=" max-w-4xl mx-auto  my-4 mb-8 min-h-12 bg-[#1b444d] rounded-3xl relative">
        <form onSubmit={submit} className="flex flex-col w-full body-padding">
          {componentList[page]}
        </form>
      </main>
    </Layout>
  );
};

export default Solcelleplanlegger;
