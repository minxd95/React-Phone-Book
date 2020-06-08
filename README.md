## 전개 연산자

_공식 문서 발최_

클래스 컴포넌트의 setState 메서드와는 다르게, useState는 갱신 객체(update objects)를 자동으로 합치지는 않습니다. 함수 업데이터 폼을 객체 전개 연산자와 결합함으로써 이 동작을 복제할 수 있습니다.

```javascript
setState((prevState) => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues };
});
```

다른 방법으로는 useReducer가 있는데 이는 여러개의 하윗값들을 포함한 state 객체를 관리하는 데에 더 적합합니다.
