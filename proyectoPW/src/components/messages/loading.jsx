// Loading.js
import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center py-[345px]">
            <div className="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-blue-900"></div>
        </div>
    );
}

export default Loading;
