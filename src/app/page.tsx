'use client'
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import FormSearch from "./components/formSearch";
import Perfil from "./components/perfil";
import { useState } from "react";
import NotFoundMsg from "./components/notFoundMsg";

export default function Home() {

  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <div className="bg-black w-5/6 min-h-1/2 flex gap-10 flex-col p-10">
      <section >
        <div className="flex gap-2 justify-center text-6xl mb-10 ">
          <FaGithub></FaGithub>
          <h1>
            Perfil <strong>GitHub</strong>
          </h1>
        </div>
        <FormSearch setUser={setUserData} setError={setError} setLoading={setLoading}></FormSearch>
      </section>
      <div>
          {loading && (
            <div className="flex justify-center items-center h-20">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          )}
          {error && <NotFoundMsg></NotFoundMsg>}
          {userData && <Perfil userData={userData}></Perfil>}
        </div>  
    </div>
  );
}
