import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, img}) {
  return (
    <div key={id} className="flex flex-col text-center justify-center items-center">

      <Link
        className="py-2 px-3 transition ease-out duration-1000 hover:text-slate-400 m-4 text-white rounded-3xl text-lg"
        to={`/projects/${id}`}
        style={{ backgroundColor: "#312e81" }}
      >
        <img src={img} alt={`Logo do Projeto ${title}`} className="w-50 h-40 rounded-3xl" />
      </Link>
    </div>
  );
}
