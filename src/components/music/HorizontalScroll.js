import React, { useRef, useState } from 'react';

export const HorizontalScroll = (props) => {
    
    let containRef = useRef(null);
    let leftArrowRef = useRef(null);
    let rightArrowRef = useRef(null);
    const [scroll, setscroll] = useState(0);
   
    const leftScroll = () => {
        let scrollLength
        setscroll(scrollLength);
        if (scroll === 0){
            console.log(window.innerWidth)
            console.log(containRef.current.scrollWidth)
            leftArrowRef.current.classList.remove("hide");
            scrollLength = window.innerWidth;
            setscroll(scrollLength);
            containRef.current.scroll(scrollLength, 0);
        }else{
            
            console.log(containRef.current.scrollWidth)
            scrollLength = scroll + window.innerWidth;
            containRef.current.scroll(scrollLength, 0);
            console.log(scrollLength);
            setscroll(scrollLength);
        }
        
        if (scrollLength + window.innerWidth  >= containRef.current.scrollWidth){
            rightArrowRef.current.classList.add("hide");
        }
        if (scrollLength > containRef.current.scrollWidth){
            setscroll(containRef.current.scrollWidth);
        }
    }

    const rightScroll = () => {
        let scrollLength = scroll - window.innerWidth;
        console.log(scrollLength);
        containRef.current.scroll(scrollLength, 0);
        setscroll(scrollLength);
        if (scrollLength <= 0){
            leftArrowRef.current.classList.add("hide");
            rightArrowRef.current.classList.remove("hide");
            setscroll(0);
        }

        if (scrollLength > 0) {
            rightArrowRef.current.classList.remove("hide");
        }
        
        
    }

    const loadMusic = () => {
       console.log("Music loaded");
    }

    const {data, height, headertitle, width} = props;
    const midArrow = (height / 2 - 20);
    const containOption = {
        display: "flex",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        justifyContent: "space-between",
    }
    const directionOption = {
       width: "90%",
       marginLeft: "4%",
       //marginRight: "2%",
       position: "absolute",
       display:"flex",
       justifyContent: "space-between",
       marginTop: midArrow
    }

    const itemOption = {
        marginLeft:"10px",
        marginRight:"10px",
    }

    return (
        <>
            <h2>{headertitle}</h2>
            <div ref={containRef} style={containOption} className="mobile" >
                 <div style={directionOption}>
                    <div onClick={rightScroll}  ref={leftArrowRef} style={{fontSize: "40px",   }} className="leftArrow hide"><i className="fas fa-chevron-left"></i></div>
                    <div onClick={leftScroll} ref={rightArrowRef}  style={{ fontSize: "40px", }} className="rightArrow"><i className="fas fa-chevron-right"></i></div>
                </div>
                    {
                        data.map((item) => {
                           return (
                            <div onClick={loadMusic} key={item.key} style={itemOption}>
                                <img style={{ width:width, height:height }} src={item.img} alt={item.alt} />
                                <h4 style={{ margin: "0px" }}>{item.title}</h4>
                            </div>
                           ); 
                        })
                    }

               
    
            </div>

           
            
        </>
    );
}

