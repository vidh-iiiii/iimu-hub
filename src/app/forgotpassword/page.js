"use client"

import { useRouter } from "next/navigation"

export default function ForgotPassword(){

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
p-8
rounded-2xl
shadow-xl">

<h1 className="
text-3xl
font-bold
text-[#4D7C3A]
mb-4">

Reset Password

</h1>

<p className="
text-gray-600
mb-6">

Enter your IIMU email

</p>

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

onClick={()=>router.push("/forgotverify")}

className="
w-full
bg-[#4D7C3A]
text-white
p-4
rounded-lg
cursor-pointer
hover:bg-[#5E8F47]
hover:scale-[1.02]
transition-all">

Send OTP

</button>

</div>

</div>

)

}