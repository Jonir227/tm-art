import { GRADE_CRETERIA, MANDAL_GRADE } from '../constants/mandalGrade';

const getGrade = (score: number): MANDAL_GRADE => {
  if (score > GRADE_CRETERIA.Expert) {
    return MANDAL_GRADE.Expret;
  } else if (score > GRADE_CRETERIA.Novice) {
    return MANDAL_GRADE.Novice;
  }
  return MANDAL_GRADE.NewBie;
};

export default getGrade;
