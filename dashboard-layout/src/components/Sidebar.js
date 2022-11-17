import { BiSupport } from "react-icons/bi";
import { RiArticleFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { Link, } from "react-router-dom";

export default function Sidebar() {
  return (
      <nav className="bg-slate-200 w-1/3 h-screen">
        <ul className="list-none flex  hover:bg-slate-300">
          <li className="text-2xl my-2">
            <FaHome className="hover:text-blue-500" />
          </li>
          <li>
            <Link to="/" exact className="mx-8 text-2xl my-2">Home</Link>
          </li>
        </ul>
        <ul className="list-none flex  hover:bg-slate-300">
          <li className="text-2xl my-2">
            <RiArticleFill className="hover:text-blue-500" />
          </li>
          <li>
            <Link to="/articles" exact className="mx-8 text-2xl my-2">Articles</Link>
          </li>
        </ul>
        <ul className="list-none flex  hover:bg-slate-300 ">
          <li className="text-2xl my-2">
            <BiSupport className="hover:text-blue-500" />
          </li>
          <li>
            <Link to="/help" exact className="mx-8 text-2xl my-2">Help & Support</Link>
          </li>
        </ul>
      </nav>
  );
}