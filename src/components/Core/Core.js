import React from 'react';

import './Core.scss';
import './LayoutVariants.scss';

import Header from '../Header/Header';
import HeaderSearch from '../Header/HeaderSearch';
import Sidebar from '../Sidebar/Sidebar';
import Settings from '../Settings/Settings';

const Core = props => (
    <div className="layout-container">

        <Header />

        <Sidebar />
        <div className="sidebar-layout-obfuscator"></div>

        {/* Page content */}
        <main className="main-container">
            { props.children }

            {/* Page footer */}
            <footer>
                <span>2019 - Cadem S.A</span>
            </footer>

        </main>

        {/* Search template */}
        <HeaderSearch/>

        {/* Settings template */}
        <Settings/>

    </div>
)

export default Core;
