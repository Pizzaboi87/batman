import useGetData from "../../common/useGetData/useGetData";
import CreateCovers from "../createCovers/CreateCovers";
import Loading from "../../common/loading/Loading";
import { useParams } from "react-router-dom";
import NoPage from "../../../nopage/Nopage";

const IssuePage = () => {
  const route = useParams();
  if (!route.issue) route.issue = 1;
  const volumePage = (route.issue - 1) * 100;
  const url = `https://batserver.vercel.app/comicvine/issues/1699/filter=volume:${route.volumeID}&field_list=image,name,api_detail_url,description,volume&offset=${volumePage}`;

  const { data, isLoading, error } = useGetData(url);
  if (error) return <NoPage error={error} />;
  if (isLoading) return <Loading img={2} />;

  return data.results.length == 0 ? (
    <>
      <h1 className="title">Empty Volume</h1>
      <h2 className="noMatch onlyError">
        The Volume is empty,
        <br />
        or the ComicVine API <br />
        returned with zero result.
      </h2>
    </>
  ) : (
    <>
      <h1 className="title">{data.results[0].volume.name}</h1>
      <CreateCovers data={data.results} isVolumeCover={false} />
    </>
  );
};

export default IssuePage;
