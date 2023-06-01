// <!--






//  -->

//  <!-- we're going to be making a drop down menu with the above provided details -->

import React from 'react';

export default function DropDown(){

    const arrowSVG = `https://app.1inch.io/assets/images/icons/arrow.svg#arrow`
    const backgroundColor = `#060c17`
    const textColor = `#5d82ba`

    const stakingSVG = `https://app.1inch.io/assets/images/icons/header/staking.svg#staking`
    const aggregationSVG = `https://app.1inch.io/assets/images/icons/header/aggregation-protocol.svg#aggregation-protocol`
    const forumSVG = `https://app.1inch.io/assets/images/icons/header/forum.svg#forum`

    const textColorHighlight = `#ffffff`


// We want a drop down menu that has the following options:
// 1. Staking
// 2. Governance
// 3. Forum

// lets define the drop down menu box, this contains the "staking" "governance" and "forum" options
    const dropDownMenuBox = (
        <div style={{ background: `#14172a`, borderRadius: `10px`, display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, width: `180px`, height: `120px` }}>
            <div style={{ display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, width: `100%`, height: `100%` }}>
                <div style={{ display: `flex`, alignItems: `center`, justifyContent: `start`, width: `100%`, height: `40px` }}>
                    <img src={stakingSVG} style={{ width: `25px`, height: `25px`, filter: `contrast(0.1)`, marginLeft: `8px`}} />
                    <p style={{ color: textColorHighlight, fontSize: `16px`, fontWeight: `bold`, margin: `0px`, marginLeft: `15px` }}>Staking</p>
                </div>
                <div style={{ display: `flex`, alignItems: `center`, justifyContent: `start`, width: `100%`, height: `40px` }}>
                    <img src={aggregationSVG} style={{ width: `25px`, height: `25px`, filter: `contrast(0.1)`, marginLeft: `8px`}} />
                    <p style={{ color: textColorHighlight, fontSize: `16px`, fontWeight: `bold`, margin: `0px`, marginLeft: `15px` }}>Governance</p>
                </div>
                <div style={{ display: `flex`, alignItems: `center`, justifyContent: `start`, width: `100%`, height: `40px` }}>
                    <img src={forumSVG} style={{ width: `25px`, height: `25px`, filter: `contrast(0.1)`, marginLeft: `8px`}} />
                    <p style={{ color: textColorHighlight, fontSize: `16px`, fontWeight: `bold`, margin: `0px`, marginLeft: `15px` }}>Forum</p>
                </div>
            </div>
        </div>
    )



// we want the drop down menu to be a rounded div with the word "DAO" and the arrowSVG after it

    // unfortunately all the css needs to be done here
    const dropDownMenuTextAndArrow = (
        <div style={{ background: backgroundColor, display: `flex`, alignItems: `center`, justifyContent: `center`, width: `100px`, height: `40px` }}>
            <p style={{ color: textColor, fontSize: `16px`, fontWeight: `bold`, margin: `0px` }}>DAO</p>
            <img src={arrowSVG} style={{ width: `25px`, height: `25px`, marginLeft: `5px`, filter: `contrast(0.1)`}} />
        </div>
    )
    
    // there is a Trade drop down to the left of the DAO and then an EARN, More and Bridges drop down to the right of the DAO

    const tradeDropDown = (
        <div style={{ background: backgroundColor, display: `flex`, alignItems: `center`, justifyContent: `center`, width: `100px`, height: `40px` }}>
            <p style={{ color: textColor, fontSize: `16px`, fontWeight: `bold`, margin: `0px` }}>Trade</p>
            <img src={arrowSVG} style={{ width: `25px`, height: `25px`, marginLeft: `5px`, filter: `contrast(0.1)`}} />
        </div>
    )

    const rightSideDropDowns = (
        <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, width: `auto`, height: `40px` }}>
            <div style={{ background: backgroundColor, display: `flex`, alignItems: `center`, justifyContent: `center`, width: `100px`, height: `40px` }}>
                <p style={{ color: textColor, fontSize: `16px`, fontWeight: `bold`, margin: `0px` }}>EARN</p>
                <img src={arrowSVG} style={{ width: `25px`, height: `25px`, marginLeft: `5px`, filter: `contrast(0.1)`}} />
            </div>
            <div style={{ background: backgroundColor, display: `flex`, alignItems: `center`, justifyContent: `center`, width: `100px`, height: `40px` }}>
                <p style={{ color: textColor, fontSize: `16px`, fontWeight: `bold`, margin: `0px` }}>More</p>
                <img src={arrowSVG } style={{ width: `25px`, height: `25px`, marginLeft: `5px`, filter: `contrast(0.1)`}} />
            </div>
            <div style={{ background: backgroundColor, display: `flex`, alignItems: `center`, justifyContent: `center`, width: `100px`, height: `40px` }}>
                <p style={{ color: textColor, fontSize: `16px`, fontWeight: `bold`, margin: `0px` }}>Bridges</p>
                <img src={arrowSVG} style={{ width: `25px`, height: `25px`, marginLeft: `5px`, filter: `contrast(0.1)`}} />
            </div>
        </div>

    )

    // lets wrap the drop down menu text and arrow with the drop down menu box. we also want a green arrow pointint to the "staking" option

    const wrapped = (
        <div style={{ position: `relative`, width: `800px` }}>
            <div style={{ display: `flex`, alignItems: `center`, justifyContent: `start`, width: `100%`, height: `100%` }}>
                {tradeDropDown}
                {dropDownMenuTextAndArrow}
                {rightSideDropDowns}
            </div>
            {/* pad by 40px on the left*/}
            <div style={{ marginLeft: `110px` }}>
                {dropDownMenuBox}
            </div>
        </div>
    )



    return wrapped
}