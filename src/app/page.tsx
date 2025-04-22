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
  
  return (
    <div className="bg-black w-5/6 min-h-1/2 flex gap-10 flex-col p-10">
      <section >
        <div className="flex gap-2 justify-center text-6xl mb-10 ">
          <FaGithub></FaGithub>
          <h1>
            Perfil <strong>GitHub</strong>
          </h1>
        </div>
        <FormSearch setUser={setUserData} setError={setError}></FormSearch>
      </section>
      <div>
          {error && <NotFoundMsg></NotFoundMsg>}
          {userData && <Perfil userData={userData}></Perfil>}
        </div>  
    </div>
  );
}
