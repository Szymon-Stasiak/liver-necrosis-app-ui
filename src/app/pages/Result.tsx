import React from 'react';
import { useApiResponse } from '../ContexProvider';

const Result: React.FC = () => {
    const { apiResponse } = useApiResponse();

    return (
        <div>
            <h1>Result</h1>
            {apiResponse ? (
                <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default Result;
