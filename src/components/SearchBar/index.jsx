// import React from 'react'

import { useState } from "react"

function SearchBar(props) {

  const [jobCriteria, setJobCriteria] = useState ({
    title: "",
    location: "",
  })

  const handleChange = (e) => {
      
    setJobCriteria((prevState) => ({

      ...prevState,
      [e.target.name]: e.target.value
    }))

  }

  console.log(jobCriteria)

  const search = async() => {

    await props.fetchJobsCustom(jobCriteria);


  }

  return (
    <div className="flex gap-8 my-10 justify-center px-10">

        <select onChange={handleChange} name = "title" value={jobCriteria.title} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
            <option value="" disabled hidden selected>Role</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Data Science">Data Science</option>
        </select>
        <select onChange={handleChange} name = "location" value={jobCriteria.location} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
            <option value="" disabled hidden selected>Location</option>
            <option value="In-Office">In-Office</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <button onClick={search} className="w-56 bg-blue-500 text-white font-bold rounded-md">Search</button>
      
    </div>
  )
}

export default SearchBar
