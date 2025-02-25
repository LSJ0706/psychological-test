## 마음대로 해!
자신 마음대로 하라는 뜻의 심리검사 사이트입니다. <br/>
간단한 심리검사 후 **심리유형**을 **공유**하는 온라인 플랫폼입니다.

<br/>

## 📑 페이지 구성
| 페이지 | 경로 | 설명 |
| --- | --- | --- |
| 홈 | `/` | 메인 홈화면 |
| MBTI검사 | `/test` | MBTI검사 하기 (로그인 필요) |
| MBTI검사 결과 | `/result` | 모든 유저의 MBTI검사 결과 보기|
| 마이페이지 | `/my-page` | 사용자 개인 페이지 (로그인 필요) |
| 로그인 | `/sign-in` | 사용자 로그인 페이지 |
| 회원가입 | `/sign-up` | 새로운 사용자 등록 페이지 |

### 홈 화면
![캡처2](https://github.com/user-attachments/assets/ed3c7cbe-fb2e-42e7-a889-1c90d57b3f8b)

### 모바일 헤더
![캡처3](https://github.com/user-attachments/assets/3e51c129-7d4e-4ed9-bda4-efb490a18121)
![캡처4](https://github.com/user-attachments/assets/3414980c-e48a-4219-9b81-3fe2a39713b5)

### MBTI 테스트 화면
![캡처11](https://github.com/user-attachments/assets/cf5599d5-a3b6-4ed5-b81b-177928aa1dc9)
### MBTI 테스트 결과
![캡처8](https://github.com/user-attachments/assets/57919cc2-6c94-4db3-8149-bba63a70ec9d)

### MBTI 테스트 결과 화면
![캡처9](https://github.com/user-attachments/assets/10b4d2ae-b767-4174-9742-301a6d9e9a09)
### MBTI 테스트 비공개 및 삭제 후 화면
![캡처10](https://github.com/user-attachments/assets/c67118e4-622d-4844-bc7d-896f3f20608e)

### 마이 페이지
![캡처7](https://github.com/user-attachments/assets/173943be-a0de-4086-967a-06ce8a4c7db0)

### 로그인 페이지
![캡처6](https://github.com/user-attachments/assets/4e641e2f-9ec4-4b5a-b01f-62adf47201ad)

### 회원가입 페이지
![캡처123](https://github.com/user-attachments/assets/b21cd471-4493-4448-a015-be7f9b0108dc)



<br/>
<br/>

## ⚙ 주요 기능

- MBTI 테스트: MBTI테스트를 하고 결과물을 다른 사람들과 공유할 수 있습니다.
- 사용자 경험 향상: SPA(Single Page Application) 구조를 활용하여 빠르고 매끄러운 페이지 전환을 제공합니다.
- 사용자 경험 향상: PC, 태블릿, 모바일 환경에서 헤더와 화면이 반응형으로 변합니다.
- 사용자 데이터 관리: JWT 서버를 통해 사용자 인증, JSON server를 사용해 테스트결과를 실시간으로 관리합니다.

<br/>

## 🕶️ 기술 스택

#### **Deploy** <br/>

&emsp; <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>

#### **Frontend** <br/>

&emsp; <img src="https://img.shields.io/badge/React_18.3.1-087ea4?style=for-the-badge&logo=React&logoColor=white" alt="React"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=000" alt="TypeScript"/> <img src="https://img.shields.io/badge/pnpm_10.3.0-F69220?style=for-the-badge&logo=pnpm&logoColor=fff" alt="PNPM" /> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white" alt="Tailwind CSS"/>

<br/>
<br/>

## 📍 프로젝트 실행
```sh
$ git clone https://github.com/LSJ0706/psychological-test.git
$ cd psychological-test

$ pnpm install
$ pnpm dev
```

<br/>
<br/>

## 📁 프로젝트 구조
```
📦 Hmm-code-review-site
├─ public
└─ src
   ├─ main.jsx
   ├─ App.jsx
   ├─ app
   │  ├─ ProtectedRouter.jsx
   │  └─ Router.jsx
   ├─ components
   │  ├─ commons
   │  ├─ features
   │  └─ layouts
   ├─ data
   ├─ libs
   │  ├─ apis
   │  └─ utils
   ├─ pages
   └─ stores
```

<br />
<br/>

## 📃 트러블 슈팅
https://velog.io/@leesj0706/%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-tailwind-%EB%B0%B0%EA%B2%BD-%EC%A0%81%EC%9A%A9


https://velog.io/@leesj0706/%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%ED%81%B4%EB%A6%AD%EB%8F%84-%EC%95%88%ED%96%88%EB%8A%94%EB%8D%B0-%EC%99%9C
