import styled from 'styled-components';

interface WhiteBoxBlockProps {
  width?: string;
  padding?: string;
}

export const WhiteBoxBlock = styled.div<WhiteBoxBlockProps>`
  width: ${({ width }) => width || '100%'};
  height: 100%;
  padding: ${({ padding }) => padding || '64px 0px'};
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 27.24px;
    text-align: center;
    color: #2F2E41;
    text-align: center;
    margin: 0px;
  }
`