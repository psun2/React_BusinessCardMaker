const name = 'name';

const addr = '대한민국';

const myObj = {
  key: 'value',
  // 🔽 키값과 value의 값이 같은 걍우
  name,
  nationality: addr,
  // 🔽 변수를 key값에 대입 하는 경우
  [addr]: addr,
};

console.log(myObj);
// { key: 'value', name: 'name', nationality: '대한민국', '대한민국': '대한민국' }
