import React, {
  ButtonHTMLAttributes,
  Component,
  MouseEvent,
  ReactElement,
} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GreenColor } from '../../constants/colors';
import { media } from '../../utils/media';

const ModalBackground = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  ${media.medium`
    padding-top: 25px;
  `}
  ${media.small`
    padding: 0px;
  `}
`;

const ModalWrapper = styled.div`
  width: 500px;
  max-height: 80%;
  background-color: white;
  border-radius: 5px;
  padding: 12px;
  ${media.small`
    width: 100vw;
    max-height: 100vh;
  `}
`;

const ModalHeader = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ModalCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'Indie Flower';
  font-size: 32px;
  font-weight: 200;
  &:active {
    color: ${GreenColor.dark};
  }
`;

interface IModalState {
  isVisible: boolean;
}

interface IModalComponent {
  children: ReactElement<ButtonHTMLAttributes<{}>>;
}

const withModal = <P extends object>(TargetComponent: React.ComponentType<P>) =>
  class Modal extends Component<P & IModalComponent, IModalState> {
    public state = {
      isVisible: false,
    };

    public toggleModal = (isVisible: boolean) => {
      document.body.style.overflow = isVisible ? 'hidden' : 'auto';
      this.setState(prevState => ({
        ...prevState,
        isVisible,
      }));
    };

    public showModal = () => {
      this.toggleModal(true);
    };

    public hideModal = () => {
      this.toggleModal(false);
    };

    public onClickModalBackground = (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
        this.toggleModal(false);
      }
    };

    public render() {
      const { children } = this.props;
      const RenderTarget = document.getElementById('modal');
      const injectedChildren = React.cloneElement(children, {
        onClick: this.showModal,
      });
      const modalRender = this.state.isVisible && (
        <ModalBackground onClick={this.onClickModalBackground}>
          <ModalWrapper>
            <ModalHeader>
              <ModalCloseBtn onClick={this.hideModal}>X</ModalCloseBtn>
            </ModalHeader>
            <TargetComponent {...this.props} />
          </ModalWrapper>
        </ModalBackground>
      );

      if (!RenderTarget) {
        throw Error('You Should Add Div named "modal"');
      }

      return [
        injectedChildren,
        ReactDOM.createPortal(modalRender, RenderTarget),
      ];
    }
  };

export default withModal;
