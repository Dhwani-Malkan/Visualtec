import { Stack } from "@mui/material";
const page2 = () => {
  return (
      <Stack className="page2text" direction="column" spacing={0} sx={{justifyContent: "space-between", alignItems: "center",}}>
        <div className='inline-block top-0 right-0 mb-10 justify-between flex-col p2t1'>
          <div className='relative inline-block flex text-5xl md:text-6xl font-bold text-[#F67B42]' >❝</div>
          <div className='relative inline-block flex'>Every space has its own story &<br /> our job is to make it unforgettable.</div>
        </div>
        <div className='lg:w-[60%] md:w-[80%] sm:w-[100%] h-auto relative flex justify-center p-6 sm:p-2'>
          <img className="center w-[80%] h-auto inline-block image1" alt="image" src=".\assets\1.svg"/>
        </div>
        <div className="p2t2 w-[50dvw] sm:w-[80dvw]">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 p-4 font-medium text-white">Crafting imagery for industry leaders</h1><br/>
          <ul className="mb-8 list-inside list-disc">
            <li>For Architects</li>
            <li>For Developers</li>
            <li>For Interior Designers</li>
            <li>For Marketing Agency</li>
          </ul>
        </div>
      </Stack>
  )
}

export default page2;