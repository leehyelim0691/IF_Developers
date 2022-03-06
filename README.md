# IF_Developers - 효율적인 웹사이트 구현을 위한 UI/UX 자동화 시스템

# TODO list console app version 3

## 문제배경

웹 개발자가 아닌 비즈니스 사용자들도 웹사이트로 Form을 제작하는 것에 관심을 가지고 있는 요즘, 이들을 위한 UI/UX 자동화 사이트들이 많이 현존하고 있다.
그러나 이러한 사이트 들은 Form 을 쉽게 디자인 할 수는 있으나 데이터 항목이 많을 경우, 이를 수정하고 배치하는데 어려움이 있다.
따라서 이를 해결하기 위해 최소한의 작업으로 데이터 항목 컴포넌트를 배치하고, 정보 저장을 통해 빠르고 효율적이며 재사용이 가능한 웹 서비스의 레이아웃을 제작하는 것의 필요성을 느꼈다.

## 문제정의

[Problem Statement]
일반 사용자들이 GUI Tool을 통해 다양한 데이터를 쉽고 빠르게 입력할 수 있는 서비스를 제작한다.

[Constraints]
Form에서 사용 될 데이터 파일의 형식이 개발 된 Form 요소의 형식과 일치 해야 한다.

[Objectives]
일반 사용자가 GUI Tool을 통해 쉽고 편리하게 자동으로 맞춤형 Form을 제작하고 재사용이 가능한 웹사이트를 개발한다.


## 기능

i.사용자로부터 버튼을 이용해 Form 요소를 불러 오고, Json 데이터 구성
ii. 구성된 Json 형식을 토대로 Form 생성
iii. 해당 Form을 Template 으로 저장 및 다운로드

<img width="1057" src="https://ifh.cc/g/vrDdFc.png">



## 기술 스택
 * React 17.0.2
 * Node.js 17.1.0
 * Bootstrap 4.6
 
 
## Key Approach

1. Form에서 사용되는 데이터 종류별 React Component Library 제작
• 각 요소별 속성을 고려해 Custom Json format 정의 
• 정의된 Custom Json format을 토대로 Form을
구성할 입력 Component 생성 자체 Library를 사용하여 Form 생성 

2. 자체 Library를 사용하여 Form 생성
• 사용자로부터 버튼을 이용해 Library에서 Form 요소를 받아 해당 Custom Json Format을 불러옴.
• Custom Json Format의 속성을 사용자의 필요에 따라 수정을 가능하게 함.

<img width="500" src="https://ifh.cc/g/x8JkHC.jpg">
1. 시작화면
- 시작버튼을 누르면 Form 제작 화면으로 넘어갈 수 있다.

<img width="500" src="https://ifh.cc/g/9yJsYC.jpg">
2. 메인화면
- 왼쪽의 버튼을 눌러 Form의 Component를 생성할 수 있다.

<img width="500" src="https://ifh.cc/g/rdFeAQ.jpg">
3. Form Preview
- 생성된 Component의 Form을 확인할 수 있다.

<img width="500" src="https://ifh.cc/g/haHREm.jpg">
4. Template 저장
- 만들어진 Form을 Template으로 저장해 재사용할 수 있다.

<img width="500" src="https://ifh.cc/g/eGCrP9.jpg">
5. Template 불러오기
- 저장된 Template을 눌러 Form을 불러 올 수 있다.

<img width="500" src="https://ifh.cc/g/am4TJg.jpg">
6. Template 다운로드
원하는 Form을 Json Format으로 로컬에 다운로드 할 수 있다.

