import { firbaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
  // providerName
  // ex> 구글인지.. 페이스북인지.. 트위터 인지..
  login(providerName) {
    // 어떤 로그인 방법인지를 선택하는 곳
    const authProvider = this.getProvider(providerName);

    // 우리의 정보로 초기화되어 반환받은 firebase를 사용하여
    // 로그인을 할 수 있는 함수 반환
    return firbaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firbaseAuth.signOut();
  }

  // callback 함수를 받아서 함수를 처리 하는 로직
  onAuthChange(onUserChanged) {
    // 사용자의 로그인 상태를 관리하는 함수 auth 내장 api
    firbaseAuth.onAuthStateChanged((user) => {
      user || onUserChanged(user);
      // 콜백을 입력 받아... 콜백 함수의 인자로
      // onAuthStateChanged 함수에서 받은 user을 넘겨줍니다.
      // 그럼 해당 함수에서는 argu를 받아 해당 그 콜백함수에 정의된
      // 로직을 처리 합니다.
      // 정리
      // 1. 콜백함수를 받는다.
      // 2. 받아온 콜백함수에 내가 가지고 있는 prams를 넘겨준다.
      // 3. 콜백함수는 인자를 받아서 돌아간다.
      // 4. prams 를 받아 돌아간 곳에서 로직을 실행합니다.
      // prams정의 된 것이 없는데 왔다 갔다 하면서 미리 받을 것을 예상하여,
      // 작성된 로직이라 굉장히 햇갈립니다.
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
