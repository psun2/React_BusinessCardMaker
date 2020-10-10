// yarn add firebase

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics(); // 현재 이 프로젝트 내 에서는 쓰지 않는 코드 입니다.

// 인증단계가 거쳐 초기화된 firebase 는 app 이라는 오브젝트를 반환하고
// 오브젝트 안에는 auth 와 database 가 있습니다.
export const firbaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();

// app 이라는 곳에서 반환해주지 않기때문에 직접 auth 를 선택합니다.
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
