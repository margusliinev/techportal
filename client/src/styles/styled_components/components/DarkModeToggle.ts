import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    label {
        width: 90px;
        height: 40px;
        position: relative;
        display: block;
        background-color: #4f4f4f;
        border-radius: 200px;
        cursor: pointer;
        box-shadow: inset 0 0 30px 0px rgba(0, 0, 0, 0.1);
    }
    label:after {
        content: '';
        width: 30px;
        height: 30px;
        position: absolute;
        top: 5px;
        left: 5px;
        background-color: #333;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
        border-radius: 180px;
    }
    input {
        width: 0;
        height: 0;
        visibility: hidden;
    }
    input:checked + label {
        background: #dbeafe;
    }
    input:checked + label:after {
        left: 85px;
        transform: translateX(-100%);
        background: #fff;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
    }
    label,
    label:after {
        transition: 0.3s;
    }
    label:active:after {
        width: 60px;
    }
    label svg {
        position: absolute;
        width: 30px;
        top: 12px;
        z-index: 100;
    }
    label svg:nth-of-type(1) {
        left: 6px;
        fill: #f3f4f6;
        transition: 0.3s;
        font-size: 16px;
    }
    label svg:nth-of-type(2) {
        right: 5px;
        fill: #fef9c3;
        transition: 0.3s;
        font-size: 17px;
    }
    input:checked + label svg:nth-of-type(1) {
        fill: #4f4f4f;
    }
    input:checked + label svg:nth-of-type(2) {
        fill: #eab308;
    }
    @media (max-width: 600px) {
        display: none;
    }
`;

export default Wrapper;
