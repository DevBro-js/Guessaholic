"use strict";

const capital = [
  [
    {
      question: "Capital of Abia State",
      option: ["Adamawa", "Yola", "Umuahia", "Akwa Ibom"],
      answer: "Umuahia",
    },

    {
      question: "Capital of Adamawa State",
      option: ["Gombe", "Maiduguri", "Cross River", "Yola"],
      answer: "Yola",
    },

    {
      question: "Capital of Akwa Ibom State",
      option: ["Benue", "Bauchi", "Uyo", "Akwa Ibom"],
      answer: "Uyo",
    },

    {
      question: "Capital of Anambra State",
      option: ["Awka", "Jigawa", "Birnin Kebbi", "Lokoja"],
      answer: "Awka",
    },

    {
      question: "Capital of Bauchi State",
      option: ["Kwara", "Ikeja", "Bauchi", "Lagos"],
      answer: "Bauchi",
    },

    {
      question: "Capital of Bayelsa State",
      option: ["Yenagoa", "Enoch", "Damaturu", "Abeokuta"],
      answer: "Yenagoa",
    },

    {
      question: "Capital of Benue State",
      option: ["Rivers", "Jalingo", "Makurdi", "Zamfara"],
      answer: "Makurdi",
    },

    {
      question: "Capital of Borno State",
      option: ["Maiduguri", "Taraba", "Oshogbo", "Minna"],
      answer: "Maiduguri",
    },

    {
      question: "Capital of Cross River State",
      option: ["Kebbi", "Calabar", "Cross River", "Ekiti"],
      answer: "Calabar",
    },

    {
      question: "Capital of Delta State",
      option: ["Katsina", "Asaba", "Lagos", "Port Harcourt"],
      answer: "Asaba",
    },

    {
      question: "Capital of Ebonyi State",
      option: ["Ebonyi", "Abakaliki", "Oshogbo", "Port Harcourt"],
      answer: "Abakaliki",
    },

    {
      question: "Capital of Edo State",
      option: ["Benin City", "Akure", "Borno", "Uyo"],
      answer: "Benin City",
    },

    {
      question: "Capital of Ekiti State",
      option: ["Yobe", "Ado Ekiti", "Ibadan", "Ekiti"],
      answer: "Ado Ekiti",
    },

    {
      question: "Capital of Enugu State",
      option: ["Delta", "Nasarawa", "Ekiti", "Enugu"],
      answer: "Enugu",
    },

    {
      question: "Capital of Gombe State",
      option: ["Gombe", "Makurdi", "Dutse", "Benin City"],
      answer: "Gombe",
    },

    {
      question: "Capital of Imo State",
      option: ["Gombe", "Kebbi", "Imo", "Owerri"],
      answer: "Owerri",
    },

    {
      question: "Capital of Jigawa State",
      option: ["Bayelsa", "Borno", "Yenagoa", "Dutse"],
      answer: "Dutse",
    },

    {
      question: "Capital of Kaduna State",
      option: ["Bauchi", "Maiduguri", "Kaduna", "Umuahia"],
      answer: "Kaduna",
    },

    {
      question: "Capital of Kano State",
      option: ["Umuahia", "Ado-Ekiti", "Kano", "Awka"],
      answer: "Kano",
    },

    {
      question: "Capital of Katsina State",
      option: ["Ado-Ekiti", "Jigawa", "Benue", "Katsina"],
      answer: "Katsina",
    },

    {
      question: "Capital of Kebbi State",
      option: ["Jos", "Damaturu", "Birnin Kebbi", "Ibadan"],
      answer: "Birnin Kebbi",
    },

    {
      question: "Capital of Kogi State",
      option: ["Abakaliki", "Owerri", "Kaduna", "Lokoja"],
      answer: "Lokoja",
    },

    {
      question: "Capital of Kwara State",
      option: ["Jalingo", "Ilorin", "Imo", "Ebonyi"],
      answer: "Ilorin",
    },

    {
      question: "Capital of Lagos State",
      option: ["Abeokuta", "Mushin", "Sokoto", "Ikeja"],
      answer: "Ikeja",
    },

    {
      question: "Capital of Nasarawa State",
      option: ["Lafia", "Maiduguri", "Ado-Ekiti", "Nasarawa"],
      answer: "Lafia",
    },

    {
      question: "Capital of Niger State",
      option: ["Jigawa", "Abakaliki", "Minna", "Lokoja"],
      answer: "Minna",
    },

    {
      question: "Capital of Ogun State",
      option: ["Kebbi", "Ilorin", "Abeokuta", "Birnin Kebbi"],
      answer: "Abeokuta",
    },

    {
      question: "Capital of Ondo State",
      option: ["Asaba", "Ondo", "Akure", "Ado-Ekiti"],
      answer: "Akure",
    },

    {
      question: "Capital of Osun State",
      option: ["Oshogbo", "Bayelsa", "Calabar", "Yenagoa"],
      answer: "Oshogbo",
    },

    {
      question: "Capital of Oyo State",
      option: ["Niger", "Ibadan", "Lagos", "Owerri"],
      answer: "Ibadan",
    },

    {
      question: "Capital of Canada",
      option: ["San Jose", "Nicosia", "Amman", "Ottawa"],
      answer: "Ottawa",
    },

    {
      question: "Capital of Cape Verde",
      option: ["Tokyo", "Libreville", "Addis Ababa", "Praia"],
      answer: "Praia",
    },

    {
      question: "Capital of Central African Republic",
      option: ["Roseau", "Bangui", "N'Djamena", "Pristina"],
      answer: "Bangui",
    },

    {
      question: "Capital of Chad",
      option: ["N'Djamena", "Yaounde", "Suva", "Asmara"],
      answer: "N'Djamena",
    },

    {
      question: "Capital of Chile",
      option: ["Santiago", "London", "Amman", "Paris"],
      answer: "Santiago",
    },

    {
      question: "Capital of China",
      option: ["Tokyo", "Kinshasa", "Banjul", "Beijing"],
      answer: "Beijing",
    },

    {
      question: "Capital of Plateau State",
      option: ["Adamawa", "Ogun", "Nasarawa", "Jos"],
      answer: "Jos",
    },

    {
      question: "Capital of Cameroon",
      option: ["Tokyo", "Yaounde", "Amman", "Pristina"],
      answer: "Yaounde",
    },

    {
      question: "Capital of Cambodia",
      option: ["Canberra", "Phnom Penh", "Kabul", "Nassau"],
      answer: "Phnom Penh",
    },

    {
      question: "Capital of Burundi",
      option: ["Bangui", "Athens", "Conakry", "Gitega"],
      answer: "Gitega",
    },

    {
      question: "Capital of Burkina Faso",
      option: ["Prague", "San Jose", "Ouagadougou", "Havana"],
      answer: "Ouagadougou",
    },

    {
      question: "Capital of Bulgaria",
      option: ["Sofia", "Tbilisi", "Beijing", "Tallinn"],
      answer: "Sofia",
    },

    {
      question: "Capital of Brunei",
      option: ["Moroni", "Ottawa", "Brasilia", "Bandar Seri Begawan"],
      answer: "Bandar Seri Begawan",
    },

    {
      question: "Capital of Rivers State",
      option: ["Asaba", "Edo", "Enugu", "Port Harcourt"],
      answer: "Port Harcourt",
    },

    {
      question: "Capital of Brazil",
      option: ["Djibouti", "Copenhagen", "Brasilia", "Tallinn"],
      answer: "Brasilia",
    },

    {
      question: "Capital of Botswana",
      option: ["Praia", "Sarajevo", "Gaborone", "Asmara"],
      answer: "Gaborone",
    },

    {
      question: "Capital of Bosnia and Herzegovina",
      option: ["Manama", "Sarajevo", "Paris", "Yaounde"],
      answer: "Sarajevo",
    },

    {
      question: "Capital of Bolivia",
      option: ["Tbilisi", "Palikir", "Guatemala City", "La Paz"],
      answer: "La Paz",
    },

    {
      question: "Capital of Bhutan",
      option: ["Addis Ababa", "Paris", "Dili", "Thimphu"],
      answer: "Thimphu",
    },

    {
      question: "Capital of Benin",
      option: ["Vienna", "Roseau", "Porto Novo", "Asmara"],
      answer: "Porto Novo",
    },

    {
      question: "Capital of Sokoto State",
      option: ["Lokoja", "Ikeja", "Sokoto", "Lafia"],
      answer: "Sokoto",
    },

    {
      question: "Capital of Bahrain",
      option: ["Manama", "Copenhagen", "Dili", "Asmara"],
      answer: "Manama",
    },

    {
      question: "Capital of Bangladesh",
      option: ["Dhaka", "Thimphu", "Dili", "Vienna"],
      answer: "Dhaka",
    },

    {
      question: "Capital of Barbados",
      option: ["Dhaka", "Belmopan", "Bridgetown", "Yaounde"],
      answer: "Bridgetown",
    },

    {
      question: "Capital of Belarus",
      option: ["Tehran", "Dublin", "Rome", "Minsk"],
      answer: "Minsk",
    },

    {
      question: "Capital of Belgium",
      option: ["Tehran", "Brussels", "Phnom Penh", "Santiago"],
      answer: "Brussels",
    },

    {
      question: "Capital of Belize",
      option: ["Belmopan", "Brussels", "Berlin", "Helsinki"],
      answer: "Belmopan",
    },
    {
      question: "Capital of Taraba State",
      option: ["Taraba", "Jalingo", "Lagos", "Ibadan"],
      answer: "Jalingo",
    },

    {
      question: "Capital of Yobe State",
      option: ["Damaturu", "Oyo", "Yobe", "Osun"],
      answer: "Damaturu",
    },

    {
      question: "Capital of Bahamas",
      option: ["Minsk", "Nassau", "Ouagadougou", "Baku"],
      answer: "Nassau",
    },

    {
      question: "Capital of Azerbaijan",
      option: ["Algiers", "Luanda", "Malabo", "Baku"],
      answer: "Baku",
    },

    {
      question: "Capital of Austria",
      option: ["Suva", "Canberra", "Malabo", "Vienna"],
      answer: "Vienna",
    },

    {
      question: "Capital of Australia",
      option: ["Dhaka", "Canberra", "Belmopan", "Sarajevo"],
      answer: "Canberra",
    },

    {
      question: "Capital of Armenia",
      option: ["Buenos Aires", "Yerevan", "Thimphu", "Brasilia"],
      answer: "Yerevan",
    },

    {
      question: "Capital of Argentina",
      option: ["Buenos Aires", "Yerevan", "Prague", "London"],
      answer: "Buenos Aires",
    },

    {
      question: "Capital of Zamfara State",
      option: ["Plateau", "Damaturu", "Gusau", "Ibadan"],
      answer: "Gusau",
    },

    {
      question: "Capital of Antigua and Barbuda",
      option: ["Gitega", "Saint John's", "Ottawa", "Beijing"],
      answer: "Saint John's",
    },

    {
      question: "Capital of Angola",
      option: ["Yerevan", "Luanda", "Paris", "Quito"],
      answer: "Luanda",
    },

    {
      question: "Capital of Andorra",
      option: ["Andorra la Vella", "Buenos Aires", "Moroni", "Quito"],
      answer: "Andorra la Vella",
    },

    {
      question: "Capital of Algeria",
      option: ["Canberra", "Bogota", "San Jose", "Algiers"],
      answer: "Algiers",
    },

    {
      question: "Capital of Albania",
      option: ["Ottawa", "Belmopan", "Bridgetown", "Tirana"],
      answer: "Tirana",
    },

    {
      question: "Capital of Afghanistan",
      option: ["Dhaka", "Baku", "Kabul", "Andorra"],
      answer: "Kabul",
    },
  ],
  {
    quizTime: 40,
  },
];
