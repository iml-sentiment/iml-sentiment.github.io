const quizQuestions = [
    {
        id: 0,
        text: 'The score indicates that the computer estimates that "impressive" ' +
        'is relevant to the sentiment of movie reviews.',
        cHint: 'Correct! The computer estimated score favors that "impressive" is relevant. ',
        iHint: '"Relevant" receives higher score (80) in the panel, meaning that ' +
        'the word "impressive" is relevant enough to make the computer more effective. ',
        img: '../assets/img/quiz-impressive.png',
        answer: 'true'
    },
    {
        id: 1,
        text: 'The score indicates that the computer estimates that "and" ' +
        'is relevant to the sentiment of movie reviews.',
        iHint: '"Not relevant" receives higher score (60) in the panel, meaning that ' +
        'the word "and" is not relevant according to the computer. Note that the difference is marginal.',
        cHint: 'Correct! The computer estimated score favors that "and" is not relevant. ' +
        'Note that the difference is marginal.',
        img: '../assets/img/quiz-and.png',
        answer: 'false'
    },
    {
        id: 2,
        text: 'The computer\'s score is always correct.',
        cHint: 'Correct! The computer can be wrong. ',
        iHint: 'Be careful! the computer can be wrong. ',
        img: false,
        answer: 'false'
    },
    {
        id: 2,
        text: 'We will record the time you spend on each question.',
        cHint: 'Correct! Please try to think carefully, and complete the survey continuously. ',
        iHint: 'Your completion duration is important to us. ' +
        'Please try to think carefully, and complete the survey continuously. ',
        img: false,
        answer: 'true'
    }
]

const featurelist_sample = [
    {
        "polarity": -0.609375,
        "F1": {
            "relevant": 54,
            "irrelevant": 60
        },
        "word": "and",
        "iter": 0,
        "F1Level": -3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7872034701871734,
                "dev": 0.8251979886863609
            }
        },
        "polarityLevel": -3
    },
    {
        "polarity": 0.609375,
        "F1": {
            "relevant": 80,
            "irrelevant": 43
        },
        "word": "impressive",
        "iter": 0,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7872034701871734,
                "dev": 0.8251979886863609
            }
        },
        "polarityLevel": 3
    }
]

const featurelist =[
    /* ----------------------------------------------------------- */
    {
        "polarity": -0.75,
        "word": "horribly",
        "F1Level": -3,
        "polarityLevel": -3,
        "F1": {
            "relevant": 10,
            "irrelevant": 83
        }
    },
    {
        "polarity": -0.875,
        "word": "bad",
        "F1Level": -2,
        "polarityLevel": -3,
        "F1": {
            "relevant": 21,
            "irrelevant": 67
        }
    },
    {
        "polarity": -0.875,
        "word": "awful",
        "F1Level": -1,
        "polarityLevel": -3,
        "F1": {
            "relevant": 20,
            "irrelevant": 42
        }
    },
    { // ?
        "polarity": -1.0,
        "word": "worst",
        "F1Level": 0,
        "polarityLevel": -3,
        "F1": {
            "relevant": 52,
            "irrelevant": 50
        }
    },
    {
        "polarity": -0.75,
        "word": "stupid",
        "F1Level": 1,
        "polarityLevel": -3,
        "F1": {
            "relevant": 57,
            "irrelevant": 30
        }
    },
    {
        "polarity": -0.875,
        "word": "unfortunately",
        "F1Level": 2,
        "polarityLevel": -3,
        "F1": {
            "relevant": 76,
            "irrelevant": 19
        }
    },
    {
        "polarity": -0.75,
        "word": "hell",
        "F1Level": 3,
        "polarityLevel": -3,
        "F1": {
            "relevant": 77,
            "irrelevant": 11
        }
    },
    /* ----------------------------------------------------------- */
    {//delete
        "polarity": -0.5,
        "word": "poor",
        "F1Level": -3,
        "polarityLevel": -2,
        "F1": {
            "relevant": 21,
            "irrelevant": 85
        }
    },
    { // keep
        "polarity": -0.5,
        "word": "confusing",
        "F1Level": -2,
        "polarityLevel": -2,
        "F1": {
            "relevant": 34,
            "irrelevant": 75
        }
    },
    { // keep
        "polarity": -0.5,
        "word": "fails",
        "F1Level": -1,
        "polarityLevel": -2,
        "F1": {
            "relevant": 47,
            "irrelevant": 70
        }
    },
    { // keep
        "polarity": -0.5,
        "word": "waste",
        "F1Level": 0,
        "polarityLevel": -2,
        "F1": {
            "relevant": 37,
            "irrelevant": 38
        }
    },
    { // keep
        "polarity": -0.5,
        "word": "dull",
        "F1Level": 1,
        "polarityLevel": -2,
        "F1": {
            "relevant": 53,
            "irrelevant": 27
        }
    },
    { // keep
        "polarity": -0.5,
        "word": "pointless",
        "F1Level": 2,
        "polarityLevel": -2,
        "F1": {
            "relevant": 59,
            "irrelevant": 18
        }
    },
    { // keep
        "polarity": -0.5,
        "word": "annoying",
        "F1Level": 3,
        "polarityLevel": -2,
        "F1": {
            "relevant": 84,
            "irrelevant": 13
        }
    },
    /* ----------------------------------------------------------- */
    {//keep
        "polarity": 0.0,
        "word": "nothing",
        "F1Level": -3,
        "polarityLevel": -1,
        "F1": {
            "relevant": 11,
            "irrelevant": 77
        }
    },
    {// keep
        "polarity": -0.375,
        "word": "avoid",
        "F1Level": -2,
        "polarityLevel": -1,
        "F1": {
            "relevant": 39,
            "irrelevant": 81
        }
    },
    {// keep
        "polarity": -0.25,
        "word": "mean",
        "F1Level": -1,
        "polarityLevel": -1,
        "F1": {
            "relevant": 13,
            "irrelevant": 35
        }
    },
    {// keep
        "polarity": -0.25,
        "word": "cheap",
        "F1Level": 0,
        "polarityLevel": -1,
        "F1": {
            "relevant": 54,
            "irrelevant": 53
        }
    },
    {// keep
        "polarity": -0.25,
        "word": "nowhere",
        "F1Level": 1,
        "polarityLevel": -1,
        "F1": {
            "relevant": 44,
            "irrelevant": 22
        }
    },
    {// keep
        "polarity": -0.25,
        "word": "anyway",
        "F1Level": 2,
        "polarityLevel": -1,
        "F1": {
            "relevant": 69,
            "irrelevant": 21
        }
    },
    { // keep
        "polarity": -0.375,
        "word": "weak",
        "F1Level": 3,
        "polarityLevel": -1,
        "F1": {
            "relevant": 75,
            "irrelevant": 14
        }
    },
    /* ----------------------------------------------------------- */
    {// keep
        "polarity": 0.25,
        "word": "indeed",
        "F1Level": -3,
        "polarityLevel": 0,
        "F1": {
            "relevant": 11,
            "irrelevant": 81
        }
    },
    {// keep
        "polarity": 0.0,
        "word": "including",
        "F1Level": -3,
        "polarityLevel": 0,
        "F1": {
            "relevant": 14,
            "irrelevant": 82
        }
    },
    {
        "polarity": 0.0,
        "word": "oscar",
        "F1Level": -2,
        "polarityLevel": 0,
        "F1": {
            "relevant": 22,
            "irrelevant": 74
        }
    },
    {// keep
        "polarity": 0.25,
        "word": "life",
        "F1Level": -2,
        "polarityLevel": 0,
        "F1": {
            "relevant": 38,
            "irrelevant": 79
        }
    },
    {// keep
        "polarity": 0.0,
        "word": "oh",
        "F1Level": -1,
        "polarityLevel": 0,
        "F1": {
            "relevant": 14,
            "irrelevant": 37
        }
    },
    {// keep
        "polarity": 0.0,
        "word": "prior",
        "F1Level": -1,
        "polarityLevel": 0,
        "F1": {
            "relevant": 31,
            "irrelevant": 52
        }
    },
    {// keep
        "polarity": 0.0,
        "word": "us",
        "F1Level": 0,
        "polarityLevel": 0,
        "F1": {
            "relevant": 12,
            "irrelevant": 21
        }
    },
    {
        "polarity": 0.125,
        "word": "reading",
        "F1Level": 0,
        "polarityLevel": 0,
        "F1": {
            "relevant": 78,
            "irrelevant": 69
        }
    },
    {// keep
        "polarity": 0.0,
        "word": "documentary",
        "F1Level": 1,
        "polarityLevel": 0,
        "F1": {
            "relevant": 57,
            "irrelevant": 36
        }
    },
    {// keep
        "polarity": -0.125,
        "word": "thing",
        "F1Level": 1,
        "polarityLevel": 0,
        "F1": {
            "relevant": 63,
            "irrelevant": 42
        }
    },
    {// keep
        "polarity": 0.0,
        "word": "script",
        "F1Level": 2,
        "polarityLevel": 0,
        "F1": {
            "relevant": 54,
            "irrelevant": 12
        }
    },
    {// keep
        "polarity": -0.125,
        "word": "future",
        "F1Level": 2,
        "polarityLevel": 0,
        "F1": {
            "relevant": 63,
            "irrelevant": 16
        }
    },
    {
        "polarity": 0.0,
        "word": "someone",
        "F1Level": 3,
        "polarityLevel": 0,
        "F1": {
            "relevant": 90,
            "irrelevant": 15
        }
    },
    {
        "polarity": 0.0,
        "word": "plot",
        "F1Level": 3,
        "polarityLevel": 0,
        "F1": {
            "relevant": 89,
            "irrelevant": 11
        }
    },
    /* ----------------------------------------------------------- */
    {// keep
        "F1": {
            "relevant": 20,
            "irrelevant": 82
        },
        "word": "experienced",
        "polarityLevel": 1,
        "polarity": 0.5,
        "F1Level": -3
    },
    {// delete?
        "F1": {
            "relevant": 19,
            "irrelevant": 65
        },
        "word": "definitely",
        "polarityLevel": 1,
        "polarity": 0.5,
        "F1Level": -2
    },
    {// keep
        "F1": {
            "relevant": 61,
            "irrelevant": 85
        },
        "word": "actually",
        "polarityLevel": 1,
        "polarity": 0.375,
        "F1Level": -1
    },
    {// keep
        "F1": {
            "relevant": 60,
            "irrelevant": 66
        },
        "word": "heart",
        "polarityLevel": 1,
        "polarity": 0.5,
        "F1Level": 0
    },
    {
        "F1": {
            "relevant": 53,
            "irrelevant": 22
        },
        "word": "like",
        "polarityLevel": 1,
        "polarity": 0.5,
        "F1Level": 1
    },
    {//keep
        "F1": {
            "relevant": 69,
            "irrelevant": 26
        },
        "word": "idea",
        "polarityLevel": 1,
        "polarity": 0.5,
        "F1Level": 2
    },
    {// keep
        "F1": {
            "relevant": 79,
            "irrelevant": 18
        },
        "word": "highly",
        "polarityLevel": 1,
        "polarity": 0.375,
        "F1Level": 3
    },
    /* ----------------------------------------------------------- */
    {// keep
        "F1": {
            "relevant": 15,
            "irrelevant": 90
        },
        "word": "worth",
        "polarityLevel": 2,
        "polarity": 0.625,
        "F1Level": -3
    },
    {
        "F1": {
            "relevant": 33,
            "irrelevant": 84
        },
        "word": "important",
        "polarityLevel": 2,
        "polarity": 0.75,
        "F1Level": -2
    },
    {// keep
        "F1": {
            "relevant": 41,
            "irrelevant": 63
        },
        "word": "recommended",
        "polarityLevel": 2,
        "polarity": 0.75,
        "F1Level": -1
    },
    {// keep
        "F1": {
            "relevant": 72,
            "irrelevant": 74
        },
        "word": "shines",
        "polarityLevel": 2,
        "polarity": 0.625,
        "F1Level": 0
    },
    {// keep
        "F1": {
            "relevant": 51,
            "irrelevant": 23
        },
        "word": "well",
        "polarityLevel": 2,
        "polarity": 0.625,
        "F1Level": 1
    },
    {
        "F1": {
            "relevant": 88,
            "irrelevant": 37
        },
        "word": "inspiring",
        "polarityLevel": 2,
        "polarity": 0.625,
        "F1Level": 2
    },
    {
        "F1": {
            "relevant": 90,
            "irrelevant": 22
        },
        "word": "powerful",
        "polarityLevel": 2,
        "polarity": 0.75,
        "F1Level": 3
    },
    /* ----------------------------------------------------------- */
    {
        "F1": {
            "relevant": 10,
            "irrelevant": 81
        },
        "word": "amazing",
        "polarityLevel": 3,
        "polarity": 1.0,
        "F1Level": -3
    },
    {
        "F1": {
            "relevant": 30,
            "irrelevant": 74
        },
        "word": "best",
        "polarityLevel": 3,
        "polarity": 1.0,
        "F1Level": -2
    },
    {
        "F1": {
            "relevant": 30,
            "irrelevant": 57
        },
        "word": "love",
        "polarityLevel": 3,
        "polarity": 1.0,
        "F1Level": -1
    },
    {
        "F1": {
            "relevant": 47,
            "irrelevant": 49
        },
        "word": "enjoy",
        "polarityLevel": 3,
        "polarity": 1.0,
        "F1Level": 0
    },
    {
        "F1": {
            "relevant": 86,
            "irrelevant": 57
        },
        "word": "attractive",
        "polarityLevel": 3,
        "polarity": 0.875,
        "F1Level": 1
    },
    {
        "F1": {
            "relevant": 79,
            "irrelevant": 29
        },
        "word": "amusing",
        "polarityLevel": 3,
        "polarity": 0.875,
        "F1Level": 2
    },
    {
        "F1": {
            "relevant": 81,
            "irrelevant": 17
        },
        "word": "good",
        "polarityLevel": 3,
        "polarity": 1.0,
        "F1Level": 3
    },
    {// this is only for backup
        "F1": {
            "relevant": 81,
            "irrelevant": 17
        },
        "word": "loved",
        "polarityLevel": 3,
        "polarity": 1.0,
        "F1Level": 3
    },
    {// this is only for backup
        "polarity": -0.75,
        "word": "worse",
        "F1Level": -3,
        "polarityLevel": -3,
        "F1": {
            "relevant": 10,
            "irrelevant": 83
        }
    }
]