import React, { Component } from 'react';
import { connect } from 'react-redux';
import mandalArtListActionCreators from '../redux/actions/MandalListAcitons';
import { IRootState } from '../redux/reducers';
import { AsyncActionCondition } from '../types/condition';
import { IMandalArtFront } from '../types/MandalArt';
import { getGrade } from '../utls';

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
        <div>{count} 개</div>
        <div>
          {mandalArts.map(item => (
            <div>
              {item.id} - {item.goal} - {getGrade(item.score)}
            </div>
          ))}
        </div>
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
