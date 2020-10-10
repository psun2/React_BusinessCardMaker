import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageFileInput from './components/image_file_input/image_file_input';
import ImageUploader from './service/image_uploader';
import axios from 'axios';
import CardRepository from './service/card_repository';

// auth 인증 관련
const authService = new AuthService();

// 이미지 업로드
const httpClient = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}`,
  method: 'POST',
});

console.log(httpClient);

const imageUploader = new ImageUploader(httpClient);

const FileInput = memo((props) => (
  // 컴포넌트를 전달하는 prop 의 경우 대문자로 시작합니다.
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

// 데이터베이스
const cardRepository = new CardRepository();

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
