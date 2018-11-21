import React from 'react'

export default ()=> {
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
        {/* <!-- Title --> */}
        <span class="mdl-layout-title">Circool</span>
        {/* <!-- Add spacer, to align navigation to the right --> */}
        <div class="mdl-layout-spacer"></div>
        {/* <!-- Navigation. We hide it in small screens. --> */}
        <nav class="mdl-navigation mdl-layout--large-screen-onlyß">
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
        </nav>
        </div>
    </header>
}