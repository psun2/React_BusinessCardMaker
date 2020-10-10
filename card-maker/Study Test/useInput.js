// 사용이유 : react 에서 input의 value 값을 지정 해 놓게되면...
// 리 랜덩링이되면서 항상 그 value를 유지하게 됩니다.
// 하지만 그 value 의 값을 state 로 관리 하게 되면
// HTML 에서 와 같이 유동적으로 변경이 가능합니다.

// 또한 event.target.value = "변경값"; 으로 변경을 하게 되면
// onChange가 일어났을때 그 때 value 가 바뀌고, 다시 리랜더 되면서,
// 초기의 값을 계속 유지 하여 바뀌지 않습니다.

// 코드 보겠습니다.

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event);
  };

  return { value, onChange };
};
// 리턴하는 params 의 종류와 그 의미...
// <input value = state의 value 가 될 것이고, onChange 이벤트 역시 onChane가 될 것입니다. />

// 오브젝트로 반환 하게 되면 구조분해 문법으로 좀더 간편하게 사용 가능 합니다.

const inutUpdate = useInput('기존 사용자 아이디');

<input type="text" {...input} />;
// spread 연산자 를 사용 하여 결국 위의 문법은
// value=value, onchange=onChange가 되게 됩니다.

// 간편하긴 하지만... 가독성이 떨어지는 것 같음.
