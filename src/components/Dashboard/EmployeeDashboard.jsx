import { memo, useState } from "react";
import Tasklist from "../../components/TaskMapping/Tasklist";
import TaskMapping2 from "../TaskMapping/TaskMapping2";
import TaskMappingMobile from "../TaskMapping/TaskMappingMobile";
import Drawing from "../TaskMapping/Drawing";

const EmployeeDashboard = ({ user }) => {
  return (
    <>
      <div>
        <div className="main  lg:flex lg:flex-row xl:flex xl:flex-col lg:mx-auto xl:gap-0 flex flex-col gap-5 ">
          <div className="lg:flex lg:mx-auto lg:mb-auto">
            <Tasklist user={user} />
          </div>
          <div className="lg:mt-10 xl:mt-0 lg:h-full lg:w-full  ">
            <TaskMapping2 />
            <TaskMappingMobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(EmployeeDashboard);
