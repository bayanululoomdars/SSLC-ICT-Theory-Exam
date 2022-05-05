// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "SVG യുടെ പൂര്‍ണ്ണ രൂപം താഴെ കൊ ടുത്തിരിക്കുന്നവയില്‍ ഏതാണ്?",
    answer: "Scalable Vector Graphics",
    options: [
      "Scalar Vector Graphics",
      "Scalable Vector Graphics",
      "Sound Vector Graphics",
      "Source Vector Graphics"
    ]
  },
    {
    numb: 2,
    question: "താഴെ പറയുന്നവയില്‍ ഒരു വ്യക്ടര്‍ ഇമേജ് ഫയല്‍ ഏതാണ്?",
    answer: "river.svg",
    options: [
      "poster.png",
      "image.jpg",
      "river.svg",
      "garden.gif"
    ]
  },
    {
    numb: 3,
    question: "ഒരു ടെക്സ്റ്റ് ഡോക്യുമെന്‍റിന്‍റെ പേജും ഉള്ളടക്കവും മനോഹരമായി ക്രമീകരിച്ച്, ചെയ്യുന്നതിനായി തയ്യാറാക്കുന്ന പ്രവര്‍ത്തനെത്ത പൊതുവെ എന്ത് പേരിലാണ് വിളിക്കുന്നത്.",
    answer: "ഡെസ്ക്ടോപ്പ് പബ്ലിഷിംങ്",
    options: [
      "ഡെസ്ക്ടോപ്പ് പബ്ലിഷിംങ്",
      "കമ്പ്യൂട്ടര്‍ പ്രിന്‍റിങ്",
      "ലേസര്‍ പ്രിന്‍റിങ് ടെക്നോളജി",
      "മാര്‍ക്ക അപ് സാങ്കേതികവിദ്യ"
    ]
  },
    {
    numb: 4,
    question: "ഒരു പേജിന്‍റെ ഉള്ളടക്കത്തിലെ ഒരു പദം ശീര്‍ഷകമായി നിര്‍വചിക്കാന്‍ ലിബര്‍ ഓഫീസ് റൈറ്ററില്‍ ലഭ്യമായിട്ടുള്ള ഏത് സ്റ്റൈല്‍ ഉപയോഗിക്കാം?",
    answer: "Heading 1",
    options: [
      "Heading 1",
      "Header 1",
      "Caption 1",
      "Index 1"
    ]
  },
    {
    numb: 5,
    question: "പൈത്തണ്‍ ഗ്രാഫിക്സ് ജാലകത്തില്‍ തെളിയുന്ന വരകള്‍ക്ക് നീലനിറം നല്‍കാനുള്ള പൈത്തണ്‍ നിര്‍ദേശം ചുവടെ നല്‍കിയവയില്‍ ഏത്?",
    answer: "pencolor(“blue”)",
    options: [
      "clear(“blue”)",
      "pencolour(blue)",
      "linecolor(“blue”)",
      "pencolor(“blue”)"
    ]
  },
  {
    numb: 6,
    question: "UTP കേബിളിനെ സംബന്ധിച്ച ചില പ്രസ്താവനകള്‍ ചുവടെ കൊടുക്കുന്നു. ഇതില്‍ നിന്നും ശരിയായ പ്രസ്താവന തിരഞ്ഞെടുക്കുക.",
    answer: "eXtensible Markup Language",
    options: [
      "ഇവയില്‍ കറുപ്പ് നിറത്തിലുള്ള 4 വയറുകള്‍ കാണപ്പെടുന്നു.",
      "ഇവയില്‍ എട്ടു ജോഡി വയറുകളുണ്ട്",
      "RJ45 കണക്ടറുകളാണ് ഇതില്‍ ഘടിപ്പിക്കുന്നത്.",
      "RJ11 കണക്ടറുകളാണ് ഇതില്‍ ഘടിപ്പിക്കുന്നത്."
    ]
  },
  {
    numb: 7,
    question: "Synfig Studio സോഫ്റ്റ് വെയറില്‍ തയാറാക്കുന്ന ഒരു അനിമേഷനെ mpeg വീഡിയോ ഫയല്‍ ഫോര്‍മാറ്റാക്കി മാറ്റാന്‍ ചുവടെ നല്‍കിയവയില്‍ ഏത് സങ്കേതമാണ് ഉപയോഗിക്കേണ്ടത്?",
    answer: "Render",
    options: [
      "Render",
      "Revert",
      "Save",
      "Import"
    ]
  },
  {
    numb: 8,
    question: "ചുവടെ കൊടുത്തിട്ടുള്ളവയില്‍ ഏത് ഓപറേറ്റിങ് സിസ്റ്റത്തിലാണ് ലിനക്സ് കേര്‍ണല്‍ (Linux Kernal) പ്രോഗ്രാം ഉപയോഗിക്കുന്നത്?",
    answer: "Android",
    options: [
      "Android",
      "Symbian",
      "IOS",
      "Blackberry"
    ]
  },
  {
    numb: 9,
    question: "കമ്പ്യൂട്ടര്‍ സേവ് ചെയ്യുന്ന ഫയലുകള്‍ സൂക്ഷിക്കുന്നതിനുള്ള ഹാര്‍ഡ്വെയര്‍ ഉപകരണം താഴെ പറയുന്നവയില്‍ ഏതാണ്?",
    answer: "Hard Disk",
    options: [
      "Hard Disk",
      "Device Driver",
      "Kernel",
      "DNS"
    ]
  },
  {
    numb: 10,
    question: "താഴെ പറയുന്നവയില്‍ ഏതാണ് GNU പ്രോജക്റ്റ് നിര്‍മിക്കുന്ന (1991 ല്‍ നിര്‍മാണം തുടങ്ങിയെങ്കിലും) ഇപ്പോഴും പൂര്‍ത്തിയാകാത്ത ഓപറേറ്റിങ് സിസ്റ്റം കേര്‍ണല്‍ പ്രോഗ്രാം?",
    answer: "Linux",
    options: [
      "Hurd",
      "Linux",
      "XNU",
      "GNU"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];