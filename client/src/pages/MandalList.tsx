import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeConsumer } from 'styled-components';
import { CreateMandalArt, MandalListMap } from '../component/MandalList';
import mandalArtListActionCreators from '../redux/actions/MandalListAcitons';
import { IRootState } from '../redux/reducers';
import { AsyncActionCondition } from '../types/condition';
import { IMandalArtFront } from '../types/MandalArt';

interface IMandalListProps {
  count: number;
  mandalArts: IMandalArtFront[];
  mandalListCondition: AsyncActionCondition;
  getMandalList: () => void;
}

class MandalList extends Component<IMandalListProps> {
  public componentDidMount() {
    const { getMandalList } = this.props;
    getMandalList();
  }

  public render() {
    const { count, mandalArts, mandalListCondition } = this.props;

    if (mandalListCondition === 'LOADING') {
      return <div> 로딩중입니다..</div>;
    }

    return (
      <>
        <CreateMandalArt />
        <div>{count} 개</div>
        <MandalListMap mandalArtList={mandalArts} />
      </>
    );
  }
}

const maptStateToProps = (state: IRootState) => ({
  ...state.mandalList,
});

export default connect(
  maptStateToProps,
  { getMandalList: mandalArtListActionCreators.getMandalList },
)(MandalList);
