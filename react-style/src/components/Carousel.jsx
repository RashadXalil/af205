import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const CustomCarousel = () => {
    return (
        <Carousel autoplay>
            <div>
                <img style={{ width: "100%" }} src="https://economictimes.indiatimes.com/thumb/msid-105685512,width-1600,height-900,resizemode-4,imgsize-168092/marvel-upcoming-movies-in-2024-from-venom-3-to-deadpool-3-release-dates-of-all-films.jpg?from=mdr" alt="" />
            </div>
            <div>
                <img style={{ width: "100%" }} src="https://m.media-amazon.com/images/M/MV5BZTIwNjdjZmUtZDJmOC00M2RmLTg2NTItMTMzZjZhNTk3YjVmXkEyXkFqcGdeQWFybm8@._V1_.jpg" alt="" />
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}

export default CustomCarousel