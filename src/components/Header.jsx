import bg_img from "../assets/bg_img.png";
import eclipse from "../assets/eclipse.png";
import logo from "../assets/logo_full.png"
import Navbar from "./Navbar";


const Header = () => {


  return (
    <header className="flex items-center relative w-full h-[112px]" >

      {/* Squares BG */}
      <figure className="absolute -top-38 -left-110 rotate-90 w-300 h-[380%] select-none mix-blend-color-dodge xs:-left-80 s:rotate-none s:-left-70 s:-top-27 s:w-[180%] md:w-[160%] l:w-[141%]">
         <img className=" w-full select-none" src={bg_img} alt="Squares Image" />  
      </figure>  

      {/* Eclipse BG */}
      <figure className="absolute top-[271px] left-1/2 -translate-x-1/2 w-161 h-93 s:top-[171px]">
        <img className="block w-full h-full" src={eclipse} alt="Eclipse" />
      </figure> 

      <figure className="block absolute -top-20 left-0  w-[140%] h-93 s:hidden">
        <img className="block w-full h-full" src={eclipse} alt="Eclipse" />
      </figure>

      {/* Header Logo/Nav Container */}
      <section className="flex items-center justify-between w-full z-2  md:justify-center">

        {/* Logo Container */}
        <section className="static left-0 flex items-center h-11 px-[11px] md:absolute">
          <figure className="w-33 ">
            <img className="w-full" src={logo} alt="Logo" />
          </figure>
        </section>

        {/* Navbar Container */}

        <Navbar />

        {/* Connect Button (Enable Only If Screen < 768px)*/}
        <button className="hidden justify-center items-center w-18.75 h-7.75 ml-2.5 bg-[#303030] text-[11px] text-[#FBFBFC] rounded-full cursor-pointer sm:max-md:flex "> {/* md:hidden */}
          Connect
        </button>

        {/* Menu Burger */}
        <div className="flex items-center justify-center min-w-10 h-10 bg-[#F6F7F8] border-1 border-[#DEDEE373] rounded-xl cursor-pointer sm:hidden">
          <div className="flex flex-col justify-between items-center w-3.75 h-3">
            <div className="w-full h-0.5 bg-[#525352]"></div>
            <div className="w-2.25 h-0.5 bg-[#525352]"></div>
            <div className="w-full h-0.5 bg-[#525352]"></div>
          </div>

        </div>

      </section>
    </header>
  )
}

export default Header
