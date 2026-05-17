"use client"

import { useRouter } from "next/navigation"

export default function ResetPassword(){

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

Create New Password

</h1>

<label className="
block
font-semibold
mb-2
text-black">

New Password

</label>

<input

type="password"

placeholder="Enter new password"

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

Confirm Password

</label>

<input

type="password"

placeholder="Confirm password"

className="
w-full
border
p-3
rounded-lg
mb-6
text-black"
/>


<button

onClick={()=>router.push("/login")}

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
transition-all">

Save Password

</button>

</div>

</div>

)

}