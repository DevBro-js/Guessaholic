"use strict";

const bible = [
  [
    {
      question: "Of what wood was Noah's Ark made?",
      option: ["Gopher wood", "Acacia wood", "Cedar of Lebanon", "Carob wood"],
      answer: "Gopher wood (Gen 6:14)",
    },

    {
      question: "With whom did our Savior spend his last Sabbath?",
      option: [
        "The apostles",
        "Peter, James, and John",
        "Simon the leper",
        "Mark and Luke",
      ],
      answer: "Simon the leper (Matt 26:6)",
    },

    {
      question:
        "How did God manifest his presence at the dedication of the temple?",
      option: [
        "Fire came down from heaven",
        "A cloud came from heaven",
        "Rain came from heaven",
        "A thunder came from heaven",
      ],
      answer: "Fire came down from heaven (2 Chron 7:1)",
    },

    {
      question: "How long was Noah's ark?",
      option: ["250 cubits", "500 cubits", "300 cubits", "100 cubits"],
      answer: "300 cubits (Gen 6:15)",
    },

    {
      question: "How old was Joseph when his brethren sold him into slavery?",
      option: [69, 23, 17, 90],
      answer: "17 (Gen 37:2)",
    },

    {
      question: "What is the meaning of Jehovah Shammah?",
      option: [
        "Jehova is here",
        "Jehova is there",
        "Jehova is near",
        "Jehova is with us",
      ],
      answer: "Jehova is there (Ezek 48:35)",
    },

    {
      question: "What were the first words God spoke to man?",
      option: [
        "Rule the earth",
        "Fill the earth",
        "Love your neighbor",
        "Be fruitful and multiply",
      ],
      answer: "Be fruitful and multiply (Gen 1:28)",
    },

    {
      question:
        "How long did Moses's mother hide him to escape the death edict of Pharaoh?",
      option: ["13 months", "10 months", "3 months", "7 months"],
      answer: "3 months (Exod 2:2)",
    },

    {
      question: "Who was Moses's father-in-law?",
      option: ["Cyrus", "Mordechai", "Jethro", "Laban"],
      answer: "Jethro (Exod 3:1)",
    },

    {
      question: "Who ruled when Jesus was born?",
      option: ["Pilate", "Herod", "Agrippa", "Festus"],
      answer: "Herod (Matthew 2:1)",
    },

    {
      question: "Which of the apostles first suffered martyrdom?",
      option: ["Andrew", "James", "Thomas", "Paul"],
      answer: "James (Acts 12:2)",
    },

    {
      question: "Who took Judas's place among the twelve?",
      option: ["Matthias", "Stephen", "Jude", "Paul"],
      answer: "Matthias (Acts 1:23)",
    },

    {
      question: "To whom did our Savior say, “I will make you fishers of men?”",
      option: [
        "Matthew, Peter, and Simeon",
        "Simeon, Peter, and Andrew",
        "James, Peter, and Andrew",
        "Thomas, Matthew, and Peter",
      ],
      answer: "Simeon, Peter, and Andrew (Mark 1:17)",
    },

    {
      question: "What was our Savior's last command to his disciples?",
      option: [
        "Help widows and orphans",
        "Love others",
        "Make disciples of all the nations and baptize them",
        "Honor the Sabbath",
      ],
      answer: "Make disciples of all the nations and baptize them (Matt 28:19)",
    },

    {
      question: "What was the height of Goliath?",
      option: [
        "Five cubits and three spans",
        "Nine cubits and a span",
        "Seven cubits and two spans",
        "Six cubits and a span ",
      ],
      answer: "Six cubits and a span (1 Sam 17:4)",
    },

    {
      question:
        "When Saul was pursuing David, in which cave did David seek refuge?",
      option: [
        "Cave at Makkedah",
        "Cave of Machpelah",
        "Cave of Adullam",
        "Dambulla Cave",
      ],
      answer: "Cave of Adullam (1 Sam 22:1)",
    },

    {
      question: "Who restored Paul's sight?",
      option: ["Peter", "Luke", "Matthew", "Ananias"],
      answer: "Ananias (Acts 9:17_18)",
    },

    {
      question: "Who is called the light of the world?",
      option: ["Moses", "Jesus", "John", "Abraham"],
      answer: "Jesus (John 8:12, 12:46)",
    },

    {
      question: "What was the first miracle performed by Christ?",
      option: [
        "Water turned to wine",
        "Walking on water",
        "Feeding of the five thousand",
        "Healing of the blind man",
      ],
      answer: "Water turned to wine (John 2:1)",
    },

    {
      question:
        "When was the Sabbath first instituted, and by whom was it observed?",
      option: [
        "By Noah, after the flood",
        "By God, after creation",
        "By Adam, in the garden of Eden",
        "By Moses, in the ten commandments",
      ],
      answer: "By God, after creation (Gen 2:2_3)",
    },

    {
      question:
        "Who made the first confession to the Lord, as recorded in the Bible?",
      option: ["Abram", "Jacob", "Adam", "Moses"],
      answer: "Jacob (Gen 32:9)",
    },

    {
      question:
        "Who delivered Israel by killing 600 Philistines with an ox goad?",
      option: ["David", "Jonathan", "Shamgar", "Samson"],
      answer: "Shamgar (Judg 3:31)",
    },

    {
      question: "Who was the first recorded person raised from death to life?",
      option: [
        "Tabitha",
        "Jesus",
        "Lazarus",
        "The son of Zarephath's daughter",
      ],
      answer: "The son of Zarephath's daughter (1 Kgs 17:21)",
    },

    {
      question:
        "Who partook of a meal prepared by an angel, and was sustained forty days and nights while in the mountain?",
      option: ["Noah", "Joseph", "Manoah", " Elijah"],
      answer: " Elijah (1 Kgs 19:8_9)",
    },

    {
      question: "What is the whole duty of man, according to the Scriptures?",
      option: [
        "Be fruitful and multiply",
        "Love enemies",
        "Take care of the earth",
        "Fear God and keep his commandments",
      ],
      answer: "Fear God and keep his commandments (Eccl 12:13)",
    },

    {
      question: "Who beheld a vision in the valley of dry bones?",
      option: ["Jeremiah", "Ezekiel", "Joseph", "Daniel"],
      answer: "Ezekiel (Ezek 37)",
    },

    {
      question:
        "Who was compelled to bear the cross of Christ to the place of crucifixion?",
      option: ["Joseph", "John", "Peter", "Simon"],
      answer: "Simon (Mark 15:21)",
    },

    {
      question: "Which woman continued in prayer day and night in the temple?",
      option: ["Drusilla", "Mary", " Anna", "Lydia"],
      answer: " Anna (Luke 2:36)",
    },

    {
      question: "Who was the first Christian martyr?",
      option: ["Stephen", "Peter", "John", "Paul"],
      answer: "Stephen (Acts 7:58)",
    },

    {
      question: "Who lost their lives for using “strange” fire?",
      option: [
        "Jacob and Esau",
        "Nadab and Abihu",
        "Ahab and Zedekiah",
        "Sisera and Barek",
      ],
      answer: "Nadab and Abihu (Lev 9:24,10:1_2)",
    },

    {
      question: "Which man of Israel was stoned for blaspheming God?",
      option: [
        "The son of Shelomith",
        "Methuselah",
        "The son of Isaac",
        "Kenan",
      ],
      answer: "The son of Shelomith (Lev 24:10_11)",
    },

    {
      question: "Which three men were swallowed alive in a pit?",
      option: [
        "Korah, Dathan, Hadad",
        "Jetur, Dathan, Abiram",
        "Korah, Dathan, Abiram",
        "Korah, Dathan, Rachab",
      ],
      answer: "Korah, Dathan, Abiram (Num 26:9_10)",
    },

    {
      question: "Which tribe had no inheritance in the land of promise?",
      option: ["Levites", "Reubenites", "Gadites", "Manassa"],
      answer: "Levites (Deut 8:1,5)",
    },

    {
      question: "Who was punished with death for touching the ark of God?",
      option: ["Caleb", "Naaman", "Uzza", "Obed"],
      answer: "Uzza (1 Chron 13:9,13)",
    },

    {
      question: "Who, although warned, invited his murderer to a feast? ",
      option: ["Jesse", "Dan", "Gideon", "Gedaliah"],
      answer: "Gedaliah (Jer 40:14)",
    },

    {
      question: "Who did Gideon fight against?",
      option: ["Philistines", "Midians", "Moabites", "Ammonites"],
      answer: "Midians (Judges 7:7)",
    },

    {
      question: "How many Philistines did Samson slay with a jaw bone?",
      option: ["1,000", "40", "666", "2,000"],
      answer: "1,000 (Judg 15:15)",
    },

    {
      question:
        "Who fought so long and desperately that his hand was stuck to the hilt of his sword?",
      option: ["Elijah", "Jabez", "Eleazar", "Cush"],
      answer: "Eleazar (2 Sam 23:10)",
    },

    {
      question:
        "To whom did God promise that his children shall be in numbers as the stars in heaven?",
      option: ["Moses", "Jacob", "Jethro", "Abraham"],
      answer: "Abraham (Gen 15:5)",
    },

    {
      question:
        "Of which person who was not of Abraham's seed did God say, 'I will make him a great nation?'",
      option: ["Zelophehad", "Ishmael", "Esau", "Caleb"],
      answer: "Ishmael (Gen 17:20)",
    },

    {
      question: "Who was 13 years old when he was circumcised?",
      option: ["Ishmael", "Moses", "David", "Elijah"],
      answer: "Ishmael (Gen 17:23_25)",
    },

    {
      question:
        "What gives birth to sin after it has conceived according to the book of James?",
      option: ["Death", "Negligence", "Desire", "None of them"],
      answer: "Desire (James 1:15)",
    },

    {
      question: "Which son of Abraham was born of Sarah?",
      option: ["Ishmael", "Isaac", "No son was born", "Both Ishmael and Isaac"],
      answer: "Isaac (gen 21:10)",
    },

    {
      question: "How did God kill the Amorites in Israel for Joshua and the Israelites?",
      option: ["Two angels", "Boils", "Lightning bolts", "Large hailstones"],
      answer: "Large hailstones (Jos 10:11)",
    },

    {
      question: "How many of the 10 lepers returned to Jesus after being cured?",
      option: ["None of them", "1", "All of them", "3"],
      answer: "1 (Luke 17:17_18)",
    },

    {
      question: "Who was king of Babylon after Nebuchadnezzar?",
      option: ["Ahasuerus", "Darius", "Ehud", "Belshazzar"],
      answer: "Belshazzar (Daniel 5:2)",
    },


    {
      question: "What were the three major promises God gave to Abraham?",
      option: [
        "Wealth, blessing, and the stars of heaven",
        "Seed, land, and blessing",
        "Blessing, health, and birthright",
        "Priesthood, wealth, and health",
      ],
      answer: "Seed, land, and blessing (Gen 12,15,17)",
    },

    {
      question: "Who was the first Christian convert in Europe?",
      option: ["Lydia", "Phoebe", "Priscilla", "Salome"],
      answer: "Lydia (Acts 16:14)",
    },

    {
      question:
        "What other nation besides Israel is to be scattered to every people?",
      option: ["Egypt", "Lebanon", "Syria", "Elam"],
      answer: "Elam (Jer 49:36)",
    },

    {
      question: "Who is referred to as 'that wicked woman' in the bible",
      option: ["Lydia", "Esther", "Athaliah", "Jezebel"],
      answer: "Athaliah (2 Chron 24:7)",
    },

    {
      question: "Which two men hid in a well to save their lives?",
      option: [
        "Jonathan and Ahimaaz",
        "Gideon and Phurah",
        "Saul and Jonathan",
        "David and Jonathan",
      ],
      answer: "Jonathan and Ahimaaz (2 Sam 17:17_19)",
    },

    {
      question: "How many cities were given to the Levites for their use?",
      option: ["56", "48", "34", "99"],
      answer: "48 (Josh 21:11)",
    },

    {
      question: "The city to which Lot escaped at the destruction of Sodom?",
      option: ["Golon", "Zoar", "Cabul", "Silo"],
      answer: "Zoar (Gen 19:23)",
    },

    {
      question: "First city mentioned in the Bible?",
      option: ["Babylon", "Nineveh", "Enoch", "Sodom"],
      answer: "Enoch (Gen 4:17)",
    },

    {
      question: "The tree of life is guarded by?",
      option: [
        "A pillar of fire",
        "A cherubim and a flaming sword",
        "A giant wall",
        "Leviathan",
      ],
      answer: "A cherubim and a flaming sword (Gen 3:24)",
    },

    {
      question: "Which prophet said, “Out of Egypt have I called my son”?",
      option: ["Haggai", "Elijah", "Ahab", "Hosea"],
      answer: "Hosea (Hos 11:1)",
    },

    {
      question:
        "In the parable of the Prodigal Son, what portion would the son have received?",
      option: ["All portion", "A third", "A fifth", "Half"],
      answer: "A third (Deut 21:17; Luke 15:12)",
    },

    {
      question:
        "The angel said to Mary that Jesus would “reign over the house” of which Old Testament character?",
      option: ["Jacob", "Isaiah", "Job", "Jonah"],
      answer: "Jacob (Luke 1:33)",
    },

    {
      question: "How many apostles did Jesus choose?",
      option: ["10", "12", "21", "13"],
      answer: "12 (Luke 6:13)",
    },

    {
      question: "'Jesus wept'",
      option: ["Acts 1:1", "John 11:35", "John 3:16", "Deu 5:31"],
      answer: "John 11:35",
    },

    {
      question: "Judas betrayed Jesus for exactly how many coins of silver?",
      option: [
        "30 pieces of silver",
        "100 pieces of silver",
        "10 pieces of silver",
        "35 pieces of silver",
      ],
      answer: "30 pieces of silver (Matt 26:15)",
    },

    {
      question:
        "After he fled for his life, which tree did Elijah sleep under?",
      option: ["Fig tree", "Oak tree", "Grape tree", "Juniper Tree"],
      answer: "Juniper (1 kings 19:4)",
    },

    {
      question:
        "How many shekels did Abraham pay to buy the field of Machpelah?",
      option: ["10 Shekels", "5 Shekels", "400 Shekels", "1000 Shekels"],
      answer: "400 Shekels (Genesis 23:12-16)",
    },

    {
      question: "Who built the first altar?",
      option: ["Noah", "Abraham", "Elijah", "David"],
      answer: "Noah (Genesis 8:20)",
    },

    {
      question:
        "What occurred when Jonathan and his armor-bearer attacked the Philistines? ",
      option: ["Fire came down", "Flood", "An earthquake", "Lightening"],
      answer: "An earthquake (1 Samuel 14:11-15)",
    },

    {
      question: "Who is David's father?",
      option: ["Saul", "Jesse", "Aaron", "Moses"],
      answer: "Jesse (1 Samuel 17:12)",
    },

    {
      question:
        "For what sum was Joseph sold by his brothers to the Ishmeelites?",
      option: [
        "10 pieces of silver",
        "15 pieces of silver",
        "45 pieces of silver",
        "20 pieces of silver",
      ],
      answer: "20 pieces of silver (Genesis 37:28)",
    },

    {
      question: "Which king of Judah was stricken with leprosy?",
      option: ["Uzziah", "Solomon", "Jehoshaphat", "Ahab"],
      answer: "Uzziah (also known as Azariah 2 Kings 15:5)",
    },

    {
      question: "What was the last plague on Egypt?",
      option: [
        "Locust",
        "Water turning to blood",
        "hail",
        "The death of the firstborn",
      ],
      answer: "The death of the firstborn (Exodus 12:29)",
    },

    {
      question:
        "What did the lords of the philistines offer Delilah for revealing the secret of Samson's strength?",
      option: [
        "1100 pieces of silver each",
        "10000 pieces of silver each",
        "500 pieces of silver each",
        "5000 pieces of silver each",
      ],
      answer: "1100 pieces of silver each (Judges 16:5)",
    },

    {
      question: "The disciple who was a tax collector is known as?",
      option: ["Matthew", "Peter", "Judas Iscariot", "Bartholomew"],
      answer: "Matthew",
    },

    {
      question: "The disciple who was a tax collector is known as?",
      option: ["Matthew", "Peter", "Judas Iscariot", "Bartholomew"],
      answer: "Matthew",
    },

    {
      question: "In whose Gospels do the Beatitudes appear",
      option: [
        "Matthew and Mark",
        "Peter and Act",
        "Mark and John",
        "Matthew and Luke",
      ],
      answer: "Matthew and Luke",
    },

    {
      question: "What was it that Jacob had to do in order to marry Rachel?",
      option: [
        "Serve Laban for 14 years",
        "Fight his brother",
        "Betray his brother",
        "Kill a deer",
      ],
      answer: "Serve Laban for 14 years (Genesis 29:16_30)",
    },

    {
      question:
        "The destruction of Nineveh was the fulfillment of whose prophecy?",
      option: [
        "The prophet Jonah",
        "The prophet Isaiah",
        "The prophet Daniel",
        "The prophet Nahum",
      ],
      answer: "The prophet Nahum (Nah 3)",
    },

    {
      question: "Which prophet was sent as a missionary to the Ninevites?",
      option: ["Jonah", "Paul", "Elon", "Malachi"],
      answer: "Jonah (Jonah 1:1_2)",
    },

    {
      question: "Which of the prophets was carried captive to Babylon?",
      option: ["Nehemiah", "Ezekiel", "Malachi", "Zechariah"],
      answer: "Ezekiel (Ezek 1:1)",
    },

    {
      question:
        "Which prophet foretold the result of the ten tribes of Israel?",
      option: ["Isaiah", "Nahum", "Ahijah", "Nehemiah"],
      answer: "Ahijah (1 Kgs 11:29)",
    },

    {
      question: "What was the first prophecy?",
      option: [
        "The end of the age",
        "The victory over Satan of the seed of the woman",
        "The second coming of Christ",
        "The destruction of the temple",
      ],
      answer: "The victory over Satan of the seed of the woman (Gen 3:15)",
    },

    {
      question:
        "Which king was on the throne of Judah when he was only eight years old?",
      option: ["Jehoiachin", "Adonibezek", "Joash", "David"],
      answer: "Jehoiachin (2 Chron 36:9)",
    },

    {
      question:
        "Which king of Israel followed heathen practices by burning his children in the fire?",
      option: ["Abimelech", "Ahab", "Menahem", "Ahaz"],
      answer: "Ahaz (2 Chron 28:3)",
    },

    {
      question:
        "Who was made king of Judah at seven years of age after having been hidden for six years?",
      option: ["Jehoshaphat", "Hosea", "Joash", "Ahaz"],
      answer: "Joash (2 Chron 23:11)",
    },

    {
      question: "Which king's name meant peaceable?",
      option: ["Solomon", "David", "Josiah", "Manasseh"],
      answer: "Solomon (1 Chron 22:9)",
    },

    {
      question: "What does Paul say is the fulfillment of the law?",
      option: ["Righteousness", "Patience", "Love", "Faith"],
      answer: "Love (Rom 13:10)",
    },

    {
      question: "What was Paul's occupation?",
      option: ["Carpentry", "Tentmaking", "Stonemasonry", "Fishing"],
      answer: "Tentmaking (Acts 18:3)",
    },

    {
      question: "Where was Paul stoned?",
      option: ["Lystra", "Melita", "Damascus", "Galilee"],
      answer: "Lystra (Acts 14:19)",
    },

    {
      question: "Which Athenian judge was converted under Paul's preaching?",
      option: ["Eunice", "Candace", "Dionysius", "Eubulus"],
      answer: "Dionysius (Acts 17:34)",
    },

    {
      question:
        "How did Paul escape Damascus when the Jews were trying to kill him?",
      option: [
        "He was let down from the city walls in a basket",
        "An angel lifted him out",
        "An earthquake created the means of escape",
        "Silas came to his rescue",
      ],
      answer: "He was let down from the city walls in a basket (Acts 9:25)",
    },

    {
      question:
        "Which king of Judah was overtaken by an invading army and had his eyes put out?",
      option: ["Rehoboam", "Abijah", "Jehoram", "Zedekiah"],
      answer: "Zedekiah (2 Kgs 25:7)",
    },

    {
      question: "Which king was killed by his own sons",
      option: ["Manasseh", "Sennacherib", "Ahaz", "Jotham"],
      answer: "Sennacherib (2 Kgs 19:36)",
    },

    {
      question: "Who was the most wicked king of Israel?",
      option: ["Ahab", "Abimelech", "Manasseh", "Menahem"],
      answer: "Ahab (1 Kgs 21:25)",
    },

    {
      question: "What were Solomon's other names?",
      option: [
        "Jedediah and Lemuel",
        "Joab and Lemuel",
        "Jedediah and Joab",
        "Lemuel and Jeremiah",
      ],
      answer: "Jedediah and Lemuel (2 Sam 12:25, Prov 31:1)",
    },

    {
      question:
        "What was the total number of the children of Israel that went down to Egypt?",
      option: ["70", "1000", "53", "560"],
      answer: "70 (Gen 46:27)",
    },

    {
      question: "How long were the children of Israel in captivity?",
      option: ["70 years", "49 years", "59 years", "100 years"],
      answer: "70 years (Jer 25:11)",
    },

    {
      question:
        "By whom were the children of Israel carried captive into Assyria?",
      option: ["Nebuchadnezzar", "Tiglathpileser", "Darius", "Ahaz"],
      answer: "Tiglathpileser (2 Kgs 15:29)",
    },

    {
      question: "Upon what mountain was Israel cursed for disobedience?",
      option: ["Mount Moriah", "Mount Zion", "Mount Carmel", "Mount Ebal"],
      answer: "Mount Ebal (Deut 27:13)",
    },

    {
      question:
        "How long did the children of Israel journey in the wilderness of Shur before they found water?",
      option: ["5 days", "15 days", "3 days", "7 days"],
      answer: "3 days (Exod 15:22)",
    },

    {
      question:
        "How were the children of Israel guided in their forty years of wandering in the wilderness?",
      option: [
        "By a pillar of cloud by day and a pillar of fire by night",
        "By the voice of God",
        "By Moses",
        "By Aaron's rod",
      ],
      answer:
        "By a pillar of cloud by day and a pillar of fire by night (Exod 13:21)",
    },
  ],
  {
    quizTime: 60,
  },
];
