
import Image from "next/image"

export default function Perfil({userData}: any){
    return(
        <article className="flex p-4  gap-4 bg-white text-black rounded-3xl">
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-3 border-blue-700">
                <Image
                    className="object-contain"
                    src={userData.avatar_url}
                    fill    
                    alt="profile picture"
                />
            </div>  
            <div className="self-center">   
                <h2 className="text-blue-700 font-bold mb-3 text-xl">{userData.name}</h2>
                <p>
                    {userData.bio}  
                </p>
            </div>
        </article>
    )
}