import React from "react";
import Header from "../Components/FeeStructureComponents/Header";
import Cards from "../Components/FeeStructureComponents/Cards";
import Features from "../Components/FeeStructureComponents/Features";
import FeeTable from "../Components/FeeStructureComponents/FeeTable";
import Notice from "../Components/FeeStructureComponents/Notice";

// Is there any flaw or erro the follow components
function FeeStructure({ EXAM,Content }) {
  return (
    <>
      {/* Fee Structure Section  */}
      <div className=" border-2 border-dashed border-black mx-4 my-4">
        <Header EXAM={EXAM} Content={Content} />
        <Cards />
        <Features />
        <FeeTable />
        <Notice />
      </div>
      {/* Footer  */}
    </>
  );
}

export default FeeStructure;
