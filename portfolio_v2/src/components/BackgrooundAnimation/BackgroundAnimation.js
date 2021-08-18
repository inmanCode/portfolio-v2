import React from 'react';
import styled, { keyframes } from 'styled-components';
const BackgroundAnimation = () => (
  <Container>
    <svg
      className='BgAnimation__svg'
      viewBox='0 0 602 602'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.15'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z'
          stroke='url(#paint0_radial)'
          id='path_0'
        />
        <path
          d='M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z'
          stroke='url(#paint1_radial)'
          id='path_1'
        />
        <path
          d='M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z'
          stroke='url(#paint2_radial)'
          id='path_2'
        />
      </g>
      <ellipse
        cx='295.027'
        cy='193.118'
        transform='translate(-295.027 -193.118)'
        rx='1.07306'
        ry='1.07433'
        fill='#945DD6'
      >
        <animateMotion dur='10s' repeatCount='indefinite' rotate='auto'>
          <mpath xlinkHref='#path_2' />
        </animateMotion>
      </ellipse>
      <path
        d='M294.685 193.474L268.932 219.258'
        transform='translate(-294.685 -193.474) rotate(45 294.685 193.474)'
        stroke='url(#paint3_linear)'
      >
        <animateMotion dur='10s' repeatCount='indefinite' rotate='auto'>
          <mpath xlinkHref='#path_2' />
        </animateMotion>
      </path>
      <ellipse
        cx='295.027'
        cy='193.118'
        transform='translate(-295.027 -193.118)'
        rx='1.07306'
        ry='1.07433'
        fill='#46737'
      >
        <animateMotion
          dur='5s'
          begin='1'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_2' />
        </animateMotion>
      </ellipse>
      <path
        d='M294.685 193.474L268.932 219.258'
        transform='translate(-294.685 -193.474) rotate(45 294.685 193.474)'
        stroke='url(#paint7_linear)'
      >
        <animateMotion
          dur='5s'
          begin='1'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_2' />
        </animateMotion>
      </path>
      <ellipse
        cx='476.525'
        cy='363.313'
        rx='1.07433'
        ry='1.07306'
        transform='translate(-476.525 -363.313) rotate(90 476.525 363.313)'
        fill='#945DD6'
      >
        <animateMotion dur='10s' repeatCount='indefinite' rotate='auto'>
          <mpath xlinkHref='#path_0' />
        </animateMotion>
      </ellipse>
      <path
        d='M476.171 362.952L450.417 337.168'
        transform='translate(-476.525 -363.313) rotate(-45 476.171 362.952)'
        stroke='url(#paint4_linear)'
      >
        <animateMotion dur='10s' repeatCount='indefinite' rotate='auto'>
          <mpath xlinkHref='#path_0' />
        </animateMotion>
      </path>
      <ellipse
        cx='382.164'
        cy='155.029'
        rx='1.07433'
        ry='1.07306'
        transform='translate(-382.164 -155.029) rotate(90 382.164 155.029)'
        fill='#F46737'
      >
        <animateMotion
          dur='10s'
          begin='1'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_0' />
        </animateMotion>
      </ellipse>
      <path
        d='M381.81 154.669L356.057 128.885'
        transform='translate(-381.81 -154.669) rotate(-45 381.81 154.669)'
        stroke='url(#paint5_linear)'
      >
        <animateMotion
          dur='10s'
          begin='1'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_0' />
        </animateMotion>
      </path>
      <ellipse
        cx='333.324'
        cy='382.691'
        rx='1.07306'
        ry='1.07433'
        transform='translate(-333.324 -382.691) rotate(-180 333.324 382.691)'
        fill='#F46737'
      >
        <animateMotion
          dur='5s'
          begin='0'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_1' />
        </animateMotion>
      </ellipse>
      <path
        d='M333.667 382.335L359.42 356.551'
        transform='scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)'
        stroke='url(#paint6_linear)'
      >
        <animateMotion
          dur='5s'
          begin='0'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_1' />
        </animateMotion>
      </path>
      <ellipse
        cx='165.524'
        cy='93.9596'
        rx='1.07306'
        ry='1.07433'
        transform='translate(-165.524 -93.9596)'
        fill='#F46737'
      >
        <animateMotion
          dur='10s'
          begin='3'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_0' />
        </animateMotion>
      </ellipse>
      <path
        d='M165.182 94.3159L139.429 120.1'
        transform='translate(-165.182 -94.3159) rotate(45 165.182 94.3159)'
        stroke='url(#paint7_linear)'
      >
        <animateMotion
          dur='10s'
          begin='3'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_0' />
        </animateMotion>
      </path>
      <ellipse
        cx='476.525'
        cy='363.313'
        rx='1.07433'
        ry='1.07306'
        transform='translate(-476.525 -363.313) rotate(90 476.525 363.313)'
        fill='#13ADC7'
      >
        <animateMotion
          dur='12s'
          begin='4'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_0' />
        </animateMotion>
      </ellipse>
      <path
        d='M476.171 362.952L450.417 337.168'
        transform='translate(-476.525 -363.313) rotate(-45 476.171 362.952)'
        stroke='url(#paint11_linear)'
      >
        <animateMotion
          dur='12s'
          begin='4'
          repeatCount='indefinite'
          rotate='auto'
        >
          <mpath xlinkHref='#path_0' />
        </animateMotion>
      </path>
      <defs>
        <radialGradient
          id='paint0_radial'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(301 301) rotate(90) scale(300)'
        >
          <stop offset='0.333333' stopColor='#FBFBFB' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint1_radial'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(301 301) rotate(90) scale(300)'
        >
          <stop offset='0.333333' stopColor='#FBFBFB' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint2_radial'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(301 301) rotate(90) scale(300)'
        >
          <stop offset='0.333333' stopColor='#FBFBFB' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </radialGradient>
        <linearGradient
          id='paint3_linear'
          x1='295.043'
          y1='193.116'
          x2='269.975'
          y2='218.154'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#945DD6' />
          <stop offset='1' stopColor='#945DD6' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint4_linear'
          x1='476.529'
          y1='363.31'
          x2='451.461'
          y2='338.272'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#945DD6' />
          <stop offset='1' stopColor='#945DD6' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint5_linear'
          x1='382.168'
          y1='155.027'
          x2='357.1'
          y2='129.989'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F46737' />
          <stop offset='1' stopColor='#F46737' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint6_linear'
          x1='333.309'
          y1='382.693'
          x2='358.376'
          y2='357.655'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F46737' />
          <stop offset='1' stopColor='#F46737' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint7_linear'
          x1='165.54'
          y1='93.9578'
          x2='140.472'
          y2='118.996'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F46737' />
          <stop offset='1' stopColor='#F46737' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint8_linear'
          x1='414.367'
          y1='301.156'
          x2='439.435'
          y2='276.118'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#13ADC7' />
          <stop offset='1' stopColor='#13ADC7' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint9_linear'
          x1='515.943'
          y1='288.238'
          x2='541.339'
          y2='291.454'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#13ADC7' />
          <stop offset='1' stopColor='#13ADC7' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint10_linear'
          x1='117.001'
          y1='230.619'
          x2='117.36'
          y2='258.193'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#945DD6' />
          <stop offset='1' stopColor='#945DD6' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint11_linear'
          x1='476.529'
          y1='363.31'
          x2='451.461'
          y2='338.272'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#13ADC7' />
          <stop offset='1' stopColor='#13ADC7' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
    <div>
      <svg
        className='firstSvg'
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='#172136'
          d='M37.6,-48.4C44.9,-38.7,44.3,-23.2,46.6,-8.4C49,6.4,54.4,20.5,51.8,34.4C49.1,48.4,38.4,62.2,24.2,68.1C10,74,-7.7,72,-22.7,65.3C-37.7,58.6,-49.9,47.2,-58.3,33.3C-66.7,19.5,-71.2,3,-66.6,-9.7C-62,-22.5,-48.1,-31.7,-35.5,-40.4C-22.8,-49.1,-11.4,-57.4,1.9,-59.6C15.2,-61.8,30.3,-58,37.6,-48.4Z'
          transform='translate(100 100)'
        />
      </svg>

      <svg
        className='secondSvg'
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='#1e2c48'
          d='M34,-42.3C47.7,-28.9,65.2,-21.7,72.8,-8.4C80.4,4.9,78.1,24.3,67.5,35.5C56.9,46.6,38,49.5,20.8,54.7C3.6,59.9,-11.9,67.5,-27.7,66.1C-43.6,64.7,-59.9,54.4,-67.8,39.7C-75.6,25,-75.1,5.9,-70.4,-11C-65.8,-28,-57.1,-42.9,-44.7,-56.5C-32.3,-70.1,-16.2,-82.4,-3,-78.8C10.1,-75.2,20.2,-55.6,34,-42.3Z'
          transform='translate(100 100)'
        />
      </svg>
      <img src='./images/ReadyPlayerMe-Avatar.png' alt='' width='300px' />
    </div>
  </Container>
);

export default BackgroundAnimation;
const Container = styled.div`
  position: relative;
  display: flex;
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    @media ${(props) => props.theme.breakpoints.lg} {
      display: none;
    }
    .firstSvg {
      position: absolute;
      width: 250;
      height: 400px;
      top: -10px;
      right: -100px;
    }
    .secondSvg {
      position: absolute;
      width: 250;
      height: 400px;
      top: 60px;
      right: -90px;
    }
    img {
      position: absolute;
      width: 250;
      height: 300px;
      top: 100px;
      right: -30px;
      @keyframes bounce {
        100% {
          top: 80px;
        }
        50% {
          top: 60px;
        }
        0% {
          top: 80px;
        }
      }
      animation: bounce 2s linear infinite;
    }
  }
`;
