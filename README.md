# 포켓몬 도감 만들기

<br />

내일배움캠프 React 7기 과정에서 진행한 개인 프로젝트이다.

### 프로젝트 목표

-   React에서 props drilling과 Context API를 적용해서 데이터 흐름 이해하기

-   react-router-dom을 이용해서 SPA 구현하기

<br />

---

<br />

### Git Branch

-   props-drilling : props-drilling 방식으로 구현

<br />

---

<br />

### 프로젝트 설정

-   <b>Vite로 프로젝트 생성</b> : yarn create vite . --template react

-   <b>react-router-dom</b> : yarn add react-router-dom

-   <b>styled-components</b> : yarn add styled-components

-   <b>uuid</b> : yarn add uuid

-   <b>react-toastify</b> : yarn add react-toastify

<br />

---

<br />

### 프로젝트 내 컴포넌트

-   <b>Button</b> : 버튼 (포켓몬 도감 시작하기, 추가, 삭제, 뒤로 가기)

-   <b>Dashboard</b> : 나만의 포켓몬을 보여주는 board

-   <b>PokemonBall</b> : 포켓몬을 담을 수 있는 잔여 공간

-   <b>PokemonCard</b> : list 및 나만의 포켓몬을 구성하는 카드

-   <b>PokemonList</b> : 화면에 보여줄 포켓몬 list

<br />

---

<br />

### 구현한 기능

-   #### 포켓몬 목록 조회

    -   포켓몬 목록을 화면에 보여주기

-   #### 포켓몬 상세 정보 조회

    -   특정 포켓몬 선택 시 해당 포켓몬의 상세 정보를 화면에 보여주기

-   #### 나만의 포켓몬 추가

    -   나만의 포켓몬 등록하기

    -   중복되지 않게 최대 6개까지 등록 가능

-   #### 나만의 포켓몬 삭제

    -   나만의 포켓몬 삭제하기

<br />

---
