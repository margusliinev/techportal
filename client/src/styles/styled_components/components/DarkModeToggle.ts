import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    label {
        width: 85px;
        height: 35px;
        position: relative;
        display: block;
        background-color: #4f4f4f;
        border-radius: 200px;
        cursor: pointer;
    }
    label:after {
        content: '';
        width: 28px;
        height: 28px;
        position: absolute;
        top: 4px;
        left: 4px;
        background-color: #333;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
        border-radius: 180px;
    }
    input {
        width: 0;
        height: 0;
        visibility: hidden;
    }
    input:checked + label {
        background-color: #e5e5e5;
    }
    input:checked + label:after {
        left: 80px;
        transform: translateX(-100%);
        background-color: #eab308;
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
        top: 10px;
        z-index: 100;
    }
    label svg:nth-of-type(1) {
        left: 4px;
        fill: #f3f4f6;
        transition: 0.3s;
        font-size: 15px;
    }
    label svg:nth-of-type(2) {
        right: 4px;
        fill: #fef9c3;
        transition: 0.3s;
        font-size: 15px;
    }
    input:checked + label svg:nth-of-type(1) {
        fill: #4f4f4f;
    }
    input:checked + label svg:nth-of-type(2) {
        fill: #fff;
    }
`;

export default Wrapper;
