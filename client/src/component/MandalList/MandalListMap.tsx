import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMandalArtFront } from '../../types/MandalArt';
import { getGrade } from '../../utils';

const TileWrapper = styled(Link)`
  background-color: yellowgreen;
`;

interface IMandalListTile {
  id: number;
  goal: string;
  score: number;
}

const MandalListTile = ({ id, goal, score }: IMandalListTile) => {
  return (
    <TileWrapper to={`/${id}`}>
      <div>{goal}</div>
      <div>{getGrade(score)}</div>
    </TileWrapper>
  );
};

interface IMandalListMap {
  mandalArtList: IMandalArtFront[];
}

const MandalListMap = ({ mandalArtList }: IMandalListMap) => (
  <>
    {mandalArtList.map(mandalArtFront => (
      <MandalListTile key={mandalArtFront.id} {...mandalArtFront} />
    ))}
  </>
);

export default MandalListMap;
