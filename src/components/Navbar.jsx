

const Navbar = () => {

   return (
      <nav className="hidden bg-[#F3F4F6] p-[3px] items-center w-97 h-10 ml-0 rounded-3xl 
                      border-1 border-[#E1E1E275] cursor-pointer md:ml-10 md:w-114 md:h-11 sm:flex">

         <ul className="flex justify-between items-center w-full text-[11px] text-[#AEB0B1] md:text-[13px]">
            <li className="flex justify-center items-center bg-[#303030] text-white h-7.75 px-4 rounded-3xl md:h-9.5">Home</li>
            <li>About</li>
            <li>How it works</li>
            <li>Token design</li>
            <li className="pr-4">YARD flywheel</li>
          </ul>
      </nav>
  )
}

export default Navbar
