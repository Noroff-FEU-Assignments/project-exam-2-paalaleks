import { useState } from "react";
import Layout from "../components/Layout";
import PlanleggerStart from "../components/PlanleggerStart";
import PlanleggerSteg2 from "../components/PlanleggerSteg2";
import PlanleggerSteg3 from "../components/PlanleggerSteg3";

const Solcelleplanlegger = () => {
  const [page, setPage] = useState(0);

  const componentList = [
    <PlanleggerStart key={1} page={page} setPage={setPage} />,
    <PlanleggerSteg2 key={2} page={page} setPage={setPage} />,
    <PlanleggerSteg3 key={3} page={page} setPage={setPage} />,
  ];

  return (
    <Layout>
      <main className=" max-w-4xl mx-auto body-padding mt-4 mb-8">
        <div className="rounded-3xl  shadow-2xl bg-[#1b444d] py-4">
          {componentList[page]}
        </div>
      </main>
    </Layout>
  );
};

export default Solcelleplanlegger;
