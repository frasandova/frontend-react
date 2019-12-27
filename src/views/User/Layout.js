import React from 'react';

const Layout = props => (
    <div className="layout-container">
        <div className="page-container bg-blue-grey-900">
            {/* Page content */}
            { props.children }
        </div>
    </div>
)

export default Layout;
