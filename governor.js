"use strict";

const governor = [
  [
    {
      question: "Governor of Abia State",
      option: [
        "Alex Otti",
        "Babajide Sanwo-Olu",
        "Babagana Zulum",
        "Mohammed Umar Bago",
      ],
      answer: "Alex Otti",
    },

    {
      question: "Governor of Adamawa State",
      option: [
        "Yahaya Bello",
        "AbdulRahman AbdulRasaq",
        "Bala Muhammed",
        "Ahmadu Umaru Fintiri",
      ],
      answer: "Ahmadu Umaru Fintiri",
    },

    {
      question: "Governor of Akwa Ibom State",
      option: ["Babajide Sanwo-Olu", "Peter Mbah", "Umo Eno", "Caleb Mutfwang"],
      answer: "Umo Eno",
    },

    {
      question: "Governor of Anambra State",
      option: [
        "Lucky Aiyedatiwa",
        "Charles Soludo",
        "Bala Muhammed",
        "Babagana Zulum",
      ],
      answer: "Charles Soludo",
    },

    {
      question: "Governor of Bauchi State",
      option: ["Bassey Otu", "Charles Soludo", "Bauchi", "Bala Muhammed"],
      answer: "Bala Muhammed",
    },

    {
      question: "Governor of Bayelsa State",
      option: ["Yenagoa", "Douye Diri", "Caleb Mutfwang", "Biodun Oyebanji"],
      answer: "Douye Diri",
    },

    {
      question: "Governor of Benue State",
      option: [
        "Dikko Umaru Radda",
        "Umar Namadi",
        "Hyacinth Alia",
        "Ademola Adeleke",
      ],
      answer: "Hyacinth Alia",
    },

    {
      question: "Governor of Borno State",
      option: [
        "Bassey Otu",
        "Babagana Zulum",
        "Ademola Adeleke",
        "Charles Soludo",
      ],
      answer: "Babagana Zulum",
    },

    {
      question: "Governor of Cross River State",
      option: ["Biodun Oyebanji", "Bassey Otu", "Uba Sani", "Ademola Adeleke"],
      answer: "Bassey Otu",
    },

    {
      question: "Governor of Delta State",
      option: [
        "Godwin Obaseki",
        "Nasir Idris",
        "Sheriff Oborevwori",
        "Biodun Oyebanji",
      ],
      answer: "Sheriff Oborevwori",
    },

    {
      question: "Governor of Ebonyi State",
      option: [
        "Umar Namadi",
        "Francis Nwifuru",
        "Dikko Umaru Radda",
        "Nasir Idris",
      ],
      answer: "Francis Nwifuru",
    },

    {
      question: "Governor of Edo State",
      option: [
        "Godwin Obaseki",
        "Caleb Mutfwang",
        "Mohammed Umar Bago",
        "Duruaku Chinedu Peter",
      ],
      answer: "Godwin Obaseki",
    },

    {
      question: "Governor of Ekiti State",
      option: [
        "Biodun Oyebanji",
        "Bassey Otu",
        "Dikko Umaru Radda",
        "Uba Sani",
      ],
      answer: "Biodun Oyebanji",
    },

    {
      question: "Governor of Enugu State",
      option: ["Uba Sani", "Umar Namadi", "Peter Mbah", "Caleb Mutfwang"],
      answer: "Peter Mbah",
    },

    {
      question: "Governor of Gombe State",
      option: [
        "Umo Eno",
        "Peter Mbah",
        "Hope Uzodinma",
        "Muhammad Inuwa Yahaya",
      ],
      answer: "Muhammad Inuwa Yahaya",
    },

    {
      question: "Governor of Imo state",
      option: [
        "Sheriff Oborevwori",
        "Mohammed Umar Bago",
        "Babagana Zulum",
        "Hope Uzodinma",
      ],
      answer: "Hope Uzodinma",
    },

    {
      question: "Governor of Jigawa state",
      option: [
        "Bala Muhammed",
        "Babajide Sanwo-Olu",
        "Umar Namadi",
        "Ahmadu Umaru Fintiri",
      ],
      answer: "Umar Namadi",
    },

    {
      question: "Governor of Kaduna state",
      option: [
        "Caleb Mutfwang",
        "Douye Diri",
        "Uba Sani",
        "Sheriff Oborevwori",
      ],
      answer: "Uba Sani",
    },

    {
      question: "Governor of Kano state",
      option: [
        "Abba Kabir Yusuf",
        "Mohammed Umar Bago",
        "Charles Soludo",
        "Agbu Kefas",
      ],
      answer: "Abba Kabir Yusuf",
    },

    {
      question: "Governor of Katsina State",
      option: [
        "AbdulRahman AbdulRasaq",
        "Yahaya Bello",
        "Dikko Umaru Radda",
        "Duruaku Chinedu Peter",
      ],
      answer: "Dikko Umaru Radda",
    },

    {
      question: "Governor of Kebbi State",
      option: [
        "Francis Nwifuru",
        "Nasir Idris",
        "Sheriff Oborevwori",
        "Dapo Abiodun",
      ],
      answer: "Nasir Idris",
    },

    {
      question: "Governor of Kogi State",
      option: [
        "Hope Uzodinma",
        "Siminalayi Fubara",
        "Yahaya Bello",
        "Alex Otti",
      ],
      answer: "Yahaya Bello",
    },

    {
      question: "Governor of Kwara State",
      option: [
        "Lucky Aiyedatiwa",
        "Umo Eno",
        "Douye Diri",
        "AbdulRahman AbdulRasaq",
      ],
      answer: "AbdulRahman AbdulRasaq",
    },

    {
      question: "Governor of Lagos State",
      option: [
        "Yahaya Bello",
        "Charles Soludo",
        "Babajide Sanwo-Olu",
        "Hope Uzodinma",
      ],
      answer: "Babajide Sanwo-Olu",
    },

    {
      question: "Governor of Nasarawa State",
      option: [
        "Muhammad Inuwa Yahaya",
        "Abdullahi Sule",
        "Hyacinth Alia",
        "Siminalayi Fubara",
      ],
      answer: "Abdullahi Sule",
    },

    {
      question: "Governor of Niger State",
      option: [
        "Babajide Sanwo-Olu",
        "Mohammed Umar Bago",
        "Caleb Mutfwang",
        "Agbu Kefas",
      ],
      answer: "Mohammed Umar Bago",
    },

    {
      question: "Governor of Ogun State",
      option: ["Dikko Umaru Radda", "Nasir Idris", "Dapo Abiodun", "Alex Otti"],
      answer: "Dapo Abiodun",
    },

    {
      question: "Governor of Ondo State",
      option: [
        "Umo Eno",
        "Lucky Aiyedatiwa",
        "Bala Muhammed",
        "Charles Soludo",
      ],
      answer: "Lucky Aiyedatiwa",
    },

    {
      question: "Governor of Osun State",
      option: [
        "Abdullahi Sule",
        "Ademola Adeleke",
        "Caleb Mutfwang",
        "Francis Nwifuru",
      ],
      answer: "Ademola Adeleke",
    },

    {
      question: "Governor of Oyo State",
      option: [
        "Hyacinth Alia",
        "Ahmad Aliyu",
        "Seyi Makinde",
        "Sheriff Oborevwori",
      ],
      answer: "Seyi Makinde",
    },

    {
      question: "Governor of Plateau State",
      option: [
        "Siminalayi Fubara",
        "Abdullahi Sule",
        "Caleb Mutfwang",
        "Nasir Idris",
      ],
      answer: "Caleb Mutfwang",
    },

    {
      question: "Governor of Rivers State",
      option: ["Siminalayi Fubara", "Umo Eno", "Umar Namadi", "Yahaya Bello"],
      answer: "Siminalayi Fubara",
    },

    {
      question: "Governor of Sokoto State",
      option: ["Dapo Abiodun", "Ahmad Aliyu", "Charles Soludo", "Umar Namadi"],
      answer: "Ahmad Aliyu",
    },

    {
      question: "Governor of Taraba State",
      option: ["Godwin Obaseki", "Agbu Kefas", "Hope Uzodinma", "Dapo Abiodun"],
      answer: "Agbu Kefas",
    },

    {
      question: "Governor of Yobe State",
      option: ["Umo Eno", "Bassey Otu", "Mai Mala Buni", "Peter Mbah"],
      answer: "Mai Mala Buni",
    },

    {
      question: "Governor of Zamfara State",
      option: ["Uba Sani", "Alex Otti", "Dauda Lawal", "Hope Uzodinma"],
      answer: "Dauda Lawal",
    },
  ],
  {
    quizTime: 60,
  },
];
