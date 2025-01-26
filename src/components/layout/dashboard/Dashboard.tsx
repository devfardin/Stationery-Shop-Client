import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./sidebar/Sidebar";


const Dashboard = () => {
  
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className=" gap-0 md:gap-5 flex bg-[#F5F7FA] overflow-hidden">
      {/* Start Sidebar Area */}
     
      <div>
        <div
          className={`${isOpen ? "w-0 md:w-[260px]" : "w-[260px] md:w-20"
            }  ${isOpen ? '' : "-left-[270px] transition-all duration-300"} absolute md:left-0 md:right-0 md:relative top-0 overflow-hidden transition-all duration-500 shadow-lg  border-neutral-300 z-10 bg-white`}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
        </div>
      </div>
      {/* End Side bar Area */}

      {/* Start Header Area */}
      <div className="flex-1 flex flex-col  sm:ml-0  ml-3 mr-5 h-screen overflow-y-scroll">
        <div>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div>
          <Outlet />
        </div>

        <div className="mt-auto mb-2">
          <Footer />
        </div>

      </div>
      {/* End Header Area */}
    </div>
  )
}

export default Dashboard
