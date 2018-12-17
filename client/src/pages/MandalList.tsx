import React, { Component } from 'react';
import { connect } from 'react-redux';
import mandalArtListActionCreators from '../redux/actions/MandalListAcitons';
import { IRootState } from '../redux/reducers';
import { AsyncActionCondition } from '../types/condition';
import { IMandalArt } from '../types/MandalArt';

interface IMandalListProps {
  count: number;
  mandalArts: IMandalArt[];
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
          {mandalArts.map((item: IMandalArt) => (
            <div>
              {item.id} - {item.goal}
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
