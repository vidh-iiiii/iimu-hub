"use client"

import { useRouter } from "next/navigation"

export default function Landing(){

const router = useRouter()

return(

<div className="
min-h-screen
bg-[#F5F7F2]
flex
justify-center
items-center
px-4">

<div className="
bg-white
w-full
max-w-md
rounded-2xl
shadow-xl
p-8
text-center">

<h1 className="
text-4xl
font-bold
text-[#4D7C3A]
mb-3">

IIMU Hub

</h1>

<p className="
text-gray-600
mb-8">

Student Network • Events • Directory • Competitions

</p>


<button

onClick={()=>router.push("/login")}

className="
w-full
bg-[#4D7C3A]
text-white
p-4
rounded-lg
font-semibold
mb-4
cursor-pointer
hover:bg-[#5E8F47]
hover:scale-[1.02]
active:scale-[0.98]
transition-all
duration-300">

Login

</button>


<button

onClick={()=>router.push("/signup")}

className="
w-full
bg-[#D7D93D]
text-black
p-4
rounded-lg
font-semibold
cursor-pointer
hover:bg-[#E8EA62]
hover:scale-[1.02]
active:scale-[0.98]
transition-all
duration-300">

Sign Up

</button>

</div>

</div>

)

}