// 캘린더 range에 사용
export const getMonthandDate = (date: any) => {
  if (!date) {
    return '';
  }
  const newDateValue = new Date(date);
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const newMonth =
    newDateValue.getMonth() + 1 < 10
      ? 0 + String(newDateValue.getMonth() + 1)
      : String(newDateValue.getMonth() + 1);
  const newDate =
    newDateValue.getDate() < 10
      ? 0 + String(newDateValue.getDate())
      : String(newDateValue.getDate());
  const newDay = weeks[newDateValue.getDay()];

  return `${newMonth}월 ${newDate}일 (${newDay})`;
};

export const toLocalISOString = (date: Date) => {
  let tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? '+' : '-',
    pad = function (num: number) {
      var norm = Math.floor(Math.abs(num));
      return (norm < 10 ? '0' : '') + norm;
    };

  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate()) +
    'T' +
    pad(date.getHours()) +
    ':' +
    pad(date.getMinutes()) +
    ':' +
    pad(date.getSeconds())
  );
};

// 여행 정보에서 기간 나타낼 때 사용
export const getTripDetailRange = (date: any) => {
  if (!date) {
    return '';
  }
  const newDateValue = new Date(date);
  const newMonth = String(newDateValue.getMonth() + 1);
  const newDate = String(newDateValue.getDate());

  return `${newMonth}월 ${newDate}일`;
};

//캘린더 디폴트값 설정할때 기본값 넣어주는 포맷
export const getMonthandDateList = (date: any) => {
  if (!date) {
    return [];
  }
  const newDateValue = new Date(date);
  const NewYear = newDateValue.getFullYear();
  const newMonth = String(newDateValue.getMonth());
  const newDate = String(newDateValue.getDate());
  return [NewYear, Number(newMonth), Number(newDate)];
};

// 여행 생성 시 여행 기간으로 날짜와 일 수 반환하는 함수
export const getTripDate = (date: any, type: string) => {
  const start = date.start.split(type);
  const end = date.end.split(type);

  const range = `${start[0].slice(2)}.${start[1]}.${start[2].slice(
    0,
    2
  )} ~ ${end[0].slice(2)}.${end[1]}.${end[2].slice(0, 2)}`;

  // 몇 박 며칠인지 계산
  const startDate: Date = new Date(date.start);
  const endDate: Date = new Date(date.end);

  const timeDifference: number = endDate.getTime() - startDate.getTime();
  const daysDifference: number = timeDifference / (1000 * 60 * 60 * 24);

  const nights: number = Math.floor(daysDifference) - 1;
  const days: number = daysDifference;
  const dates = `${nights}박 ${days}일`;

  return { range, dates };
};
