import HandleMovieData from "./handleMovieData/HandleMovieData";
import useGetData from "../common/useGetData/useGetData";
import Loading from "../common/loading/Loading";
import NoPage from "../../nopage/Nopage";
import "./movies.css";

const Movies = () => {
  const url = `https://batserver.vercel.app/movies`;
  const { data, isLoading, error } = useGetData(url);
  if (error) return <NoPage error={error} />;
  if (isLoading) return <Loading img={2} />;

  return (
    <>
      <h1 className="title">Movies featuring Batman</h1>
      <HandleMovieData data={data} />
    </>
  );
};

export default Movies;
