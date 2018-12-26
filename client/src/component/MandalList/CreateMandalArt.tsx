import React from 'react';
import styled from 'styled-components';
import { MakeBanner } from '../../assets';
import { GreenColor } from '../../constants/colors';
import { MANDAL_GRADE } from '../../constants/mandalGrade';

const ComponentWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  background-color: #c6e9ef;
  align-items: center;
  justify-content: space-evenly;
`;

const BannerImage = styled.img`
  height: 250px;
`;

const BannerContent = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const BannerText = styled.div`
  font-size: 32px;
`;

const BannerGradeList = styled.div`
  font-size: 32px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const CreateButton = styled.button`
  height: 40px;
  display: block;
  background-color: ${GreenColor.light};
  border: none;
  box-shadow: 3px 3px ${GreenColor.prime};
  &:active {
    box-shadow: 1px 1px ${GreenColor.prime};
  }
`;

const CreateMandalArt = () => {
  return (
    <ComponentWrapper>
      <BannerImage src={MakeBanner} />
      <BannerContent>
        <BannerText>만다라트 정원을 가꾸어 보세요</BannerText>
        <BannerGradeList>
          <div>{MANDAL_GRADE.NewBie}</div>
          <div>🌟</div>
          <div>{MANDAL_GRADE.Novice}</div>
          <div>🌟</div>
          <div>{MANDAL_GRADE.Expret}</div>
        </BannerGradeList>
        <CreateButton>새 만다라트 만들기 {MANDAL_GRADE.NewBie}</CreateButton>
      </BannerContent>
    </ComponentWrapper>
  );
};

export default CreateMandalArt;
