import React from 'react';

import "loaders.css/loaders.css";
import './Spinner.scss';

// See more loading icons here:
// https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons
const PageLoader = () => (
    <div className="page-loader loader-demo h-100 loader-primary">
        <div className="loader-inner ball-beat">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)

export default PageLoader;