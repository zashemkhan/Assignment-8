import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import AllApplications from "./AllApplications";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

import { Link } from "react-router";
import { useEffect } from "react";

const AllApps = () => {
  const [apps,loading] = useApps();

  const [search, setSearch] = useState("");
  const [searchLoading,setSearchLoading]=useState(false)
  const [searchedApps,setSearchedApps]=useState([])


  useEffect(()=>{
    if (loading||!apps.length) return
    setSearchLoading(true)
    const timer= setTimeout(()=>{
      const term = search.trim().toLocaleLowerCase()
      const filtered =term 
      ? apps.filter((app)=>app.title?.toLocaleLowerCase().includes(term)
    )
    :apps;
    setSearchedApps(filtered)
    setSearchLoading(false)
    },500)
  return ()=>clearTimeout(timer)
  },[search,apps,loading])

  
  if (loading) return <LoadingSpinner/>;


  return (
    <div className="   lg:py-20  py-10 ">
      <div className=" max-w-11/12 mx-auto">
        <div className="pb-10 space-y-3">
          <h2 className="text-center text-3xl lg:text-4xl text-[#001931] font-bold">
            Our All Applications
          </h2>
          <p className="text-center text-sm lg:text-xl  text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
         
        </div>
        <div className="flex justify-between items-center py-4">
          <h3 className="lg:text-xl text-lg font-semibold ext-[#001931]">
            <span>({searchedApps.length})</span> Apps Found
          </h3>
          <label className="input bg-transparent w-50 lg:w-xl ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      {
        searchLoading?  <div> <LoadingSpinner/>
        </div>:  searchedApps.length===0 ? (
         <div className="text-center py-20 space-y-10 ">
          <p className="text-6xl font-bold">No apps found </p>
          <Link 
         to="/apps"
          className=" bg-gradient-to-l from-[#9f62f2] to-[#632ee3] px-6 py-3 rounded-lg text-[#ffffff] font-semibold"
        >
          Show All Apps
        </Link>
         </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8  ">
            {searchedApps.map((app) => (
              <AllApplications key={app.id} app={app}></AllApplications>
            ))}
          </div>
        )}
       
      </div>
    </div>
  );
};

export default AllApps;
