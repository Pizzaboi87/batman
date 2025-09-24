import HandleGameData from "./handleGameData/HandleGameData";
import useGetData from "../common/useGetData/useGetData";
import Loading from "../common/loading/Loading";
import NotFound from "../../NotFound";

const Games = () => {
  const url = "https://batserver.vercel.app/games";

  const { data, isLoading, error } = useGetData(url);
  if (error) return <NotFound />;
  if (isLoading) return <Loading img={2} />;

  return (
    <div className="content">
      <h1 className="title">Games featuring Batman</h1>
      <HandleGameData gameData={data.data} />
    </div>
  );
};

export default Games;
