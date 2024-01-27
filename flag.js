"use strict";

const flag = [
  [
    {
      question: `<span class="fi fi-al flag-icon"></span>`,
      option: ["Albania", "Guam", "Brazil", "Algeria"],
      answer: "Albania",
    },

    {
      question: `<span class="fi fi-dz flag-icon"></span>`,
      option: ["Zambia", "Greece", "Algeria", "Åland Islands"],
      answer: "Algeria",
    },

    {
      question: `<span class="fi fi-ad flag-icon"></span>`,
      option: ["Czechia", "Japan", "Guam", "Andorra"],
      answer: "Andorra",
    },

    {
      question: `<span class="fi fi-ua flag-icon"></span>`,
      option: ["Sweden", "Uzbekistan", "Mexico", "Ukraine"],
      answer: "Ukraine",
    },

    {
      question: `<span class="fi fi-mx flag-icon"></span>`,
      option: ["Montenegro", "Mexico", "Kuwait", "Kenya"],
      answer: "Mexico",
    },

    {
      question: `<span class="fi fi-bz flag-icon"></span>`,
      option: ["Belize", "Maldives", "Bahamas", "Nigeria"],
      answer: "Belize",
    },

    {
      question: `<span class="fi fi-mv flag-icon"></span>`,
      option: ["United Kingdom", "Vietnam", "Maldives", "Zambia"],
      answer: "Maldives",
    },

    {
      question: `<span class="fi fi-zw flag-icon"></span>`,
      option: ["United States", "Egypt", "India", "Zimbabwe"],
      answer: "Zimbabwe",
    },

    {
      question: `<span class="fi fi-bs flag-icon"></span>`,
      option: ["Kuwait", "Bahamas", "France", "Georgia"],
      answer: "Bahamas",
    },

    {
      question: `<span class="fi fi-ge flag-icon"></span>`,
      option: ["Mauritius", "Georgia", "Nigeria", "Norway"],
      answer: "Georgia",
    },

    {
      question: `<span class="fi fi-hu flag-icon"></span>`,
      option: ["Hungary", "Mauritius", "Kuwait", "Jamaica"],
      answer: "Hungary",
    },

    {
      question: `<span class="fi fi-jm flag-icon"></span>`,
      option: ["Sweden", "Pakistan", "Jamaica", "South Africa"],
      answer: "Jamaica",
    },

    {
      question: `<span class="fi fi-se flag-icon"></span>`,
      option: ["Sweden", "Yemen", "Thailand", "Turkey"],
      answer: "Sweden",
    },

    {
      question: `<span class="fi fi-ye flag-icon"></span>`,
      option: ["Sweden", "Turkey", "Yemen", "Jamaica"],
      answer: "Yemen",
    },

    {
      question: `<span class="fi fi-zm flag-icon"></span>`,
      option: ["Rwanda", "Singapore", "Zambia", "Egypt"],
      answer: "Zambia",
    },

    {
      question: `<span class="fi fi-eg flag-icon"></span>`,
      option: ["Denmark", "Egypt", "Cuba", "Colombia"],
      answer: "Egypt",
    },

    {
      question: `<span class="fi fi-co flag-icon"></span>`,
      option: ["Argentina", "Bermuda", "Canada", "Colombia"],
      answer: "Colombia",
    },

    {
      question: `<span class="fi fi-ca flag-icon"></span>`,
      option: ["Nigeria", "Canada", "France", "Ghana"],
      answer: "Canada",
    },

    {
      question: `<span class="fi fi-in flag-icon"></span>`,
      option: ["Germany", "India", "Israel", "Uganda"],
      answer: "India",
    },

    {
      question: `<span class="fi fi-ma flag-icon"></span>`,
      option: ["United States", "Morocco", "Nigeria", "Pakistan"],
      answer: "Morocco",
    },

    {
      question: `<span class="fi fi-us flag-icon"></span>`,
      option: ["Uganda", "United States", "South Africa", "Spain"],
      answer: "United States",
    },

    {
      question: `<span class="fi fi-es flag-icon"></span>`,
      option: ["Spain", "Greece", "Angola", "Switzerland"],
      answer: "Spain",
    },

    {
      question: `<span class="fi fi-ao flag-icon"></span>`,
      option: ["Angola", "Lebanon", "Rwanda", "Qatar"],
      answer: "Angola",
    },

    {
      question: `<span class="fi fi-pe flag-icon"></span>`,
      option: ["Qatar", "Canada", "United Kingdom", "Peru"],
      answer: "Peru",
    },

    {
      question: `<span class="fi fi-ph flag-icon"></span>`,
      option: ["Croatia", "Philippines", "Cyprus", "Aruba"],
      answer: "Philippines",
    },

    {
      question: `<span class="fi fi-aw flag-icon"></span>`,
      option: ["Canada", "Australia", "Peru", "Aruba"],
      answer: "Aruba",
    },

    {
      question: `<span class="fi fi-ar flag-icon"></span>`,
      option: ["Belgium", "Bermuda", "Argentina", "Brazil"],
      answer: "Argentina",
    },

    {
      question: `<span class="fi fi-br flag-icon"></span>`,
      option: ["Israel", "Brazil", "Italy", "Russia"],
      answer: "Brazil",
    },

    {
      question: `<span class="fi fi-ru flag-icon"></span>`,
      option: ["South Africa", "Nigeria", "Turkey", "Russia"],
      answer: "Russia",
    },

    {
      question: `<span class="fi fi-tr flag-icon"></span>`,
      option: ["Turkey", "United Kingdom", "Brazil", "Angola"],
      answer: "Turkey",
    },

    {
      question: `<span class="fi fi-gb flag-icon"></span>`,
      option: [
        "United Arab Emirates",
        "United States",
        "United Kingdom",
        "Brazil",
      ],
      answer: "United Kingdom",
    },

    {
      question: `<span class="fi fi-ae flag-icon"></span>`,
      option: ["United Arab Emirates", "Qatar", "Rwanda", "Portugal"],
      answer: "United Arab Emirates",
    },

    {
      question: `<span class="fi fi-qa flag-icon"></span>`,
      option: ["Côte d'Ivoire", "Indonesia", "Qatar", "Madagascar"],
      answer: "Qatar",
    },

    {
      question: `<span class="fi fi-ci flag-icon"></span>`,
      option: ["Cuba", "Côte d'Ivoire", "Malawi", "Malaysia"],
      answer: "Côte d'Ivoire",
    },

    {
      question: `<span class="fi fi-my flag-icon"></span>`,
      option: ["South Africa", "Nigeria", "Malaysia", "Togo"],
      answer: "Malaysia",
    },

    {
      question: `<span class="fi fi-za flag-icon"></span>`,
      option: ["Tunisia", "Portugal", "Kuwait", "South Africa"],
      answer: "South Africa",
    },

    {
      question: `<span class="fi fi-fr flag-icon"></span>`,
      option: ["Bermuda", "France", "China", "Nigeria"],
      answer: "France",
    },

    {
      question: `<span class="fi fi-ng flag-icon"></span>`,
      option: ["Senegal", "Saudi Arabia", "Seychelles", "Nigeria"],
      answer: "Nigeria",
    },

    {
      question: `<span class="fi fi-sa flag-icon"></span>`,
      option: ["Monaco", "Saudi Arabia", "Norway", "Ghana"],
      answer: "Saudi Arabia",
    },

    {
      question: `<span class="fi fi-gh flag-icon"></span>`,
      option: ["Ghana", "Cameroon", "Birnin Kebbi", "Belgium"],
      answer: "Ghana",
    },

    {
      question: `<span class="fi fi-cn flag-icon"></span>`,
      option: ["Ghana", "China", "Cameroon", "Monaco"],
      answer: "China",
    },
  ],

  {
    quizTime: 60,
  },
];
