.gitignore 에서 .env파일을 등록해 github에 등록되지 않도록 합니다.

// https://create-react-app.dev/docs/adding-custom-environment-variables/
// REACT_APP : prefix
// Environment variable : 환경변수
// 적용이 안될시 서버종료 후 재시작

REACT_APP_FIREBASE_API_KEY=your apiKey
REACT_APP_FIREBASE_AUTH_DOMAIN=your authDomain
REACT_APP_FIREBASE_DB_URL= your databaseURL
REACT_APP_FIREBASE_PROJECT_ID=your project id

REACT_APP_CLOUDINARY_CLOUD_NAME=your cloud name
REACT_APP_CLOUDINARY_API_KEY=your apiKey

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


참고 :로 시작하는 사용자 지정 환경 변수를 만들어야합니다 
REACT_APP_. 같은 이름을 가질 수있는 개인 키가 실수로 시스템에 노출되는NODE_ENV 것을 방지하기 위해 다른 변수 는 무시됩니다 . 
환경 변수를 변경하면 실행중인 개발 서버를 다시 시작해야합니다.

참고 : .env파일 변경 후 개발 서버를 다시 시작해야 합니다.

.env파일 은 소스 제어에 체크인 해야합니다 (제외 .env*.local).

#다른 어떤 .env파일을 사용할 수 있습니까?
참고 :이 기능은 사용할 수 react-scripts@1.0.0이상 .

.env: 기본.
.env.local: 로컬 재정의. 이 파일은 테스트를 제외한 모든 환경에 대해로드됩니다.
.env.development, .env.test, .env.production: 환경 관련 설정.
.env.development.local, .env.test.local, .env.production.local: 특정 환경 설정의 현지줍니다.
왼쪽에있는 파일이 오른쪽에있는 파일보다 우선 순위가 높습니다.

npm start: .env.development.local, .env.development, .env.local,.env
npm run build: .env.production.local, .env.production, .env.local,.env
npm test: .env.test.local, .env.test, .env(주이 .env.local없는)
이러한 변수는 시스템이 명시 적으로 설정하지 않은 경우 기본값으로 작동합니다.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Netlify 같은 경우는 빌드하고 배포하면 키가 포함되어서 배포가 되어서 잘 되실거구, 배포되는 환경에 따라서 그 배포 서버에서 직접 variables 변수들을 작성해야 해요.

.env에 서버에서 작성하 변수의 이름을 가리키도록 만들고

.env.local에는 우리가 개발시 쓸 키들을 작성해 놓으면 되어요 (오리지널 버전)

Vercel은 제가 한번도 써보지 않어서, 그쪽 문서를 찾아 보셔야 할 것 같아요 :)

https://create-react-app.dev/docs/adding-custom-environment-variables