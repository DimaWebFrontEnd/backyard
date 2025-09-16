import bg_img from "../assets/bg_img.png";
import eclipse from "../assets/eclipse.png";
import logo from "../assets/logo.png"


const Header = () => {


  return (
    <header className="flex items-center relative w-full h-[112px]" >

      {/* Squares BG */}
      <figure className="absolute -top-27 -left-70 w-[150%] select-none">
         <img className="mix-blend-color-dodge w-full select-none" src={bg_img} alt="Squares Image" />  
      </figure>  
      {/* <div className="bg-white absolute top-43 left-1/2 -translate-x-1/2 w-161.25 h-93 radius-50 border-1 rounded-full"></div> */}

      {/* Eclipse BG */}
      <figure className="absolute top-[171px] left-1/2 -translate-x-1/2 w-161 h-93 ">
        <img className="block w-full h-full" src={eclipse} alt="Eclipse" />
      </figure>

      {/* Header Logo/Nav Container */}
      <section className="flex items-center justify-center w-full z-2 cursor-pointer">

        {/* Logo Container */}
        <section className="absolute left-0 flex items-center justify-between w-33 h-11 px-[11px]">
          <figure className="w-[25px] h-[25px]">
            <img className="w-full" src={logo} alt="Logo" />
          </figure>
          <div className="">
            <p className="text-base">Backyard</p>
          </div>
        </section>

        {/* Nav Container */}
        <nav className="bg-[#F3F4F6] p-[3px] flex items-center w-114 h-11 rounded-3xl border-1 border-[#E1E1E275]">
          <ul className="flex justify-between items-center w-full text-sm text-[#AEB0B1] ">
            <li className="bg-[#303030] text-white px-4 py-2 rounded-3xl">Home</li>
            <li>About</li>
            <li>How it works</li>
            <li>Token design</li>
            <li className="pr-4">YARD flywheel</li>
          </ul>
        </nav>

      </section>
    </header>
  )
}

export default Header
