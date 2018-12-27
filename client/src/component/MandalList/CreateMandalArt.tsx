import React from 'react';
import styled from 'styled-components';
import { MakeBanner } from '../../assets';
import { GreenColor } from '../../constants/colors';
import { MANDAL_GRADE } from '../../constants/mandalGrade';
import { media } from '../../utils/media';

const ComponentWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  font-family: 'Indie Flower';
  background-color: #c6e9ef;
  align-items: center;
  justify-content: space-evenly;
  ${media.small`
    height: 500px;
    flex-direction: column;
  `}
`;

const BannerImage = styled.img`
  height: 250px;
  ${media.small`
    height: 150px;
  `}
`;

const BannerContent = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 32px;
  ${media.small`
    height: 100px;
    font-size: 20px;
  `}
`;

const BannerText = styled.div``;

const BannerGradeList = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const CreateButton = styled.button`
  height: 50px;
  width: 200px;
  display: block;
  background-color: ${GreenColor.light};
  border: none;
  box-shadow: 3px 3px ${GreenColor.prime};
  font-size: 16px;
  &:active {
    box-shadow: 1px 1px ${GreenColor.prime};
  }
`;

const CreateMandalArt = () => {
  return (
    <ComponentWrapper>
      <BannerImage src={MakeBanner} />
      <BannerContent>
        <BannerText>Make Your Own Mandal Garden!</BannerText>
        <BannerGradeList>
          <div>{MANDAL_GRADE.NewBie}</div>
          <div>🌟</div>
          <div>{MANDAL_GRADE.Novice}</div>
          <div>🌟</div>
          <div>{MANDAL_GRADE.Expret}</div>
        </BannerGradeList>
        <CreateButton>Create New Garden {MANDAL_GRADE.NewBie}</CreateButton>
      </BannerContent>
    </ComponentWrapper>
  );
};

export default CreateMandalArt;
