module.exports = {
  env: {
    browser: true, // 브라우저 환경의 여러 전역 개념들 모두 코드 검사
    node: true, // node.js에서 동작하는 여러 전역 개념들 모두 코드 검사
  },
  extends: [
    // vue
    // "plugin:vue/vue3-essential", // lv1
    "plugin:vue/vue3-strongly-recommended", // lv2
    // "plugin:vue/vue3-recommended", // lv3 (가장 엄격)

    // js
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser", // 바벨 구문 검사
  },
  rules: {
    // 기본적인 내용만 쓴다면 안적어도 괜찮음
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never"
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
};
