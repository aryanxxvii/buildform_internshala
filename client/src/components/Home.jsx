import React from "react"
import { Link } from "react-router-dom"
import VisibilityIcon from "@mui/icons-material/Visibility"
import EditIcon from "@mui/icons-material/Edit"
const Home = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      <h1 className="text-3xl md:text-5xl text-purple-800 font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800 ">
        Welcome to Buildform
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Link to="/form/edit">
          <div className="h-40 w-80 md:h-80 md:w-80 bg-purple-500 hover:bg-purple-600 text-white font-semibold gap-4 py-2 px-4 rounded-md flex flex-col items-center justify-center text-2xl">
            <EditIcon style={{ fontSize: 48 }} />
            Edit
          </div>
        </Link>
        <Link to="/form/view">
          <div className="w-80 h-40 md:h-80 md:w-80 bg-purple-500 hover:bg-purple-600 text-white gap-4 font-semibold py-2 px-4 rounded-md flex flex-col items-center justify-center text-2xl">
            <VisibilityIcon style={{ fontSize: 48 }} />
            View
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
