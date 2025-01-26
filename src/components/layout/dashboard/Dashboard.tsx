import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  const loading  = false
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className=" gap-5 flex bg-[#F5F7FA] overflow-hidden">
      {/* Start Sidebar Area */}
      <div>
        <div
          className={`${isOpen ? "w-0 md:w-[300px]" : "w-[300px] md:w-20"
            } absolute md:relative top-0 overflow-hidden transition-all duration-500 shadow-lg  border-neutral-300 z-10 bg-white`}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
        </div>
      </div>
      {/* End Side bar Area */}

      {/* Start Header Area */}
      <div className="flex-1 flex flex-col  sm:ml-0  ml-3 mr-5 ">
        <div>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div>
          <Outlet />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
      {/* End Header Area */}
    </div>
  )
}

export default Dashboard
