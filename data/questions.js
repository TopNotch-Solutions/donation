const QUESTIONNAIRE_SECTIONS = [
  {
    id: 'section2a',
    title: 'Section 2 — Health Questionnaire',
    subtitle: 'Your safety is as important to us as the safety of the patient. Please read carefully and answer ALL questions accurately and honestly.',
    icon: 'heartbeat',
    color: '#c0392b',
    groups: [
      {
        heading: 'General',
        questions: [
          { id: 'q2_1', text: 'Are you feeling well and in good health today?' },
          { id: 'q2_2', text: 'Have you eaten in the last 4 hours?' },
          { id: 'q2_3', text: 'Have you ever been refused as a blood donor or told not to donate?' },
          { id: 'q2_4', text: 'Are you involved in an activity/occupation that might endanger you or anyone else should you become light-headed or faint? (e.g. piloting an aircraft, driving public or heavy-duty vehicle, working on scaffolding or with machinery)' },
        ],
      },
      {
        heading: 'In the past 7 days',
        questions: [
          { id: 'q2_5_1', text: 'Have you been to the dentist?' },
          { id: 'q2_5_2', text: 'Have you taken any painkillers, anti-inflammatories?' },
          { id: 'q2_5_3', text: 'Have you had a flu, sore throat, fever or an infection (e.g. Sinusitis)?' },
          { id: 'q2_5_4', text: 'Participating in endurance sports (e.g. marathons), skydiving, deep sea diving or mountaineering?' },
        ],
      },
      {
        heading: 'In the past 3 months',
        questions: [
          { id: 'q2_6_1', text: "Have you been under a doctor's care, had a major illness or been involved in a serious accident?" },
          { id: 'q2_6_2', text: 'Have you had continuous diarrhoea for more than 1 week?' },
          { id: 'q2_6_3', text: 'Have you undergone surgery or a diagnostic procedure (e.g. scope)?' },
          { id: 'q2_6_4', text: 'Have you had Botox injections, dermabrasion and/or Microneeding?' },
        ],
      },
      {
        heading: 'Do you have or ever had',
        questions: [
          { id: 'q2_7_1', text: 'Epilepsy (Convulsions/Fits) or a stroke?' },
          { id: 'q2_7_2', text: 'Heart disease (e.g. Rheumatic fever, chest pains), heart surgery or circulatory problems?' },
          { id: 'q2_7_3', text: 'Lung disease (e.g. Bronchitis, pneumonia etc.), asthma, tuberculosis (TB) or coughed up blood?' },
          { id: 'q2_7_4', text: 'Cancer (e.g. leukaemia, skin cancer) or a blood disease (e.g. haemochromatosis, polycythaemia)?' },
          { id: 'q2_7_5', text: 'Diabetes, thyroid disease or kidney disease?' },
          { id: 'q2_7_6', text: 'Serious allergic reaction, skin disease/rash or a chronic infectious disease?' },
          { id: 'q2_7_7', text: 'Any other serious illnesses or other chronic medical conditions (e.g. Hypertension)?' },
        ],
      },
      {
        heading: 'Hepatitis',
        questions: [
          { id: 'q2_8_1', text: 'Have you ever had jaundice, hepatitis, a positive test for hepatitis or liver disease after 1 year of age?' },
          { id: 'q2_8_2', text: 'Have you had close contact or lived with hepatitis (Jaundice) in the past 3 months or have you been given hepatitis B Immunoglobulin?' },
        ],
      },
    ],
  },
  {
    id: 'section2b',
    title: 'Section 2 — Medical History',
    subtitle: 'Please continue answering all questions accurately and honestly.',
    icon: 'notes-medical',
    color: '#a93226',
    groups: [
      {
        heading: 'Travel History',
        questions: [
          { id: 'q2_9_1', text: 'Have you or your sexual partner travelled outside Namibia in the past 3 months?' },
        ],
      },
      {
        heading: 'Malaria (past 3 years)',
        questions: [
          { id: 'q2_10_1', text: 'Have you had malaria in the past 3 years?' },
          { id: 'q2_10_2', text: 'Have you visited a malaria area in the past 3 weeks?' },
        ],
      },
      {
        heading: 'Creutzfeldt-Jakob Disease (CJD, vCJD)',
        questions: [
          { id: 'q2_11_1', text: 'Have you ever received a tissue/organ transplant (e.g. cornea, dura mater, kidney, liver, bone marrow)?' },
          { id: 'q2_11_2', text: 'Have you ever had injections of human pituitary growth hormone or seen a neurosurgeon or neurologist?' },
          { id: 'q2_11_3', text: 'From 1980 to 1996, did you spend time that adds up to 12 months in the United Kingdom (England, Wales, Scotland, Ireland, the Channel Islands or Isle of Man)?' },
        ],
      },
      {
        heading: 'Medication / Vaccination History (past 3 months)',
        questions: [
          { id: 'q2_12_1', text: 'Have you received any treatment or taken any medication in the past 3 months?' },
          { id: 'q2_12_2', text: 'Have you ever taken Roaccutane, Proscar, Androcur, Propecia, Avodart or Tigason/Neotigason? (Common uses are for Acne or Benign Prostatic Hyperplasia)' },
          { id: 'q2_12_3', text: 'Have you had an injection, vaccination or inoculation in the past month?' },
          { id: 'q2_12_4', text: 'Have you received any immunoglobulins (e.g. Rabies/Anti-D Immunoglobulin) in the past 3 months?' },
          { id: 'q2_12_5', text: 'Have you ever participated in a drug/vaccine trial?' },
        ],
      },
      {
        heading: 'For Female Donors',
        questions: [
          { id: 'q2_13_1', text: 'Are you currently pregnant, undergoing fertility treatment or breastfeeding?' },
          { id: 'q2_13_2', text: 'In the past 3 months have you had a baby, ectopic pregnancy, miscarriage or abortion?' },
        ],
      },
      {
        heading: 'Smoking',
        questions: [
          { id: 'q3_4_1', text: 'Are you smoking cigarettes, electronic cigarettes (vape) or hookahs (hubly bubbly)?' },
          { id: 'q3_4_2', text: 'Did you smoke in the past 12 hours?' },
          { id: 'q3_5', text: 'Are you donating blood for the main reason of being tested for HIV?' },
          { id: 'q3_6', text: 'Do you consider your blood safe for transfusion to a patient?' },
        ],
      },
    ],
  },
  {
    id: 'section3',
    title: 'Section 3 — Lifestyle & High Risk Behaviour',
    subtitle: 'These questions do not mean to offend, but rather to identify potential risk to the patient. Please answer ALL questions honestly. Your answers will be treated confidentially.',
    icon: 'shield-alt',
    color: '#8b0000',
    groups: [
      {
        heading: 'Have you ever or your sexual partner',
        questions: [
          { id: 'q3_1_1', text: 'Tested positive for HIV/AIDS, Hepatitis B, Hepatitis C or Syphilis?' },
        ],
      },
      {
        heading: 'In the past 3 months have you or your sexual partner',
        questions: [
          { id: 'q3_2_1', text: 'Had a tattoo, any piercing, permanent make-up, cupping or acupuncture?' },
          { id: 'q3_2_2', text: 'Had a tribal circumcision, scarification, Raatbi or "blood sharing"?' },
          { id: 'q3_2_3', text: 'Had a blood transfusion or received blood products?' },
          { id: 'q3_2_4', text: 'Had been exposed to blood or body fluids via a needle stick injury, eye splash or assault (e.g. stabbing)?' },
          { id: 'q3_2_5', text: 'Suffered from night sweats, unintentional weight loss, persistent fever or swollen glands?' },
          { id: 'q3_2_6', text: 'Used recreational/party/street drugs, including cannabis (weed, marijuana), cocaine, Heroin, or used bodybuilding drugs?' },
          { id: 'q3_2_7', text: 'Had any sexually transmitted infection (STI), including syphilis, gonorrhoea, genital herpes or warts?' },
          { id: 'q3_2_8', text: 'Used antiretroviral (ARV) medication for HIV treatment or to prevent contracting HIV (e.g. PrEP/PEP)?' },
        ],
      },
      {
        heading: 'In the past 3 months (sexual contact with or without a condom)',
        questions: [
          { id: 'q3_3_1', text: 'Have you had sexual contact with a new person or with more than one partner?' },
          { id: 'q3_3_2', text: "Have you had sexual contact with someone whose sexual background you don't know or had casual sex?" },
          { id: 'q3_3_3', text: 'Have you had sexual contact with a person who tested positive for HIV?' },
          { id: 'q3_3_4', text: 'Have you had sexual activity with a male or female prostitute, escort, sex worker, or exchanged money, drugs, goods or favours in return for sex?' },
          { id: 'q3_3_5', text: 'Have you been a victim of sexual assault (e.g. rape)?' },
          { id: 'q3_3_6', text: 'Could your sex partner have been involved in any of the activities listed above?' },
        ],
      },
    ],
  },
  {
    id: 'section4',
    title: 'Section 4 — Declaration & Consent',
    subtitle: 'Please read this before you complete the form with your signature.',
    icon: 'file-contract',
    color: '#6b0000',
    groups: [
      {
        heading: '4.1 Declaration — Please confirm each statement',
        questions: [
          { id: 'q4_1_1', text: 'I confirm that I understand that I should "Donate blood for the right reasons".' },
          { id: 'q4_1_2', text: 'I have answered all the questions accurately and truthfully, and declare that I am not involved in any activities that could endanger the patients receiving my blood.' },
          { id: 'q4_1_3', text: 'I declare that any willful misrepresentation of the facts could endanger the patients receiving my blood.' },
          { id: 'q4_1_4', text: 'I have read and understood the information in the brochure "Donate blood for the right reasons".' },
          { id: 'q4_1_5', text: 'I undertake to immediately inform NAMBTS if there is any reason I deem my blood not safe for use.' },
          { id: 'q4_1_6', text: 'I undertake to immediately inform NAMBTS if I should become ill within 14 days of the blood donation or am diagnosed with hepatitis or HIV infection within 3 months of the blood donation.' },
        ],
      },
      {
        heading: '4.2 Consent — Please confirm each statement',
        questions: [
          { id: 'q4_2_1', text: 'I consent to my blood being screened for HIV, Hepatitis B, Hepatitis C and Syphilis.' },
          { id: 'q4_2_2', text: 'I consent to being contacted, utilizing the information I have supplied, and go for counselling to make an informed decision about further confirmatory testing.' },
          { id: 'q4_2_3', text: 'I consent that my blood can be utilized by NAMBTS for the benefit of patients. I accept that my blood will be used, at the discretion of NAMBTS, for transfusion, preparation of reagents or research.' },
        ],
      },
    ],
  },
];

const ALL_QUESTION_IDS = QUESTIONNAIRE_SECTIONS.flatMap(section =>
  section.groups.flatMap(group =>
    group.questions.map(q => q.id)
  )
);

module.exports = { QUESTIONNAIRE_SECTIONS, ALL_QUESTION_IDS };
