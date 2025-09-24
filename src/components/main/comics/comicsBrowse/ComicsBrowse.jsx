import React, { useState, useEffect } from 'react';
import useGetData from '../../common/useGetData/useGetData';
import Loading from '../../common/loading/Loading';
import NotFound from '../../../NotFound';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../../common/pagination/Pagination';
import './comicsBrowse.css';

const ImageWithLoader = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="image-container">
            {loading && <div className="loader"></div>}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoading(false)}
                style={{ display: loading ? 'none' : 'block' }}
            />
        </div>
    );
};

const ComicsBrowse = () => {
    const { page = '1' } = useParams();
    const offset = (parseInt(page) - 1) * 100;
    const url = `https://batserver.vercel.app/comicvine/volumes/1699/filter=name:batman&field_list=name,image,publisher,start_year,count_of_issues&offset=${offset}`;
    const { data, isLoading, error } = useGetData(url);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Bangers&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    if (error) return <NotFound />;
    if (isLoading) return <Loading />;

    const totalPages = Math.ceil(data.number_of_total_results / 100);

    return (
        <div className="content">
            <h1 className="title">Browse Batman Comics</h1>
            <div className="volume-grid">
                {data.results.map((volume) => (
                    <Link to={`/comics/vol_${volume.id}`} key={volume.id} className="volume-card">
                        <ImageWithLoader src={volume.image.small_url} alt={volume.name} />
                        <div className="volume-info">
                            <h3>{volume.name}</h3>
                            <div>
                                <p><strong>Publisher:</strong> {volume.publisher?.name}</p>
                                <p><strong>Year:</strong> {volume.start_year}</p>
                                <p><strong>Issues:</strong> {volume.count_of_issues}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination currentPage={parseInt(page)} totalPages={totalPages} basePath="/comics/browsing/box/" />
        </div>
    );
};

export default ComicsBrowse;