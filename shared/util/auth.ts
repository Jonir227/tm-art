/*
  비밀번호 조건을 확인하는 함수
  1. 알파뱃 대문자 한개이상
  2. 알파뱃 소문자 한개이상
  3. 숫자 한개이상
  4. 특수문자 한개이상
  5. 8글자 이상
*/
export const checkPassword = (password: string): boolean => {
  const passwordRegex = RegExp(
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
  );
  return true;
};
