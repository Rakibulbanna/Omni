import Image from "next/image";
import Link from "next/link";
import { FaRegAddressCard } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocation } from 'react-icons/io5';
import { AiOutlineLogin } from 'react-icons/ai';

function Header({ setOpen, open }) {

  return (

    <div
      className="flex justify-between  bg-sky-800 text-sky-50 "
    >

      <nav
        className=" sticky top-0 bg-sky-700 px-6 py-2.5 transition duration-150"
      >
        <button
          onClick={() => setOpen(!open)}

          className="sticky top-0 shadow z-[20] shadow-sky-900 bg-sky-700 px-3  py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:shadow-lg focus:bg-sky-900 "
        >
          <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd" />
            </svg>
          </span>
        </button>
      </nav>

      <div className=" flex">

        <Link href={``} className=" px-10 py-3 border-r hover:bg-sky-900 duration-300 cursor-pointer flex gap-2"> Accounts</Link>
        <Link href={``} className=" px-10 py-3 border-r hover:bg-sky-900 duration-300 cursor-pointer flex gap-2"> <AiOutlineLogin className=" mt-1" /> Logout</Link>
        <Link href="" className=" px-10 py-3 border-r hover:bg-sky-900 duration-300 cursor-pointer flex gap-2"> Modules</Link>
      </div>
    </div>


  )
}

export default Header;
