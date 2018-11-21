import React, { Component } from 'react'
import Header from './Header'

export default class extends Component {

    render(){
        return (
            // <!-- Always shows a header, even in smaller screens. -->
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header />
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">Title</span>
                    <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
                <main class="mdl-layout__content">
                    <div class="page-content">
                    {/* <!-- Your content goes here --> */}
                    </div>
                </main>
            </div>
        )
    }
    
}