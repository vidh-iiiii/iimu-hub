"use client"

import { useRouter } from "next/navigation"

export default function Signup(){

const router=useRouter()

return(

<div className="min-h-screen bg-[#F5F7F2] flex justify-center items-center px-4">

<div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

<h1 className="text-3xl font-bold text-[#4D7C3A] mb-6">

Sign Up

</h1>

<label className="block text-black font-semibold mb-2">

IIMU Email

</label>

<input
placeholder="example.24@iimu.ac.in"

className="
w-full
border
p-3
rounded-lg
mb-6
text-black"
/>

<button

onClick={()=>router.push("/signupverify")}

className="
w-full
bg-[#4D7C3A]
text-white
p-4
rounded-lg
cursor-pointer
hover:bg-[#5E8F47]
hover:scale-[1.02]
transition">

Send OTP

</button>

</div>

</div>

)

}