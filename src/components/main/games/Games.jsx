import HandleGameData from "./handleGameData/HandleGameData";
import useGetData from "../common/useGetData/useGetData";
import Loading from "../common/loading/Loading";
import NoPage from "../../nopage/Nopage";

const Games = () => {
  const url = "https://batserver.vercel.app/games";

  const { data, isLoading, error } = useGetData(url);
  if (error) return <NoPage error={error} />;
  if (isLoading) return <Loading img={2} />;

  return (
    <>
      <h1 className="title">Games featuring Batman</h1>
      <HandleGameData gameData={data.data} />
    </>
  );
};

export default Games;
