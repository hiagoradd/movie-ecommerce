import styled from 'styled-components';

export const StyledHeaderNav = styled.nav`
  height: 88px;
  display: flex;
  justify-content: space-between;
  top: 0;
  color: #fff;

  h1 {
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    line-height: 88px;
    color: #FFFFFF;
    margin: 0;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #f2f2f2;
    }
  }
`

export const StyledHeaderCartMenu = styled.div`
  display: flex;
  text-align: right;
  align-items: center;

  > div {
    font-size: 14px;
    font-weight: 600;
    line-height: 19.07px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #f2f2f2;
    }
  }
`

export const CartItemCount = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  color: #999999;
`

export const CartIcon = styled.img<{ isMobile?: boolean; }>`
  width: 40px;
  cursor: pointer;
  ${({ isMobile }) => isMobile && `
    margin-left: 10.5px;
  `}
`
