"use client"

import { useRouter } from "next/navigation"

export default function Login(){

const router = useRouter()

return(

<div className="
min-h-screen
bg-[#F5F7F2]
flex
items-center
justify-center
px-4">

<div className="
bg-white
w-full
max-w-md
p-8
rounded-2xl
shadow-xl">

<h1 className="
text-3xl
font-bold
text-[#4D7C3A]
mb-6">

Login

</h1>


<label className="
block
font-semibold
mb-2
text-black">

Username

</label>

<input

placeholder="Enter username"

className="
w-full
border
p-3
rounded-lg
mb-5
text-black"
/>


<label className="
block
font-semibold
mb-2
text-black">

Password

</label>

<input

type="password"

placeholder="Enter password"

className="
w-full
border
p-3
rounded-lg
mb-2
text-black"
/>


<div className="
text-right
mb-6">

<button

onClick={()=>router.push("/forgotpassword")}

className="
text-[#4D7C3A]
text-sm
cursor-pointer
hover:underline">

Forgot Password?

</button>

</div>


<button

onClick={()=>router.push("/dashboard")}

className="
w-full
bg-[#4D7C3A]
text-white
p-4
rounded-lg
font-semibold
cursor-pointer
hover:bg-[#5E8F47]
hover:scale-[1.02]
active:scale-[0.98]
transition-all
duration-300">

Login

</button>

</div>

</div>

)

}