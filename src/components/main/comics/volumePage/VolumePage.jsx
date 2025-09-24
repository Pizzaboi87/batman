import React from 'react';
import useGetData from '../../common/useGetData/useGetData';
import Loading from '../../common/loading/Loading';
import NotFound from '../../../NotFound';
import { useParams, Link } from 'react-router-dom';
import './volumePage.css';

const VolumePage = () => {
    const { page } = useParams();
    const volumePage = (page - 1) * 100;
    const url = `https://batserver.vercel.app/comicvine/volumes/1699/filter=name:batman&field_list=image,name,id&offset=${volumePage}`;

    const { data, isLoading, error } = useGetData(url);

    if (error) return <NotFound />;
    if (isLoading) return <Loading img={2} />;

    return (
        <div className="content">
            <h1 className="title">Comic Volumes</h1>
            <div className="volume-grid">
                {data.results.map((volume) => (
                    <Link to={`/comics/vol_${volume.id}`} key={volume.id} className="volume-card">
                        <img src={volume.image.small_url} alt={volume.name} />
                        <div className="volume-info">
                            <h3>{volume.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VolumePage;