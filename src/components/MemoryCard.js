import React from 'react'
import './MemoryCard.css'


class MemoryCard extends React.Component {
   




    render() {

        const innerClass = "MemoryCard__inner"
        return (

            <div onClick={this.props.clickHandler} className="MemoryCard" >

                <div className={!this.props.isFlipped ? {innerClass} :  "MemoryCard__inner flipped" } >
                    <div className="MemoryCard__back">
                        <img style={{ width: '80px' }} src="logo-wrench-white.png"></img>
                    </div>
                    <div className='MemoryCard__front' >{this.props.symbol}</div>
                </div>

            </div>
        )

    }
}







export default MemoryCard