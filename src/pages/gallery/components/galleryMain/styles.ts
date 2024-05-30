import { bolderMap, typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const MainBlock = styled.div<{ degrees: number }>`
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    transform: perspective(1000px) rotateY(${props => `${props.degrees}deg`});
`;

interface ImageBoxProps {
    i: number;
    isFront: boolean;
    dataDegree: number;
    transZ: number;
}

export const ImageBox = styled.div<ImageBoxProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(${props => `calc(${props.i} * ${props.dataDegree}deg)`}) translateZ(${props => `${props.transZ}px`});
    -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004);

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        user-select: none;
    }

    ${props => props.isFront && `
        &:hover div {
            opacity: 1;
            cursor: pointer;
            * {
                transform: translateY(0px);
            }
        }
    `}
`;

export const ContentBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    gap : 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    opacity: 0;
    transition: 0.6s;
    color: white;

    * {
        transform: translateY(25px);
        transition: transform 0.6s;
    }

    h1 {
        ${typographyMap.t5};
        ${bolderMap.semibold};
    }

    p {
        width: 100%;
        height: 100%;
        ${typographyMap.t7};
        ${bolderMap.thin};
        word-break: break-word;
    }
`;

export const BtnBlock = styled.div`
    position: absolute;
    top: 100px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translateY(-50%);
`;

export const Btn = styled.div`
    color: white;
    cursor: pointer;
    ${typographyMap.t4};

    &:hover {
        color: #aaa;
    }

    &:active {
        color: #aaa;
    }
`;
