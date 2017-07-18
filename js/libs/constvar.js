const quizQuestions = [
    {
        id: 0,
        text: 'Your feedback will be used to help teach the computer to judge movie sentiments on its own.',
        cHint: 'Correct! The machine will learn from you to predict the sentiment of other reviews.',
        iHint: 'The machine will learn from you to predict the sentiment of other reviews.',
        img: false,
        answer: 'true'
    },
    {
        id: 1,
        text: 'The score indicates that the computer estimates that ignoring "impressive" ' +
        'makes it determine sentiments more effectively.',
        cHint: 'Correct! The computer estimated score favors considering "impressive". ',
        iHint: '"Consider" receives higher score (80) in the panel, meaning that ' +
        'considering the word "impressive" makes the computer more effective. ',
        img: '../assets/img/quiz.png',
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

]

const featurelist = [
    {
        "polarity": -0.609375,
        "F1": {
            "consider": 29,
            "ignore": 89
        },
        "word": "worst",
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
        "polarity": -0.5178571428571429,
        "F1": {
            "consider": 19,
            "ignore": 24
        },
        "word": "wrong",
        "iter": 1,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7926445705977764,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": -3
    },
    {
        "polarity": -0.875,
        "F1": {
            "consider": 82,
            "ignore": 47
        },
        "word": "unfortunately",
        "iter": 2,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7914442967073422,
                "dev": 0.8402251030047231
            }
        },
        "polarityLevel": -3
    },
    {
        "polarity": -0.475,
        "F1": {
            "consider": 26,
            "ignore": 83
        },
        "word": "bad",
        "iter": 3,
        "F1Level": -3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7864833821703286,
                "dev": 0.8102673098181089
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.375,
        "F1": {
            "consider": 12,
            "ignore": 96
        },
        "word": "never",
        "iter": 4,
        "F1Level": -3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7924831875189505,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.4,
        "F1": {
            "consider": 10,
            "ignore": 42
        },
        "word": "little",
        "iter": 5,
        "F1Level": -2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.792564401089882,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.16666666666666666,
        "F1": {
            "consider": 29,
            "ignore": 74
        },
        "word": "must",
        "iter": 6,
        "F1Level": -2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7912844282466264,
                "dev": 0.8501207729468598
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.203125,
        "F1": {
            "consider": 82,
            "ignore": 89
        },
        "word": "hard",
        "iter": 7,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7929646642549121,
                "dev": 0.8351866750471402
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.2916666666666667,
        "F1": {
            "consider": 41,
            "ignore": 62
        },
        "word": "horror",
        "iter": 8,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7928042010562852,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.15625,
        "F1": {
            "consider": 23,
            "ignore": 17
        },
        "word": "poor",
        "iter": 9,
        "F1Level": 1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7899237915456794,
                "dev": 0.8452529436870779
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.15625,
        "F1": {
            "consider": 13,
            "ignore": 10
        },
        "word": "less",
        "iter": 10,
        "F1Level": 1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7921646822775353,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.4166666666666667,
        "F1": {
            "consider": 76,
            "ignore": 33
        },
        "word": "stupid",
        "iter": 11,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7898426833290796,
                "dev": 0.8252855815821849
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.22916666666666666,
        "F1": {
            "consider": 77,
            "ignore": 43
        },
        "word": "dead",
        "iter": 12,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7928846170079799,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.2916666666666667,
        "F1": {
            "consider": 83,
            "ignore": 12
        },
        "word": "problem",
        "iter": 13,
        "F1Level": 3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.79280433366949,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": -2
    },
    {
        "polarity": -0.0625,
        "F1": {
            "consider": 15,
            "ignore": 73
        },
        "word": "story",
        "iter": 14,
        "F1Level": -3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7916049656711406,
                "dev": 0.8402251030047231
            }
        },
        "polarityLevel": -1
    },
    {
        "polarity": -0.0625,
        "F1": {
            "consider": 12,
            "ignore": 89
        },
        "word": "scenes",
        "iter": 15,
        "F1Level": -3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7928841291766928,
                "dev": 0.8203609022556391
            }
        },
        "polarityLevel": -1
    },
    {
        "polarity": -0.13392857142857142,
        "F1": {
            "consider": 57,
            "ignore": 88
        },
        "word": "still",
        "iter": 16,
        "F1Level": -2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7919242868184873,
                "dev": 0.8402251030047231
            }
        },
        "polarityLevel": -1
    },
    {
        "polarity": -0.0625,
        "F1": {
            "consider": 45,
            "ignore": 63
        },
        "word": "even",
        "iter": 17,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7932019098414257,
                "dev": 0.8552366247395244
            }
        },
        "polarityLevel": -1
    },
    {
        "polarity": -0.125,
        "F1": {
            "consider": 49,
            "ignore": 45
        },
        "word": "might",
        "iter": 18,
        "F1Level": 1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7928040578348216,
                "dev": 0.8402251030047231
            }
        },
        "polarityLevel": -1
    },
    {
        "polarity": -0.052083333333333336,
        "F1": {
            "consider": 88,
            "ignore": 47
        },
        "word": "away",
        "iter": 19,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7923245776511679,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": -1
    },
    {
        "polarity": -0.10416666666666667,
        "F1": {
            "consider": 79,
            "ignore": 10
        },
        "word": "yet",
        "iter": 20,
        "F1Level": 3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7940849342580623,
                "dev": 0.8351866750471402
            }
        },
        "polarityLevel": -1
    },
    {
        "polarity": -0.125,
        "F1": {
            "consider": 77,
            "ignore": 13
        },
        "word": "rather",
        "iter": 21,
        "F1Level": 3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7931248989967841,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": -1
    },
    {
        "polarity": 0.0,
        "F1": {
            "consider": 14,
            "ignore": 67
        },
        "word": "one",
        "iter": 22,
        "F1Level": -3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7935244970175968,
                "dev": 0.8352692626346314
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0,
        "F1": {
            "consider": 31,
            "ignore": 65
        },
        "word": "would",
        "iter": 23,
        "F1Level": -2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7920838363970993,
                "dev": 0.8402251030047231
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0.04,
        "F1": {
            "consider": 15,
            "ignore": 47
        },
        "word": "see",
        "iter": 24,
        "F1Level": -2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7936834582694469,
                "dev": 0.8253550940654827
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0.020833333333333332,
        "F1": {
            "consider": 65,
            "ignore": 75
        },
        "word": "first",
        "iter": 25,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7925648047102309,
                "dev": 0.8352692626346314
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0.0,
        "F1": {
            "consider": 15,
            "ignore": 21
        },
        "word": "also",
        "iter": 26,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7927249389842325,
                "dev": 0.8402251030047231
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0.010135135135135136,
        "F1": {
            "consider": 49,
            "ignore": 44
        },
        "word": "get",
        "iter": 27,
        "F1Level": 1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7919248941168049,
                "dev": 0.8351866750471402
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0.009615384615384616,
        "F1": {
            "consider": 47,
            "ignore": 46
        },
        "word": "way",
        "iter": 28,
        "F1Level": 1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7932848264043522,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0,
        "F1": {
            "consider": 78,
            "ignore": 34
        },
        "word": "could",
        "iter": 29,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7918427710330138,
                "dev": 0.8303408521303258
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0.045,
        "F1": {
            "consider": 89,
            "ignore": 58
        },
        "word": "made",
        "iter": 30,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.790883597551235,
                "dev": 0.8302391719425184
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0.041666666666666664,
        "F1": {
            "consider": 85,
            "ignore": 13
        },
        "word": "seen",
        "iter": 31,
        "F1Level": 3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.791283680170848,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 0
    },
    {
        "polarity": 0.125,
        "F1": {
            "consider": 30,
            "ignore": 88
        },
        "word": "pretty",
        "iter": 32,
        "F1Level": -3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7908847111137326,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 1
    },
    {
        "polarity": 0.125,
        "F1": {
            "consider": 26,
            "ignore": 60
        },
        "word": "much",
        "iter": 33,
        "F1Level": -2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7932848952079234,
                "dev": 0.8403208020050126
            }
        },
        "polarityLevel": 1
    },
    {
        "polarity": 0.125,
        "F1": {
            "consider": 56,
            "ignore": 72
        },
        "word": "think",
        "iter": 34,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7924844625557766,
                "dev": 0.8402251030047231
            }
        },
        "polarityLevel": 1
    },
    {
        "polarity": 0.06818181818181818,
        "F1": {
            "consider": 45,
            "ignore": 48
        },
        "word": "acting",
        "iter": 35,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7924837453425332,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 1
    },
    {
        "polarity": 0.14583333333333334,
        "F1": {
            "consider": 50,
            "ignore": 42
        },
        "word": "know",
        "iter": 36,
        "F1Level": 1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7923245776511679,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 1
    },
    {
        "polarity": 0.125,
        "F1": {
            "consider": 67,
            "ignore": 22
        },
        "word": "actually",
        "iter": 37,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7928042010562852,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 1
    },
    {
        "polarity": 0.0546875,
        "F1": {
            "consider": 88,
            "ignore": 53
        },
        "word": "show",
        "iter": 38,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7921643470553417,
                "dev": 0.8501207729468598
            }
        },
        "polarityLevel": 1
    },
    {
        "polarity": 0.0625,
        "F1": {
            "consider": 88,
            "ignore": 23
        },
        "word": "enough",
        "iter": 39,
        "F1Level": 3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7926444591151015,
                "dev": 0.8401288244766505
            }
        },
        "polarityLevel": 1
    },
    {
        "polarity": 0.2375,
        "F1": {
            "consider": 31,
            "ignore": 90
        },
        "word": "like",
        "iter": 40,
        "F1Level": -3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7926446714639612,
                "dev": 0.8401288244766505
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.29169999999999996,
        "F1": {
            "consider": 28,
            "ignore": 68
        },
        "word": "well",
        "iter": 41,
        "F1Level": -2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7912824300128077,
                "dev": 0.8301368760064411
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.375,
        "F1": {
            "consider": 57,
            "ignore": 84
        },
        "word": "really",
        "iter": 42,
        "F1Level": -2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.2375,
        "F1": {
            "consider": 14,
            "ignore": 29
        },
        "word": "characters",
        "iter": 43,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7912847488589851,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.38952173913043475,
        "F1": {
            "consider": 21,
            "ignore": 35
        },
        "word": "best",
        "iter": 44,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7898426833290796,
                "dev": 0.8351866750471402
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.4938518518518518,
        "F1": {
            "consider": 36,
            "ignore": 27
        },
        "word": "better",
        "iter": 45,
        "F1Level": 1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7917644180628473,
                "dev": 0.8601127214170693
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.375,
        "F1": {
            "consider": 59,
            "ignore": 59
        },
        "word": "love",
        "iter": 46,
        "F1Level": 1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7908043098924815,
                "dev": 0.8203251706142112
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.20833333333333334,
        "F1": {
            "consider": 67,
            "ignore": 26
        },
        "word": "new",
        "iter": 47,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7922445248952726,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.3125,
        "F1": {
            "consider": 55,
            "ignore": 15
        },
        "word": "kind",
        "iter": 48,
        "F1Level": 2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7922444078790681,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.34375,
        "F1": {
            "consider": 84,
            "ignore": 14
        },
        "word": "interesting",
        "iter": 49,
        "F1Level": 3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7918449879329753,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 2
    },
    {
        "polarity": 0.515625,
        "F1": {
            "consider": 76,
            "ignore": 13
        },
        "word": "good",
        "iter": 50,
        "F1Level": 3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7944038738583477,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 3
    },
    {
        "polarity": 0.75,
        "F1": {
            "consider": 25,
            "ignore": 60
        },
        "word": "beautiful",
        "iter": 51,
        "F1Level": -2,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7920039190784842,
                "dev": 0.8402251030047231
            }
        },
        "polarityLevel": 3
    },
    {
        "polarity": 0.575,
        "F1": {
            "consider": 72,
            "ignore": 81
        },
        "word": "loved",
        "iter": 52,
        "F1Level": -1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7909647561397197,
                "dev": 0.8502709755118425
            }
        },
        "polarityLevel": 3
    },
    {
        "polarity": 0.5,
        "F1": {
            "consider": 73,
            "ignore": 61
        },
        "word": "great",
        "iter": 53,
        "F1Level": 1,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7883215444182684,
                "dev": 0.8302391719425184
            }
        },
        "polarityLevel": 3
    },
    {
        "polarity": 0.609375,
        "F1": {
            "consider": 80,
            "ignore": 43
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
    },
    {
        "polarity": 0.5,
        "F1": {
            "consider": 89,
            "ignore": 21
        },
        "word": "obviously",
        "iter": 54,
        "F1Level": 3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.792484064101748,
                "dev": 0.8451753614079196
            }
        },
        "polarityLevel": 3
    },
    {
        "polarity": 0.5,
        "F1": {
            "consider": 29,
            "ignore": 89
        },
        "word": "absolutely",
        "iter": 55,
        "F1Level": -3,
        "F1_true": {
            "keep": {
                "train": 1.0,
                "test": 0.7925646241412484,
                "dev": 0.8451753614079196
            },
            "del": {
                "train": 1.0,
                "test": 0.7927246205746139,
                "dev": 0.8352692626346314
            }
        },
        "polarityLevel": 3
    }
];