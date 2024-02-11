import styled from 'styled-components';
import React, { useState } from 'react';
import GuessingGame from './GuessingGame';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { sliderImages } from '../../utils/images';

const ImageSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openGameModal = () => {
    setIsModalOpen(true);
  };

  const closeGameModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    className: "center",
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <ImageSliderWrapper className='section'>
      <Slider {...settings} className='game-slider'>
        {sliderImages.map((image, idx) => (
          <div className='slider-item img-fit-cover' key={idx} onClick={openGameModal}>
            <img src={image} className='slider-item-img' alt={`Slider ${idx}`} />
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <GameModal>
          <GuessingGame closeModal={closeGameModal} />
        </GameModal>
      )}
    </ImageSliderWrapper>
  )
}

const GameModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageSliderWrapper = styled.div`
  background-color: #050415;

  .game-slider{
    .slider-item{
      height: 400px;
      padding: 16px;
      outline: 0;

      img{
        border: 6px solid var(--clr-pink-normal);
      }
    }

    .slick-list{
      padding-top: 110px!important;
      padding-bottom: 110px!important;
    }

    .slick-dots{
      li{
        height: 10px;
        width: 60px;
        button{
          &::before{
            width: 100%!important;
            height: 100%!important;
            border: 2px solid var(--clr-pink-normal);
            color: unset;
            transition: var(--transition-default);
          }
        }

        &.slick-active{
          background-color: var(--clr-pink-normal);
        }
      }
    }

    .slick-center{
      transform: scale(1.5);
    }

    .slick-prev{
      position: absolute;
      left: 16px!important;
      z-index: 5;
      transform: scale(1.4);
    }

    .slick-next{
      position: absolute;
      right: 16px!important;
      z-index: 5;
      transform: scale(1.4);
    }
  }
`;
export default ImageSlider;
