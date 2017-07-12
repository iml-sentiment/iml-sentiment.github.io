const quizQuestions = [
    {
        id: 0,
        text: 'Your answers will help us analyze reviews similar to the examples.',
        cHint: 'Correct! Examples provides a general idea about the other reviews.',
        iHint: 'Examples provides a general idea about the other reviews.',
        img: false,
        answer: 'true',
    },
    {
        id: 1,
        text: 'The score panel below indicates the computer understands the review sentiment ' +
        'if the word "film" is included.',
        cHint: 'Correct! Ignoring the word "film" makes the computer more effective. ',
        iHint: '"Ignore" receives higher score (62.254) in the panel, meaning that ' +
        'ignoring the word "" makes the computer more effective. ',
        img: '../assets/img/quiz.jpg',
        answer: 'false',
    },

    {
        id: 2,
        text: 'The computer\'s score is always accurate.',
        cHint: 'Correct! The computer can be wrong. ',
        iHint: 'Be careful! the computer can be wrong. ',
        img: false,
        answer: 'false',
    },

]

const featurelist = [
    {
        "word": "worst",
        "F1": {
            "del": {
                "dev": 0.8251979886863609,
                "train": 1.0,
                "test": 0.7872034701871734
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 0,
        "polarity": -0.609375,
        "polarity-level": -3,
        "F1": {
            'include': 29,
            'ignore': 89
        }
    },
    {
        "word": "wrong",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7926445705977764
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 1,
        "polarity": -0.5178571428571429,
        "polarity-level": -3,
        "F1": {
            'include': 19,
            'ignore': 24
        }
    },
    {
        "word": "unfortunately",
        "F1": {
            "del": {
                "dev": 0.8402251030047231,
                "train": 1.0,
                "test": 0.7914442967073422
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 2,
        "polarity": -0.875,
        "polarity-level": -3,
        "F1": {
            'include': 82,
            'ignore': 47
        }
    },
    {
        "word": "bad",
        "F1": {
            "del": {
                "dev": 0.8102673098181089,
                "train": 1.0,
                "test": 0.7864833821703286
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 3,
        "polarity": -0.475,
        "polarity-level": -2,
        "F1": {
            'include': 26,
            'ignore': 83
        }
    },
    {
        "word": "never",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7924831875189505
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 4,
        "polarity": -0.375,
        "polarity-level": -2,
        "F1": {
            'include': 12,
            'ignore': 96
        }
    },
    {
        "word": "little",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.792564401089882
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 5,
        "polarity": -0.4,
        "polarity-level": -2,
        "F1": {
            'include': 10,
            'ignore': 42
        }
    },
    {
        "word": "must",
        "F1": {
            "del": {
                "dev": 0.8501207729468598,
                "train": 1.0,
                "test": 0.7912844282466264
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 6,
        "polarity": -0.16666666666666666,
        "polarity-level": -2,
        "F1": {
            'include': 29,
            'ignore': 74
        }
    },
    {
        "word": "hard",
        "F1": {
            "del": {
                "dev": 0.8351866750471402,
                "train": 1.0,
                "test": 0.7929646642549121
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 7,
        "polarity": -0.203125,
        "polarity-level": -2,
        "F1": {
            'include': 82,
            'ignore': 89
        }
    },
    {
        "word": "horror",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7928042010562852
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 8,
        "polarity": -0.2916666666666667,
        "polarity-level": -2,
        "F1": {
            'include': 41,
            'ignore': 62
        }
    },
    {
        "word": "poor",
        "F1": {
            "del": {
                "dev": 0.8452529436870779,
                "train": 1.0,
                "test": 0.7899237915456794
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 9,
        "polarity": -0.15625,
        "polarity-level": -2,
        "F1": {
            'include': 23,
            'ignore': 17
        }
    },
    {
        "word": "less",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7921646822775353
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 10,
        "polarity": -0.15625,
        "polarity-level": -2,
        "F1": {
            'include': 13,
            'ignore': 10
        }
    },
    {
        "word": "stupid",
        "F1": {
            "del": {
                "dev": 0.8252855815821849,
                "train": 1.0,
                "test": 0.7898426833290796
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 11,
        "polarity": -0.4166666666666667,
        "polarity-level": -2,
        "F1": {
            'include': 76,
            'ignore': 33
        }
    },
    {
        "word": "dead",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7928846170079799
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 12,
        "polarity": -0.22916666666666666,
        "polarity-level": -2,
        "F1": {
            'include': 77,
            'ignore': 43
        }
    },
    {
        "word": "problem",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.79280433366949
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 13,
        "polarity": -0.2916666666666667,
        "polarity-level": -2,
        "F1": {
            'include': 83,
            'ignore': 12
        }
    },
    {
        "word": "story",
        "F1": {
            "del": {
                "dev": 0.8402251030047231,
                "train": 1.0,
                "test": 0.7916049656711406
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 14,
        "polarity": -0.0625,
        "polarity-level": -1,
        "F1": {
            'include': 15,
            'ignore': 73
        }
    },
    {
        "word": "scenes",
        "F1": {
            "del": {
                "dev": 0.8203609022556391,
                "train": 1.0,
                "test": 0.7928841291766928
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 15,
        "polarity": -0.0625,
        "polarity-level": -1,
        "F1": {
            'include': 12,
            'ignore': 89
        }
    },
    {
        "word": "still",
        "F1": {
            "del": {
                "dev": 0.8402251030047231,
                "train": 1.0,
                "test": 0.7919242868184873
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 16,
        "polarity": -0.13392857142857142,
        "polarity-level": -1,
        "F1": {
            'include': 57,
            'ignore': 88
        }
    },
    {
        "word": "even",
        "F1": {
            "del": {
                "dev": 0.8552366247395244,
                "train": 1.0,
                "test": 0.7932019098414257
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 17,
        "polarity": -0.0625,
        "polarity-level": -1,
        "F1": {
            'include': 45,
            'ignore': 63
        }
    },
    {
        "word": "might",
        "F1": {
            "del": {
                "dev": 0.8402251030047231,
                "train": 1.0,
                "test": 0.7928040578348216
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 18,
        "polarity": -0.125,
        "polarity-level": -1,
        "F1": {
            'include': 49,
            'ignore': 45
        }
    },
    {
        "word": "away",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7923245776511679
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 19,
        "polarity": -0.052083333333333336,
        "polarity-level": -1,
        "F1": {
            'include': 88,
            'ignore': 47
        }
    },
    {
        "word": "yet",
        "F1": {
            "del": {
                "dev": 0.8351866750471402,
                "train": 1.0,
                "test": 0.7940849342580623
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 20,
        "polarity": -0.10416666666666667,
        "polarity-level": -1,
        "F1": {
            'include': 79,
            'ignore': 10
        }
    },
    {
        "word": "rather",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7931248989967841
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 21,
        "polarity": -0.125,
        "polarity-level": -1,
        "F1": {
            'include': 77,
            'ignore': 13
        }
    },
    {
        "word": "one",
        "F1": {
            "del": {
                "dev": 0.8352692626346314,
                "train": 1.0,
                "test": 0.7935244970175968
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 22,
        "polarity": 0.0,
        "polarity-level": 0,
        "F1": {
            'include': 14,
            'ignore': 67
        }
    },
    {
        "word": "would",
        "F1": {
            "del": {
                "dev": 0.8402251030047231,
                "train": 1.0,
                "test": 0.7920838363970993
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 23,
        "polarity": 0,
        "polarity-level": 0,
        "F1": {
            'include': 31,
            'ignore': 65
        }
    },
    {
        "word": "see",
        "F1": {
            "del": {
                "dev": 0.8253550940654827,
                "train": 1.0,
                "test": 0.7936834582694469
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 24,
        "polarity": 0.04,
        "polarity-level": 0,
        "F1": {
            'include': 15,
            'ignore': 47
        }
    },
    {
        "word": "first",
        "F1": {
            "del": {
                "dev": 0.8352692626346314,
                "train": 1.0,
                "test": 0.7925648047102309
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 25,
        "polarity": 0.020833333333333332,
        "polarity-level": 0,
        "F1": {
            'include': 65,
            'ignore': 75
        }
    },
    {
        "word": "also",
        "F1": {
            "del": {
                "dev": 0.8402251030047231,
                "train": 1.0,
                "test": 0.7927249389842325
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 26,
        "polarity": 0.0,
        "polarity-level": 0,
        "F1": {
            'include': 15,
            'ignore': 21
        }
    },
    {
        "word": "get",
        "F1": {
            "del": {
                "dev": 0.8351866750471402,
                "train": 1.0,
                "test": 0.7919248941168049
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 27,
        "polarity": 0.010135135135135136,
        "polarity-level": 0,
        "F1": {
            'include': 49,
            'ignore': 44
        }
    },
    {
        "word": "way",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7932848264043522
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 28,
        "polarity": 0.009615384615384616,
        "polarity-level": 0,
        "F1": {
            'include': 47,
            'ignore': 46
        }
    },
    {
        "word": "could",
        "F1": {
            "del": {
                "dev": 0.8303408521303258,
                "train": 1.0,
                "test": 0.7918427710330138
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 29,
        "polarity": 0,
        "polarity-level": 0,
        "F1": {
            'include': 78,
            'ignore': 34
        }
    },
    {
        "word": "made",
        "F1": {
            "del": {
                "dev": 0.8302391719425184,
                "train": 1.0,
                "test": 0.790883597551235
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 30,
        "polarity": 0.045,
        "polarity-level": 0,
        "F1": {
            'include': 89,
            'ignore': 58
        }
    },
    {
        "word": "seen",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.791283680170848
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 31,
        "polarity": 0.041666666666666664,
        "polarity-level": 0,
        "F1": {
            'include': 85,
            'ignore': 13
        }
    },
    {
        "word": "pretty",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7908847111137326
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 32,
        "polarity": 0.125,
        "polarity-level": 1,
        "F1": {
            'include': 30,
            'ignore': 88
        }
    },
    {
        "word": "much",
        "F1": {
            "del": {
                "dev": 0.8403208020050126,
                "train": 1.0,
                "test": 0.7932848952079234
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 33,
        "polarity": 0.125,
        "polarity-level": 1,
        "F1": {
            'include': 26,
            'ignore': 60
        }
    },
    {
        "word": "think",
        "F1": {
            "del": {
                "dev": 0.8402251030047231,
                "train": 1.0,
                "test": 0.7924844625557766
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 34,
        "polarity": 0.125,
        "polarity-level": 1,
        "F1": {
            'include': 56,
            'ignore': 72
        }
    },
    {
        "word": "acting",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7924837453425332
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 35,
        "polarity": 0.06818181818181818,
        "polarity-level": 1,
        "F1": {
            'include': 45,
            'ignore': 48
        }
    },
    {
        "word": "know",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7923245776511679
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 36,
        "polarity": 0.14583333333333334,
        "polarity-level": 1,
        "F1": {
            'include': 50,
            'ignore': 42
        }
    },
    {
        "word": "actually",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7928042010562852
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 37,
        "polarity": 0.125,
        "polarity-level": 1,
        "F1": {
            'include': 67,
            'ignore': 22
        }
    },
    {
        "word": "show",
        "F1": {
            "del": {
                "dev": 0.8501207729468598,
                "train": 1.0,
                "test": 0.7921643470553417
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 38,
        "polarity": 0.0546875,
        "polarity-level": 1,
        "F1": {
            'include': 88,
            'ignore': 53
        }
    },
    {
        "word": "enough",
        "F1": {
            "del": {
                "dev": 0.8401288244766505,
                "train": 1.0,
                "test": 0.7926444591151015
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 39,
        "polarity": 0.0625,
        "polarity-level": 1,
        "F1": {
            'include': 88,
            'ignore': 23
        }
    },
    {
        "word": "like",
        "F1": {
            "del": {
                "dev": 0.8401288244766505,
                "train": 1.0,
                "test": 0.7926446714639612
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 40,
        "polarity": 0.2375,
        "polarity-level": 2,
        "F1": {
            'include': 31,
            'ignore': 90
        }
    },
    {
        "word": "well",
        "F1": {
            "del": {
                "dev": 0.8301368760064411,
                "train": 1.0,
                "test": 0.7912824300128077
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 41,
        "polarity": 0.29169999999999996,
        "polarity-level": 2,
        "F1": {
            'include': 28,
            'ignore': 68
        }
    },
    {
        "word": "really",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 42,
        "polarity": 0.375,
        "polarity-level": 2,
        "F1": {
            'include': 57,
            'ignore': 84
        }
    },
    {
        "word": "characters",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7912847488589851
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 43,
        "polarity": 0.2375,
        "polarity-level": 2,
        "F1": {
            'include': 14,
            'ignore': 29
        }
    },
    {
        "word": "best",
        "F1": {
            "del": {
                "dev": 0.8351866750471402,
                "train": 1.0,
                "test": 0.7898426833290796
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 44,
        "polarity": 0.38952173913043475,
        "polarity-level": 2,
        "F1": {
            'include': 21,
            'ignore': 35
        }
    },
    {
        "word": "better",
        "F1": {
            "del": {
                "dev": 0.8601127214170693,
                "train": 1.0,
                "test": 0.7917644180628473
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 45,
        "polarity": 0.4938518518518518,
        "polarity-level": 2,
        "F1": {
            'include': 36,
            'ignore': 27
        }
    },
    {
        "word": "love",
        "F1": {
            "del": {
                "dev": 0.8203251706142112,
                "train": 1.0,
                "test": 0.7908043098924815
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 46,
        "polarity": 0.375,
        "polarity-level": 2,
        "F1": {
            'include': 59,
            'ignore': 59
        }
    },
    {
        "word": "new",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7922445248952726
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 47,
        "polarity": 0.20833333333333334,
        "polarity-level": 2,
        "F1": {
            'include': 67,
            'ignore': 26
        }
    },
    {
        "word": "kind",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7922444078790681
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 48,
        "polarity": 0.3125,
        "polarity-level": 2,
        "F1": {
            'include': 55,
            'ignore': 15
        }
    },
    {
        "word": "interesting",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7918449879329753
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 49,
        "polarity": 0.34375,
        "polarity-level": 2,
        "F1": {
            'include': 84,
            'ignore': 14
        }
    },
    {
        "word": "good",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7944038738583477
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 50,
        "polarity": 0.515625,
        "polarity-level": 3,
        "F1": {
            'include': 76,
            'ignore': 13
        }
    },
    {
        "word": "beautiful",
        "F1": {
            "del": {
                "dev": 0.8402251030047231,
                "train": 1.0,
                "test": 0.7920039190784842
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 51,
        "polarity": 0.75,
        "polarity-level": 3,
        "F1": {
            'include': 25,
            'ignore': 60
        }
    },
    {
        "word": "loved",
        "F1": {
            "del": {
                "dev": 0.8502709755118425,
                "train": 1.0,
                "test": 0.7909647561397197
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 52,
        "polarity": 0.575,
        "polarity-level": 3,
        "F1": {
            'include': 72,
            'ignore': 81
        }
    },
    {
        "word": "great",
        "F1": {
            "del": {
                "dev": 0.8302391719425184,
                "train": 1.0,
                "test": 0.7883215444182684
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 53,
        "polarity": 0.5,
        "polarity-level": 3,
        "F1": {
            'include': 73,
            'ignore': 61
        }
    },
    {
        "word": "obviously",
        "F1": {
            "del": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.792484064101748
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 54,
        "polarity": 0.5,
        "polarity-level": 3,
        "F1": {
            'include': 89,
            'ignore': 21
        }
    },
    {
        "word": "absolutely",
        "F1": {
            "del": {
                "dev": 0.8352692626346314,
                "train": 1.0,
                "test": 0.7927246205746139
            },
            "keep": {
                "dev": 0.8451753614079196,
                "train": 1.0,
                "test": 0.7925646241412484
            }
        },
        "iter": 55,
        "polarity": 0.5,
        "polarity-level": 3,
        "F1": {
            'include': 29,
            'ignore': 89
        }
    }
];