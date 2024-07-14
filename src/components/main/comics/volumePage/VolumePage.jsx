import useGetData from "../../common/useGetData/useGetData";
import CreateCovers from "../createCovers/CreateCovers";
import Loading from "../../common/loading/Loading";
import { useParams } from "react-router-dom";
import NoPage from "../../../nopage/Nopage";
import "./volumePage.css";

const VolumePage = () => {
  const route = useParams();
  const volumePage = (route.page - 1) * 100;
  const url = `https://batserver.vercel.app/comicvine/volumes/1699/filter=name:batman&field_list=image,name,api_detail_url&offset=${volumePage}`;

  const { data, isLoading, error } = useGetData(url);
  if (error) return <NoPage error={error} />;
  if (isLoading) return <Loading img={2} />;

  return (
    <>
      <h1 className="title">Comic Volumes</h1>
      <CreateCovers data={data.results} route={route} isVolumeCover={true} />
    </>
  );
};

export default VolumePage;
