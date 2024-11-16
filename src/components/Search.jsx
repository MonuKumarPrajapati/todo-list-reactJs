import React from "react";

const Search = ({searchTxt, setSearchTxt, handleSearch}) => {
    return <>
        <div className=" w-[512px] flex gap-10 justify-between">

        <input
            className="  py-2 px-3 my-2 w-[359px] text-black rounded-[14px] outline-none font-semibold "
            type="text"
            placeholder="Search your Todo.."
            value={searchTxt}
            
            onChange={(e)=>{setSearchTxt(e.target.value.toLowerCase())}}
        />
        <button className="py-1 px-2 my-2 rounded-[6px] text-black bg-slate-200" onClick={()=>handleSearch(searchTxt)}>Search</button>
        </div>
    </>;
};

export default Search;
