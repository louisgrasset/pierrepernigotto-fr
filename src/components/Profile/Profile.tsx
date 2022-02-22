import './Profile.scss';

export function Profile () {
    return (
        <div className="profile">
            <svg width="420" height="565" viewBox="0 0 420 565" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <ellipse cx="210" cy="346.5" rx="210" ry="218.5" fill="#5FA9B9"/>
                <mask id="mask0_6_647" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="420" height="565">
                <path fillRule="evenodd" clipRule="evenodd" d="M396 0H5V298.888C1.72643 314.215 0 330.148 0 346.5C0 467.174 94.0202 565 210 565C325.98 565 420 467.174 420 346.5C420 309.849 411.327 275.305 396 244.97V0Z" fill="#C4C4C4"/>
                </mask>
                <g mask="url(#mask0_6_647)">
                    <rect x="-67" y="11" width="554" height="561" fill="url(#pattern0)"/>
                </g>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#profile-image" transform="translate(0.12 0.154)scale(0.00075)"/>
                    </pattern>
                    <image id="profile-image" xlinkHref="/images/profile.png"/>
                </defs>
            </svg>
        </div>
    )
}