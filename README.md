# Carrot Market clone coding

- #01 init NextJS

  - npx create-next-app@latest --typescript
  - delete pages/api folder
  - delete stlyes/Home\* file

- #02 TailwindCSS Setup

  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p

- #03 TailwindCSS Practice

- #04 TailwindCSS Practice 2

  - aspect-square 라는 property는 정사각형으로 만들어준다. 즉, 가로 세로길이를 같게 해준다. (aspect-ratio: 1/1)
  - space-x-3 과 같은 space property는 자식 요소들 간의 간격을 마진으로 알아서 만들어 준다.

- #05 TailwindCSS Practice 3

  - Modifier 라는 기능은 어떤 변경점을 말하는데 예를 들어 hover: focus: 등등이 그런 녀석을 말한다.

- #06 TailwindCSS Practice 4

  - List를 다룰 때도 여러 기능을 사용할 수 있다. (first, last, only, even, oad, empty ...)

- #07 TailwindCSS Practice 5

  - group이라는 property를 사용해서 전체 그룹을 지정하고 그 그룹 내 어떤 특정 요소가 group에 대한 행위가 수행되었을 때 modify가 되는 작업을 할 수 있다.
  - 일단 첫번째로 그룹을 지정해야하고 (group이라는 property를 전체 부모에 할당) 그룹 내에서 변경할 녀석을 작업해 주면 된다. (group-xxxx 으로 작업)

  - form을 사용할 때 사용가능한 여러 property도 있다.
    예를 들면, focus-within은 form 내 어떤 요소가 focus가 되면 form에 어떤 변화를 준다든가.
    required:, invalid, placeholder-shown: 등등 정말 다양한 게 있다.
  - peer-modifier라는 좋은 기능도 있는데 form을 사용할 때 어떤 인풋이 valid하지 않으면 뭐 잘못된 값을 입력했다는 안내 문구 같은 거를 말한다.
    peer가 될 녀석을 선택하고 peer의 변화에 따라 변경을 해줄 녀석을 peer-xxx 로 작업하면 된다 group이랑 약간 비슷하다.

- #08 TailwindCSS Practice 6

  - file selector modifier
  - overlapping selector modifier

- #09 TailwindCSS Practice 7

  - Responsive CSS

- #10 TailwindCSS Practice 8

  - Responsive Design
  - Grid content center --> place-content-center
  - landscape / portrait

- #11 TailwindCSS Practice 9

  - Dark mode (일단, Tailwind는 tailwind.config.js 파일에서 기본 세팅이 media로 되어있는데 이게 의미하는 건 사용자의 시스템 속성을 따라간다
    예를 들면, 내 PC가 dark mode 이면 이 tailwind도 기본이 darkmode로 세팅이되는 것, 근데 이 media말고 class가 있는데 이거는 className에 dark라는 키워드를 수동적으로
    입력을 해줘야 dark모드를 실행한다는 그런 코드적인 부분으로 변경된다. 그래서 만약 어떤 앱이 다크모드를 선택 가능하게 토글버튼을 하나 보여주고 그걸 토글해서 darkmode로 실행하면
    className에 dark를 추가하는 방식도 있지 근데 이 dark라는 키워드는 부모요소에 들어가고 그 하위 자식요소들에서 dark:xxx 이렇게 만들어줘야 한다 그래서 dark라는 키워드가 있는
    부모의 자식에 한해서 다크모드에 대한 디자인을 할 수 있다 그래서 대게 html 태그나 body 태그같은 가장 상위요소 태그에 dark를 추가하는 뭐 그런 방식을 많이들 사용하지)

- #12 TailwindCSS Practice 10

  - tailwind 3.0 부터 JIT 컴파일러를 사용해서 생산성이 정말 말도안되게 높아졌는데 이 Just In Time 컴파일러는 뭐냐면
    내가 코드를 작성할 때 이 컴파일러가 tailwind.config.js 에서 작성하기로 약속한 그 파일들을 계속 주시하다가 어떤 특정 className을 사용하면
    그때마다 그 css 속성을 알아서 만들어주는 놈이다. 그래서 파일의 크기가 쓸데없이 커질 이유도 없고 내가 쓰는 css 속성만 만들어주기 때문에 너무나 편리하다
    거기다가 가장 좋은 점은 이 tailwind라는 프레임워크의 특성의 한계가 정해진 값만 사용할 수 있잖아 예를 들면 text-sm, text-lg 등 근데 이 정해진 가장 큰 속성보다
    더 큰 속성을 원할 때 그저 나는 "text-\[9999px]" 라고 작성하면 된다 그럼 이 컴파일러가 알아서 만들어준다. 정말 대단하다.
    거기다가 더 대단한건 bg-\[url('/example.png')] 이렇게 bg image도 내가 원하는 만큼 알아서 만들 수 있다는거다

- #13 Enter pages

  - TailwindCSS의 속성을 function을 사용해서 conditional하게 작성 가능하다.

- #14 TailwindCSS Forms Plugin

  - npm i @tailwindcss/forms
  - tailwind.config.js에 추가한 플러그인을 작성

- #15 Home Screen

- #16 Item Detail Screen

- #17 File Input Tag Design

  - label 태그 안에 이미지로 보여질 svg와 input 태그를 넣고 input 태그는 css로 hidden 처리를 해준다. 그리고 svg를 꾸며주면 깔끔 !

- #18 Upload Screen

  - 부모의 relative 자식의 absolute를 사용하여 인풋에 한 줄로 달러 표시 USD 표시를 막 만들 수 있다

- #19 Community Screen

- #20 Community Detail Screen

- #21 Write Screen

- #22 Chats Screen

- #23 Chat Room Screen

  - 입력창 하단 고정, 수신 및 발신 메시지 위치 설정

- #24 Profile Screen

- #25 Sold, Bought, Loved Screen

- #26 Edit Profile Screen

- #27 Live Stream Screen

- #28 Stream Detail Screen

- #29 Create Stream Screen

- #30 Layout (Header, NavBar)

- #31 Screen Part Done

- #32 Components (Code Refactoring)

- #33 Components 2 (Code Refactoring)

- #34 Prisma Setup and User Model

  ```bash
  - npm i prisma -D (프리즈마 다운로드)
  - npx prisma init (프리즈마 다운받고 init)
  ```

- #35 PlanetScale Setup

  - PlanetScale은 우리가 직접 서버를 관리할 필요 없이 알아서 서버 관리를 해주는 데이터베이스라고 보면 된다.
    즉 우리는 그저 이 데이터베이스를 가져다가 사용만하면 알아서 PlanetScale이 유지보수, 스케일링, 등등을 해주는 serverless platform이다.
    그리고 이 데이터베이스를 prisma랑 연결해서 사용을 할 것이다. PlanetScale CLI를 사용해야 하는데 설치방법은 구글링하면 바로 나오니까 그거 하고 나서
    로그인을 하면 pscale이라는 명령어를 통해서 데이터베이스를 만들고 만든 데이터베이스를 커넥션할 수 있다.

  ```bash
  pscale create database <database name> --region <region name> (데이터 베이스 생성)
  pscale connect <database name> (만든 데이터베이스와 연결)
  ```

- #36 Push DB to PlanetScale

  - 하나 주의할 건 PlanetScale은 외래키 제약조건을 검사해주지 않는다. 그래서 그걸 대신해줄 Prisma에게
    나 이것이 필요하다는 코드 두줄을 작성해야한다. schema.prisma에

  ```bash
  - npx prisma db push
  ```

- #37 Prisma Practice

  ```bash
  - npm i @prisma/client (이건 prisma client를 설치하는 명령어)
  - npx prisma generate (이건 prisma client로 데이터베이스 작업을 할 수 있게 client를 generate 해주는 명령어)
  - npx prisma studio (이건 데이터베이스 관리자 패널을 띄우는 명령어)
  ```

- #38 NextJS API Routes

  - NextJS는 너무 강력해서 서버를 따로 하나 더 만들어서 서버를 구축할 필요 없이 그냥 pages > api 폴더로 routing을 해서 api를 구현할 수가 있다.

- #39 React Hook Form

  ```bash
  - npm i react-hook-form
  ```

- #40 Convert HTML Form to React Hook Form

- #41 Custom Hook
