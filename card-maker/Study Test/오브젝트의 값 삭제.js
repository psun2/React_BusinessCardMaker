const object = {
  0: {
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
  1: {
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
  2: {
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
  3: {
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
  4: {
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
};

console.log(object);
console.log(object['3']);

console.log('----------------------------------------------------');

// 오브젝트의 key 갑이 3인 원소를 삭제하겠습니다.
delete object['3'];

console.log(object);
console.log(object['3']); // undefined
