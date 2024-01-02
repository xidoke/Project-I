'use client';


import {signOut} from "next-auth/react";

const Home = () => {

  return (
    <div>
      <button className="bg-blue-300 rounded mx-5 my-5 text-gray-900"
          onClick={()=> signOut()}>
        Sign-Out
      </button>
    </div>
  )
}

export default Home;
