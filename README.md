## 전체적인 Logic

- 데이터 입력
  1. PhoneForm 에서 이름, 전화번호를 입력받아 App 으로 전달
  2. App 에서 배열형태로 데이터를 추가하여 상태값으로 저장
- 화면에 출력
  1. App 에서 PhoneInfoList 호출 (번호목록 state를 props로 전달)
  2. PhoneInfoList에서 전달받은 목록을 JSX(요소마다 PhoneInfo 호출)로 변환하여 출력

## 함수형 컴포넌트의 state 변경 시 replace되는 이슈

### 전개연산자

_공식 문서 발최_

클래스 컴포넌트의 setState 메서드와는 다르게, useState는 갱신 객체(update objects)를 자동으로 합치지는 않습니다. 함수 업데이터 폼을 객체 전개 연산자와 결합함으로써 이 동작을 복제할 수 있습니다.

```javascript
setState((prevState) => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues };
});
```

다른 방법으로는 useReducer가 있는데 이는 여러개의 하윗값들을 포함한 state 객체를 관리하는 데에 더 적합합니다.

### Computed property names

'[]' 를 이용해 객체의 속성명에 구문을 넣을 수 있다.

예)

```javascript
setData({
  ...data,
  [e.target.name]: e.target.value,
});
```

## input 컴포넌트의 값을 state에 담기

```javascript
function handleChange(e) {
  setData({
    ...data, // 전개연산자
    [e.target.name]: e.target.value,
  });
}
```

이벤트 핸들러 함수를 호출하면 이벤트가 발생한 컴포넌트가 event.target 속성으로 넘어온다.

## 부모 컴포넌트에게 정보 전달하기

부모 컴포넌트에서 메소드를 만들고, 이 메소드를 자식에게 props로 전달한 다음에 자식 내부에서 호출하는 방식을 사용한다..

- 부모 컴포넌트

```javascript
function handleCreate(data) {
  setInfo([...info, { id: info[info.length - 1].id + 1, ...data }]);
  // console.log(data);
}
```

메소드 선언

```javascript
return (
  <div>
    <PhoneForm onCreate={handleCreate} />
    <PhoneInfoList data={info} />
  </div>
);
```

자식 컴포넌트에게 onCreate라는 이름의 props로 메소드를 전달

- 자식 컴포넌트

```javascript
function handleSubmit(e) {
  e.preventDefault();
  props.onCreate(data); // *
  setData({ name: "", phone: "" });
}
```

발생한 이벤트를 처리할 정보를 부모 컴포넌트의 메소드를 실행함으로써 넘겨준다.

## e.preventDefault()

원래 이벤트가 해야하는 작업을 방지한다.
ex) submit 버튼을 누를 시 새로고침 되는 것

## key

```javascript
const list = data.map((info) => <PhoneInfo key={info.id} info={info} />);
```

배열을 array.map()을 통해 JSX로 변환할 때에는 컴포넌트에 key라는 속성을 넣어줘야 함. (key 정보를 통해 DOM에서 렌더링할 요소를 정한다.(성능향상))

이 때 key의 값은 고유값이어야 한다. ex) DB 테이블의 primary key값
