import React from 'react';
import '../css/imageshow.css';
import image1 from '../assets/image/1.jpeg';
import image2 from '../assets/image/2.jpeg';
import image3 from '../assets/image/3.jpeg';
import image4 from '../assets/image/4.jpeg';
import image5 from '../assets/image/5.jpeg';
import image6 from '../assets/image/6.jpeg';
import image7 from '../assets/image/7.jpeg';
import image8 from '../assets/image/8.jpeg';



interface ImageProps {
    src: string;
    alt: string;
}

interface ImageState {
    isHovered: boolean;
}

class Image extends React.Component<ImageProps, ImageState> {
    constructor(props: ImageProps) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    render() {
        return (
            <div className="image-wrapper"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    className={this.state.isHovered ? 'expanded' : ''}
                />
                <div className={this.state.isHovered ? 'overlay' : ''}></div>
            </div>
        );
    }
}

const ImageShow: React.FC = () => {
    return (
        <div className='my-6' id='image-show'>
        <div className="flex flex-col justify-center items-center py-6 text-[#171b5a]">
        <h1 className="font-semibold text-7xl">Image Show-Case</h1>
        <p className="w-3/4 text-center pt-6 pb-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla
          veritatis commodi recusandae ut reprehenderit eaque explicabo nobis
          odio ducimus.
        </p>
        <div className="w-32 h-1 bg-purple-700"></div>
      </div>
        <div className="container px-10">
            <Image src={image1} alt="Image 1" />
            <Image src={image2} alt="Image 2" />
            <Image src={image3} alt="Image 1"/>
            <Image src={image4} alt="Image 2" />
            <Image src={image5} alt="Image 1"/>
            <Image src={image6} alt="Image 2" />
            <Image src={image7} alt="Image 1"/>
            <Image src={image8} alt="Image 2" />
            {/* Add more images as needed */}
        </div>
        </div>
    );
};

export default ImageShow;
