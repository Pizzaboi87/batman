import HandleMovieData from "./handleMovieData/HandleMovieData";
import useGetData from "../common/useGetData/useGetData";
import Loading from "../common/loading/Loading";
import NotFound from "../../NotFound";
import "./movies.css";

const Movies = () => {
  const url = `https://batserver.vercel.app/movies`;
  const { data, isLoading, error } = useGetData(url);
  if (error) return <NotFound />;
  if (isLoading) return <Loading img={2} />;

  return (
    <div className="content">
      <h1 className="title">Movies featuring Batman</h1>
      <HandleMovieData data={data} />
    </div>
  );
};

export default Movies;
