import styled, {keyframes} from 'styled-components';


const heartBeat = keyframes`
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1.1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1.1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
`;


export const Hheader = styled.header`
    padding: 10px;
    font-family: Arial;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    border-bottom-color: white;
    border-bottom-style: solid;
    border-bottom-width: 1px;
`;

export const AbbreviationName = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    color: white;
    margin: 10px;
    cursor: pointer;

    &:hover {
        animation: ${heartBeat} 5s infinite;
    }
`;

export const TextHeader = styled.span`
    text-transform: uppercase;
    color: white;
    align-self: center;
    font-size: 20px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.9s;
    margin-top: 15px;

    &:hover {
        color: black;
        background-color: white;
        padding: 5px;
        border-radius: 10px;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

export const ContentTextHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MenuImgHeader = styled.div`
    align-self: center;
    cursor: pointer;
    margin-left: auto;
`;

export const MenuOptions = styled.div`
    background-color: black;
    display: none;
`;

export const TextOption = styled.strong`
    color: white;
`;