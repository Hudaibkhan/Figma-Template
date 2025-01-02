import Image from "next/image";

export default function Header() {
  return (
    <div className="w-[1440x]">
      <nav className="bg-[#043873] text-white h-24 py-2 px-3 flex justify-around items-center">
        <div className="flex gap-2">
          <Image src={"/images/Logo-main.png"} alt="logo" height={50} width={200} />
        </div>
        <div className="flex justify-between w-[900px] ml-20">
          <div className="flex items-center">
            <ul className="flex space-x-12">
              <li>
                <a href="#!" className="hover:text-[#FFE492]">
                  Solutions &nbsp; ˅
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-[#FFE492]">
                  Products &nbsp; ˅
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-[#FFE492]">
                  Pricing &nbsp; ˅
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-[#FFE492]">
                  Resources &nbsp;˅
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button className="text-white w-[125px] h-[60px] rounded-lg bg-[#FFE492] p-4 hover:text-black">
              Login
            </button>
            <button className="text-white w-[225px] h-[60px] rounded-lg bg-blue-600 p-4 hover:text-black">
              Try Whitepace free ➔
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
