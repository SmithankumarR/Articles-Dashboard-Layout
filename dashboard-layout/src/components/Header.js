import { FaBuffer } from "react-icons/fa";
export default function Header() {
  return (
    <header className="bg-blue-800 p-4">
      <nav className="container  ">
        <ul className="flex">
          <li className="text-white text-3xl">
            <FaBuffer />
          </li>
          <strong className=" mx-5 text-lg text-white">Dashboard</strong>
        </ul>
      </nav>
    </header>
  );
}

