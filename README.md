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
