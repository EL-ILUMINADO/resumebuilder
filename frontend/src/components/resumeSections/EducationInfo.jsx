import React from 'react';

const EducationInfo = ({degree, duration, institution}) => {
    return (
        <div className={"mb-5"}>
            <h3 className={`text-[15px] font-semibold text-gray-900`}>{degree}</h3>
            <p className={'text-sm text-gray-700 font-medium'}>{institution}</p>
            <p className={'text-xs text-gray-500 italic mt-0.5'}>{duration}</p>
        </div>
    );
};

export default EducationInfo;