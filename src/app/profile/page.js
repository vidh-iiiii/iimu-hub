"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Profile() {

const router = useRouter()

const [showPassword,setShowPassword]=useState(false)

return (

<div className="min-h-screen bg-[#F5F7F2] p-6 flex justify-center items-center">

<div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">

<h1 className="text-4xl font-bold text-[#4D7C3A] mb-8">
Create Your Profile
</h1>


{/* Full Name */}

<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Full Name
</label>

<input
placeholder="Enter full name"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


{/* Email */}

<div className="mb-5">

<label className="block text-black font-semibold mb-2">
IIMU Email ID
</label>

<input
placeholder="example@iimu.ac.in"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


{/* DOB */}

<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Date of Birth
</label>

<input
type="date"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


{/* Roll Number */}

<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Roll Number
</label>

<input
placeholder="24P123"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


{/* Batch */}

<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Batch
</label>

<input
placeholder="2025-2027"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


{/* Program */}

<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Program
</label>

<select
className="w-full border p-3 rounded-lg text-black"
>

<option>Select Program</option>
<option>MBA (2 Year)</option>
<option>DEM (1 Year)</option>
<option>GSCM (1 Year)</option>
<option>PhD</option>

</select>

</div>


{/* Username */}

<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Create Username
</label>

<input
placeholder="Choose username"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


{/* Password */}

<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Create Password
</label>

<input
type={showPassword ? "text":"password"}
placeholder="Create password"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


{/* Confirm Password */}

<div className="mb-3">

<label className="block text-black font-semibold mb-2">
Confirm Password
</label>

<input
type={showPassword ? "text":"password"}
placeholder="Confirm password"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


<div className="mb-8">

<label className="text-black cursor-pointer">

<input
type="checkbox"
className="mr-2"
onChange={()=>setShowPassword(!showPassword)}
/>

Show Password

</label>

</div>



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
transition-all
"

>

Create Account

</button>

</div>

</div>

)

}