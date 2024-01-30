# projectFront_2

# [TravelDiary]()

<b>간단한 CRUD 여행지 등록</b>

<br />

## TravelDiary

<br />

내가 추천하고 싶은 여행지 CRUD 만들어 보기

<br/>

### 📆 프로젝트 기간

- 2024.01.26 ~ 2024.02.01

<br/>

### 😎 Members

<table>
   <tr>
    <td align="center"><b><a href="https://github.com/simpleProjectTeam/projectFront_2">고우영</a></b></td>
    <td align="center"><b><a href="https://github.com/simpleProjectTeam/projectBack_2">정현식</a></b></td>
  </tr>
  <tr>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Backend</b></td>
  </tr>
</table>

<br/>
<br/>

## 프로젝트 기능 소개

#### 🐰 여행 추천 CRUD

- 전세계의 여행지를 추천을 해주기 위해 이미지와 내용을 등록, 삭제, 수정을 할 수 있습니다.


<br/>
<br/>

## 🛠 Tools

#### Design

<p>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
</p>

#### Frontend

<p>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/Reacticons-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Fetch_API-F7DF1E?style=for-the-badge&logo=fetch-api&logoColor=black">
</p>

#### Backend

<p>
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
</p>

#### Infrastructure

<p>
  <img src="https://img.shields.io/badge/Fly.io-2B7AC9?style=for-the-badge&logo=fly.io&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</p>

#### Dev tools

<p> 
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">
</p>

<br>
<br>

## 🔥 Trouble Shooting

### Issue1
  <img src="https://i.postimg.cc/G2VLX81z/2024-01-30-153839.png">

#### 원인

  - 수정페이지에서 로직을 구현을 했을때 id를 못찾는 이슈가 생김

#### 해결 순서
  - 로직에는 문제가 없고, 디버그로 순서를 봤을 때, 라우터와 링크로 인한 id를 못찾는 경우인 것을 확인

  <img src="https://i.postimg.cc/26vMfVZ0/2024-01-30-153856.png"> 
  - 이런식으로 Link가 들어가있을때

  문제가 일어난 부분 
  <img src="https://i.postimg.cc/bvRSVR6g/2024-01-30-154648.png"> 

  - 바뀐 부분
  <img src="https://i.postimg.cc/j5zgFmp9/2024-01-30-153906.png">
  - CarouselItem에서 id를 명시적으로 받아와서 링크로 돌렸어야 하는 간단한 문제였습니다.
<br/>


