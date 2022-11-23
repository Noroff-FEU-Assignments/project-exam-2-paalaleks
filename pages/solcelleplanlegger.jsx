import { useForm } from "react-hook-form";

import { useState } from "react";
import Layout from "../components/Layout";
import PlanleggerStart from "../components/PlanleggerStart";
import PlanleggerSteg2 from "../components/PlanleggerSteg2";
import PlanleggerSteg3 from "../components/PlanleggerSteg3";

const Solcelleplanlegger = () => {
  const [page, setPage] = useState(0);

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      items: [
        {
          takvinkel: "",
          taktype: "",
          takareal: "",
          takutnyttelse: "",
          strømnett: "",
        },
      ],
    },
  });

  const componentList = [
    <PlanleggerStart
      key={1}
      page={page}
      setPage={setPage}
      control={control}
      register={register}
      handleSubmit={handleSubmit}
    />,
    <PlanleggerSteg2 key={2} page={page} setPage={setPage} />,
    <PlanleggerSteg3 key={3} page={page} setPage={setPage} />,
  ];

  return (
    <Layout>
      <main className=" max-w-4xl mx-auto  my-4 mb-8 min-h-12 bg-[#1b444d] rounded-3xl relative">
        <div className="flex flex-col w-full body-padding">
          {componentList[page]}
        </div>
      </main>
    </Layout>
  );
};

export default Solcelleplanlegger;
