import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/hrader';
import Preview from '../preview/preview';
import styles from './maker.module.css';

// 여기에서 memo 는 상당히 비 효율적... cash에 저장됨.
// header 와 footer는 리 랜더링이 안 되 는 것 이 맞는데...
// 내부에 가지고 있는 Editor은 계속 변경 되기때문에
// 굳이 cash에 저장하여 메모리 낭비를 할 필 요가 없습니다.

// state 또는 prop 의 변경이 빈번 할 경우
// memo의 사용이 불필요 합니다.

const Maker = ({ FileInput, authService, cardRepository }) => {
  // const [cards, setCards] = useState({
  //   // 배열의 형태를 유지하면 ...
  //   // URUD가 꼬일 뿐 더러...
  //   // 그렇게 하지 않으면 모든 배열의 내용을 복사해야 합니다....
  //   1: {
  //     id: '1',
  //     name: 'Park',
  //     company: 'none',
  //     theme: 'dark',
  //     title: 'Software Engineer',
  //     email: 'tjddjs90@gmail.com',
  //     message: 'go for it',
  //     fileName: 'Park0',
  //     fileURL: null,
  //   },
  //   2: {
  //     id: '2',
  //     name: 'Park2',
  //     company: 'none',
  //     theme: 'light',
  //     title: 'Software Engineer',
  //     email: 'tjddjs90@gmail.com',
  //     message: 'go for it',
  //     fileName: 'Park1',
  //     fileURL: 'park.png',
  //   },
  // });

  const historyState = useHistory().location.state;
  console.log('historyState : ', historyState);
  const [userId, setUserId] = useState(historyState && historyState.userId);

  const [cards, setCards] = useState({});

  const history = useHistory();

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);

      // useEffect 안에서 cardRepository 를 이용 하였는데요, userId 가 변경될떄마다
      // useEffect 를 호출했는데, 컴포넌트 자체에서는 cardRepository 가 prop으로 전달이 되는데,
      // maker 라는 컴포넌트는 cardRepository 를 prop 으로 받아 오니깐..
      // cardRepository 가 다른 cardRepository 로 변경이 되면 ..
      // 변경된 cardRepository 로 부터 새로운 데이터를 받아오는 것 이 맞겠죠?

      // useEffect 에서 cardRepository 라는 dependency 를 쓰고 있음에도 불구하고,
      // cardRepository dependency 가 변경이 되었을때 전혀 업데이트가 되지 않으니까.
      // warning 메세지를 띄워줍니다.

      // line 59:6:  React Hook useEffect has a missing dependency: 'cardRepository'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

      // 59 : 6 행 : React Hook useEffect에 누락 된 종속성 'cardRepository'가 있습니다. 그것을 포함하거나 의존성 배열을 제거하십시오 react-hooks / exhaustive-deps
    });

    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService //
      .onAuthChange((userId) => {
        if (userId) {
          setUserId(userId.uid);
          console.log(userId);
        } else {
          history.push('/');
        }
      });
  }, [authService, userId, history]);

  const createOrUpdateCard = (card) => {
    // const updated = { ...cards };
    // updated[card.id] = card;
    // setCards(updated); // 이렇게 할 수 도있으나,
    // 비동기적으로 처리 하는 부분이 있으면 항상 저 state의 값이 최신
    // 의 상태라고 말 할 수 없습니다.
    // setState 는 콜백 할수를 받을 수 있으므로 함수로 처리함을 권장 드립니다.

    setCards((cards) => {
      // 인자로 받아오는 cards 라는 state는
      // setCards 가 불린 바로 그 시점에서의 state입니다.
      const updated = { ...cards }; // 인자로 받아온 카드를 복사하여
      // 다음 로직을 진행합니다.
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      // 인자로 받아오는 cards 라는 state는
      // setCards 가 불린 바로 그 시점에서의 state입니다.
      const updated = { ...cards }; // 인자로 받아온 카드를 복사하여
      // 다음 로직을 진행합니다.
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
