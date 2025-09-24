import React from 'react';
import useGetData from '../../common/useGetData/useGetData';
import Loading from '../../common/loading/Loading';
import NotFound from '../../../NotFound';
import { useParams, Link } from 'react-router-dom';
import './issueListPage.css';

const IssueListPage = () => {
    const { volumeID } = useParams();
    const url = `https://batserver.vercel.app/comicvine/volume/4050-${volumeID}/field_list=issues,name`;

    const { data, isLoading, error } = useGetData(url);

    if (error) return <NotFound />;
    if (isLoading) return <Loading img={2} />;

    return (
        <div className="content">
            <h1 className="title">{data.results.name}</h1>
            <div className="issue-grid">
                {data.results.issues.map((issue) => (
                    <Link to={`/comics/vol_${volumeID}/${issue.issue_number}`} key={issue.id} className="issue-card">
                        <div className="issue-info">
                            <h3>#{issue.issue_number}</h3>
                            <p>{issue.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default IssueListPage;