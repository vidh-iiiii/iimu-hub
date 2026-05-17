"use client"

import { useRouter } from "next/navigation"

export default function Dashboard(){

const router = useRouter()

const sections = [

{
title:"📅 Events",
description:"Discover campus events and club activities"
},

{
title:"🏆 Case Competitions",
description:"Find competitions and connect with teammates"
},

{
title:"👥 Student Directory",
description:"Search students by company, hometown or profile"
}

]

return(

<main className="min-h-screen bg-[#F5F7F2]">

{/* Navbar */}

<div className="
bg-[#4D7C3A]
text-white
p-4 md:p-6">

<div className="
flex
justify-between
items-center">

<h1 className="
text-2xl
md:text-3xl
font-bold">

IIMU Hub

</h1>


<div className="flex gap-3">

<button
onClick={()=>router.push("/myprofile")}
className="
bg-white
text-[#4D7C3A]
px-5
py-3
rounded-lg
font-semibold
cursor-pointer
hover:bg-gray-100
hover:scale-[1.03]
transition-all"
>
My Profile
</button>


<button

onClick={()=>router.push("/login")}

className="
bg-[#D7D93D]
text-black
px-4
py-2
rounded-lg
font-semibold
cursor-pointer
hover:scale-[1.05]
hover:brightness-95
transition-all
duration-300">

Logout

</button>

</div>

</div>

</div>


{/* Welcome section */}

<div className="
px-6
py-10
text-center">

<h1 className="
text-3xl
md:text-5xl
font-bold
text-[#4D7C3A]
mb-4">

Welcome to IIMU Hub

</h1>

<p className="
text-gray-700
mb-8">

One place for events, competitions and networking

</p>


<input

placeholder="Search students, companies, hometown..."

className="
w-full
max-w-2xl
border
p-4
rounded-xl
shadow-md
text-black"
/>

</div>


{/* Dashboard cards */}

<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
px-6
pb-10">

{

sections.map((item,index)=>(

<div

key={index}

className="
bg-white
rounded-2xl
shadow-lg
p-8
cursor-pointer
hover:scale-[1.03]
hover:shadow-xl
transition-all">

<h2 className="
text-2xl
font-bold
text-[#4D7C3A]
mb-4">

{item.title}

</h2>

<p className="text-gray-700">

{item.description}

</p>

</div>

))

}

</div>

</main>

)

}
