# React 공부
- Facebook에서 개발한 JS 라이브러리
- 효율적인 Web UI를 개발하기 위해 사용

## 특징
- `JSX` 문법
- `컴포넌트 기반`의 구조 (독립적, 재사용 가능한 UI 조각들로 구성)
- 화면이 변경될 때 `필요한 부분만 자동으로 업데이트`(Virtual DOM -> 가상 돔)
- `부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하여 관리`

> SPA, JSX, Hook, Virtual DOM, Component 용어 정리하기!

### SPA
하나의 HTML 페이지로 동작하는 웹 애플리케이션

#### 기존 방식
- 페이지 이동 시 서버로 요청 -> 서버에서 HTML 문서를 응답
- 전체 화면이 다시 로드되고 페이지 로딩 시간이 발생하며 화면 깜빡임 현상이 나타남
- 서버에서 페이지 렌더링 담당 -> 구조가 단순하나 리로딩이 잦아 사용자 경험(UX) 저하

#### 리액트 방식
- **최초 로드 시** 하나의 HTML 파일과 정적 파일(JS, CSS 등)만 서버로부터 받음
- 페이지 전환 시 JS로 처리 -> 필요 데이터만 서버로 요청 => `비동기 통신`
- 변경된 데이터만 DOM에 업데이트하고 이 데이터를 사용해 즉각적인 페이지 전환을 제공
- `코드 재사용성 증가`, `생산성 향상`, `성능 최적화 용이`
- **SEO 문제와 초기 로딩 시간이 다소 오래 걸림**
    - => SEO: 검색 엔진 최적화

### 가상 돔 (Virtual DOM)
> 경량화된 DOM의 복사본 (JS 객체 형태로 **메모리**에 유지)
```
리액트에서는 화면이 변경될 때 DOM을 바로 업데이트하지 않고

실제 DOM을 복사해 둔 가상 DOM에 변경된 부분을 계산하여

최소한의 변경만 적용함
```

### JSX
JS로 html을 작성할 수 있는 문법
- 리액트에서 UI를 만들 때 사용하는 기본 문법
- 브라우저는 JSX를 해석하지 못하므로 Babel을 통해 JS 코드로 변환함
- 직관적이고 생산적인 코드 작성 가능

```js
const root = () => {
    return (
        <div>
            <h1>예제!!</h1>
        </div>
    );
}
```

#### 문법
##### class가 아닌 `className` 사용
```js
<div className="container"></div>
```

##### JS 표현식은 중괄호{} 사용
```js
<p>{userName}님 안녕하세요</p>
```

##### 인라인 스타일은 객체 형태, 속성명은 카멜 케이스 표기법!
```js
<div style="{{backgroundColor: 'blue'}}"></div>
```

##### `컴포넌트는 대문자로 시작`
- 소문자일 경우 HTML 태그로 인식함

##### `JSX는 하나의 최상위 요소만 반환`

##### 조건부 렌더링 : if 대신 삼항 연산자 또는 && 연산자 사용

##### 주석 : {/* 주석 */}

### `Component`
종류 | 클래스형 컴포넌트 | 함수형 컴포넌트
:----: | :---------------: | :-------------:
정의 | class render() method | function 컴포넌트 자체 return
상태관리 | this.state, this.setState() | useState
life cycle method | componentDidMount, componentDidUpdate 등 | useEffect
상속 | React.Component 상속 | 없음
사용성 | 클래스 기반으로 코드 복잡 | 간결함
성능 | 무겁고 복잡함, 성능이 떨어질 수 있음 | 가벼움, 성능 최적화에 유리

## const [count, setCount] = useState(0);
```js
const [count, setCount] = useState(0); // 배열 구조 분해 할당
```
```
const 는 블록 범위의 상수를 선언할 때 사용됨.

선언된 변수는 재할당할 수 없지만,
객체나 배열의 경우 그 내부의 속성이나 요소는 변경할 수 있음.
```
[MDN 참고자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)

> count는 직접 바뀌는 게 아닌 새 값으로 상태가 변경되고 React가 다시 해당 컴포넌트를 렌더링함

## yarn
npm 보다 설치 속도가 좀 더 빠름

### 프로젝트 생성
```bash
yarn create react-app 프로젝트명
npx create-react-app 프로젝트명
```

## 리액트 프로젝트 명명 규칙
- 소문자만 사용
- 공백사용 불가 => `-` 혹은 `_`로 구분
- 숫자는 사용 가능하나 첫 글자로는 사용할 수 없다
- 특수문자 사용 불가# kh-react
# kh-react
