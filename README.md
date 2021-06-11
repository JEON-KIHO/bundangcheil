# 분당제일여성병원 리뉴얼 작업
***
<br>

## FRONTEND
[React][React link], [Redux][Redux link], [React-Redux][React-Redux link] 등을 이용하였습니다.

### DIRECTOR
| 1 Depth | 2 Depth | 3 Depth | 4Depth | 설명 | 비고 |
| --- | :---: | :---: | :---: | :---: | :---: |
| bundangcheil-renewal |  |  |  | project root directory |  |
| bundangcheil-renewal | api |  |  | backend directory | 백엔드 설명 참조 |
| bundangcheil-renewal | build |  |  | frontend build directory | front 빌드 시 자동 생성 |
| bundangcheil-renewal | node_nodules |  |  | 의존성 모듈 directory | npm i 시 자동 생성 |
| bundangcheil-renewal | public |  |  | 정적 파일 directory | html, image files |
| bundangcheil-renewal | src |  |  | React source files | js, jsx, css files |
| bundangcheil-renewal | src | components |  | React components files | 요소별 directory 구분 |
| bundangcheil-renewal | src | store |  | Redux controller directory | 요소별 directory 구분<br>(actions, reducer, types file) |
| bundangcheil-renewal | src | store | index.js | import Reducer를 편하게 하기 위해 생성 |  |
| bundangcheil-renewal | src | store | rootReducer.js | combineReducer |  |
| bundangcheil-renewal | src | store | state.js | state 관리 file |  |
| bundangcheil-renewal | src | store | store.js | Redux 관리 file | rootReducer와 middleware 병합 |

#### DEVELOPMENT
프로젝트 디렉토리로 이동 후 실행
```bash
cd bundangcheil-renewal # root directory로 이동
npm start
```

`3000`PORT에서 FRONTEND 시작 ([http://localhost:3000/][localhost front]에서 확인)
***
<br>

## BACKEND



[React link]: https://reactjs.org/
[Redux link]: https://redux.js.org/
[React-Redux link]: https://react-redux.js.org/
[localhost front]: http://localhost:3000/