"use client"

import { useRouter } from "next/navigation"

export default function MyProfile() {

const router = useRouter()

return (

<div className="min-h-screen bg-[#F5F7F2] p-6">

<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

<h1 className="text-4xl font-bold text-[#4D7C3A] mb-8">
My Profile
</h1>


<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Hometown
</label>

<input
placeholder="Kanpur"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Committee
</label>

<input
placeholder="MIIC"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Summer Internship Company
</label>

<input
placeholder="Deloitte"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


<div className="mb-5">

<label className="block text-black font-semibold mb-2">
Final Placement Company
</label>

<input
placeholder="JP Morgan"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


<div className="mb-5">

<label className="block text-black font-semibold mb-2">
LinkedIn
</label>

<input
placeholder="Paste LinkedIn URL"
className="w-full border p-3 rounded-lg text-black"
/>

</div>


<div className="mb-8">

<label className="block text-black font-semibold mb-2">
Upload Profile Photo
</label>

<input
type="file"
className="text-black"
/>

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
transition-all
"

>

Update Profile

</button>

</div>

</div>

)

}