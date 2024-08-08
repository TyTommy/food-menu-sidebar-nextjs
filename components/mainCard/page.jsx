import Image from "next/image"

const MainCard = () => {
  return (
    <div className='w-[98%] h-[400px] flex items-center justify-around border p-5 rounded-3xl bg-[#ffffff61] border-[#fff]'>
      <div className='w-[550px]'>
        <h1 className='text-5xl'>It’s not just Food, it’s an Experience </h1>
        <p className=" text-[#676161]">Order Your Favourite food & enjoy your day</p>
      </div>
      <Image src="/mainfood.png" alt="logo" width={500} height={500} />
    </div>
  )
}

export default MainCard