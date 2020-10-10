const arr = [
  {
    id: '1',
    name: 'Park',
    company: 'none',
    theme: 'dark',
    title: 'Software Engineer',
    email: 'tjddjs@gmail.com',
    message: 'go for it',
    fileName: 'Park',
    fileURL: null,
  },
  {
    id: '2',
    name: 'Park2',
    company: 'none',
    theme: 'light',
    title: 'Software Engineer',
    email: 'tjddjs@gmail.com',
    message: 'go for it',
    fileName: 'Park',
    fileURL: 'park.png',
  },
  {
    id: '3',
    name: 'Park3',
    company: 'none',
    theme: 'colorful',
    title: 'Software Engineer',
    email: 'tjddjs@gmail.com',
    message: 'go for it',
    fileName: 'Park',
    fileURL: null,
  },
  {
    id: '4',
    name: 'Park3',
    company: 'none',
    theme: 'colorful',
    title: 'Software Engineer',
    email: 'tjddjs@gmail.com',
    message: 'go for it',
    fileName: 'Park',
    fileURL: null,
  },
  {
    id: '5',
    name: 'Park3',
    company: 'none',
    theme: 'colorful',
    title: 'Software Engineer',
    email: 'tjddjs@gmail.com',
    message: 'go for it',
    fileName: 'Park',
    fileURL: null,
  },
];

const clone = { ...arr };
console.log(clone);
// 배열의 형태로 만들어 이런 과정을 거쳐도 되지만,
// 배열의 index형태의 보장이 어렵고, 데이터가 크다면,
// 굳이 이러한 작업을 거치면 성능적으로 많이 않 좋아집니다.

console.log('--------------------------------------------');

const clone2 = [...arr];
console.log(clone2);

console.log('--------------------------------------------');

const test = {
  id: '5',
  name: 'Park3',
  company: 'none',
  theme: 'colorful',
  title: 'Software Engineer',
  email: 'tjddjs@gmail.com',
  message: 'go for it',
  fileName: 'Park',
  fileURL: null,
};

const clone3 = [...arr, test]; // 같은 자료가 겹칠 수 있습니다.
console.log(clone3);
