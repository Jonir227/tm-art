import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ButtonHTMLAttributes, Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { media } from '../../utils/media';

const ModalBackground = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding-top: 10%;
  background-color: rgba(0, 0, 0, 0.7);
  ${media.small`
    padding: 0px;
  `}
`;

const ModalWrapper = styled.div`
  width: 560px;
  height: 80%;
  background-color: white;
  padding: 6px;
  ${media.small`
    width: 100vw;
    height: 100vh;
  `}
`;

const ModalHeader = styled.div`
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ModalCloseBtn = styled.button``;

const ModalCloseIcon = styled(FontAwesomeIcon)`
  size: 16px;
  height: 90%;
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

    public toggleModal = () => {
      this.setState(
        prevState => ({
          ...prevState,
          isVisible: !prevState.isVisible,
        }),
        () => {
          document.body.style.overflow = this.state.isVisible
            ? 'hidden'
            : 'auto';
        },
      );
    };

    public onClickChildren = () => {
      this.toggleModal();
    };

    public render() {
      const { children } = this.props;
      const RenderTarget = document.getElementById('modal');
      const injectedChildren = React.cloneElement(children, {
        onClick: this.onClickChildren,
      });
      const modalRender = this.state.isVisible && (
        <ModalBackground>
          <ModalWrapper>
            <ModalHeader>
              <ModalCloseBtn onClick={this.toggleModal}>
                <ModalCloseIcon icon="times" />
              </ModalCloseBtn>
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
