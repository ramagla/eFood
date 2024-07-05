import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  li {
    list-style: none;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &.visible {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  background-color: ${cores.vermelho};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  z-index: 3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: auto;
`
export const FoodImage = styled.img`
  object-fit: cover;
  width: 280px;
  height: 280px;
  margin: 32px 24px 32px 32px;
  object-fit: cover;
`
export const ModalContainer = styled.div`
  max-width: 656px;
  width: 100%;
  margin-top: 32px;
  flex: 1;
  overflow-y: auto;
  max-height: 350px;
  flex-direction: row;
  align-items: center;
`

export const FoodTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branco};
  line-height: 21.09px;
  margin-bottom: 8px;
  display: block;
`
export const FoodDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.branco};
  line-height: 22px;
  width: 100%;

  min-height: 44px;
  height: grid-auto-flow;
  p {
    margin-top: 32px;
  }
`
export const CloseIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  margin: 8px;
  cursor: pointer;
  top: 10px;
  right: 10pc;
`

export const AddCartButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  width: 248px;
  height: 24px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  margin-top: 85px;
`
