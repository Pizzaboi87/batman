import React from 'react';
import useGetData from '../../common/useGetData/useGetData';
import Loading from '../../common/loading/Loading';
import NotFound from '../../../NotFound';
import { useParams } from 'react-router-dom';
import './issuePage.css';

const IssuePage = () => {
    const { volumeID, issue } = useParams();
    const url = `https://batserver.vercel.app/comicvine/issue/4000-${issue}/field_list=image,name,description,volume`;

    const { data, isLoading, error } = useGetData(url);

    if (error) return <NotFound />;
    if (isLoading) return <Loading img={2} />;

    const textWithCorrectLinks = data.results.description
        ?.replaceAll(/href="\//gi, 'href="https://comicvine.gamespot.com/')
        .replaceAll(/href="..\/..\//gi, 'href="https://comicvine.gamespot.com/')
        .replaceAll(/href/gi, 'target="_blank" href')
        .replaceAll(/style="width:/gi, '')
        .replaceAll('data-src', 'src');

    return (
        <div className="content">
            <h1 className="title">{data.results.volume.name} #{issue}</h1>
            <div className="issue-details">
                <img src={data.results.image.original_url} alt={data.results.name} />
                <div
                    className="issue-description"
                    dangerouslySetInnerHTML={{ __html: textWithCorrectLinks }}
                ></div>
            </div>
        </div>
    );
};

export default IssuePage;