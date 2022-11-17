import { Link } from "react-router-dom"
export default function Home(){
    return (
      <section className="w-full">
        <div className="flex py-4 justify-center border text-center bg-blue-400 ">
        <Link to="/articles" exact>
          <h2 className="text-white font-bold mx-4">Articles</h2>
        </Link>
        <Link to="/help" exact>
          <h2 className="text-white font-bold">Help</h2>
        </Link>
        </div>
        <img className="w-full m-auto" src="/images/welcome.png" alt="" />
      </section>
    );
}