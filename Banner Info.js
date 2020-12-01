import React, { Component } from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'

class Banner extends Component {
    render() {
        return (
            <div>
                <img src="/img/banner_full.png" alt="Reload Banner" />
                <div class="ptext">Read-able</div>
                <div class="stext">The Only Book Website you will ever need</div>
            </div>
            
        )
    }
}
export default Banner;