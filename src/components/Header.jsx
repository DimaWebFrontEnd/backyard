import bg_img from "../assets/bg_img.png";
import eclipse from "../assets/eclipse.png";
import logo from "../assets/logo.png"


const Header = () => {


  return (
    <header className="flex items-center relative w-full h-[112px]" >

      {/* Squares BG */}
      <figure className="absolute -top-38 -left-110 rotate-90 w-300 h-[380%] select-none mix-blend-color-dodge xs:-left-80 s:rotate-none s:-left-70 s:-top-27 s:w-[180%] md:w-[160%] l:w-[141%]">
         <img className=" w-full select-none" src={bg_img} alt="Squares Image" />  
      </figure>  

      {/* Eclipse BG */}
     { <figure className="absolute top-[271px] left-1/2 -translate-x-1/2 w-161 h-93 s:top-[171px]">
        <img className="block w-full h-full" src={eclipse} alt="Eclipse" />
      </figure>}

     { <figure className="block absolute -top-20 left-0  w-[140%] h-93 s:hidden">
        <img className="block w-full h-full" src={eclipse} alt="Eclipse" />
      </figure>}

      {/* Header Logo/Nav Container */}
      <section className="flex items-center justify-between w-full z-2  md:justify-center">

        {/* Logo Container */}
        <section className="static left-0 flex items-center w-33 h-11 px-[11px] md:absolute">
          <figure className="w-[25px] h-[25px]">
            <img className="w-full" src={logo} alt="Logo" />
          </figure>
          <div className="ml-2.5">
            <p className="text-base">Backyard</p>
          </div>
        </section>

        {/* Navbar Container */}
        <nav className="hidden bg-[#F3F4F6] p-[3px] items-center w-97 h-10 rounded-3xl border-1 border-[#E1E1E275] cursor-pointer  md:w-114 md:h-11 sm:flex">
          <ul className="flex justify-between items-center w-full text-[11px] text-[#AEB0B1] md:text-[13px]">
            <li className="flex justify-center items-center bg-[#303030] text-white h-7.75 px-4 rounded-3xl md:h-9.5">Home</li>
            <li>About</li>
            <li>How it works</li>
            <li>Token design</li>
            <li className="pr-4">YARD flywheel</li>
          </ul>
        </nav>

        {/* Connect Button (Enable Only If Screen < 768px)*/}
        <button className="hidden justify-center items-center w-18.75 h-7.75 ml-2.5 bg-[#303030] text-[11px] text-[#FBFBFC] rounded-full cursor-pointer sm:max-md:flex "> {/* md:hidden */}
          Connect
        </button>

        {/* Menu Burger */}
        <button className="flex items-center justify-center min-w-10 h-10 bg-[#F6F7F8] border-1 border-[#DEDEE373] rounded-xl cursor-pointer sm:hidden">
          <div className="flex flex-col justify-between items-center w-3.75 h-3">
            <div className="w-full h-0.5 bg-[#525352]"></div>
            <div className="w-2.25 h-0.5 bg-[#525352]"></div>
            <div className="w-full h-0.5 bg-[#525352]"></div>
          </div>

        </button>

      </section>
    </header>
  )
}

export default Header
