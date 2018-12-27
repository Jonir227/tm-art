import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GreenColor } from '../../constants/colors';
import { IMandalArtFront } from '../../types/MandalArt';
import { getGrade } from '../../utils';

const TileWrapper = styled.li`
  margin: 1px;
`;

const TileLink = styled(Link)`
  width: 146px;
  height: 190px;
  background-color: ${GreenColor.light};
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  &::before {
    content: '';
    width: 100%;
    height: 60px;
    background-color: white;
  }
`;

const TileIcon = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 80px;
  height: 80px;
  margin-top: -35px;
  padding-right: 7px;
  line-height: 90px;
  font-size: 60px;
  text-align: center;
`;

const TileGoal = styled.div`
  padding: 20px 5px 0px 5px;
  max-width: 90%;
  word-wrap: break-word;
  text-align: center;
`;

interface IMandalListTile {
  id: number;
  goal: string;
  score: number;
}

const MandalListTile = ({ id, goal, score }: IMandalListTile) => {
  return (
    <TileWrapper>
      <TileLink to={`/${id}`}>
        <TileIcon>{getGrade(score)}</TileIcon>
        <TileGoal>{goal}asdlkfjasldkfjalkdsfjaslkj</TileGoal>
      </TileLink>
    </TileWrapper>
  );
};

const ListMapWrapper = styled.ul`
  padding: 0px 11px 0px 11px;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

interface IMandalListMap {
  mandalArtList: IMandalArtFront[];
}

const MandalListMap = ({ mandalArtList }: IMandalListMap) => (
  <ListMapWrapper>
    {mandalArtList.map(mandalArtFront => (
      <MandalListTile key={mandalArtFront.id} {...mandalArtFront} />
    ))}
  </ListMapWrapper>
);

export default MandalListMap;
