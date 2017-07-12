from random import shuffle, randint
import json

POLARITY = [
    {
        'level': -3,
        'counts': 3,
        'score': {'-3': 1, '-2': 0, '-1': 1, '1': 0, '2': 1, '3': 0},
        'output': {'-3': [], '-2': [], '-1': [], '1': [], '2': [], '3': []}
    },
    {
        'level': -2,
        'counts': 11,
        'score': {'-3': 2, '-2': 2, '-1': 2, '1': 2, '2': 2, '3': 1},
        'output': {'-3': [], '-2': [], '-1': [], '1': [], '2': [], '3': []}
    },
    {
        'level': -1,
        'counts': 8,
        'score': {'-3': 2, '-2': 1, '-1': 1, '1': 1, '2': 1, '3': 2},
        'output': {'-3': [], '-2': [], '-1': [], '1': [], '2': [], '3': []}
    },
    {
        'level': 0,
        'counts': 10,
        'score': {'-3': 1, '-2': 2, '-1': 2, '1': 2, '2': 2, '3': 1},
        'output': {'-3': [], '-2': [], '-1': [], '1': [], '2': [], '3': []}
    },
    {
        'level': 1,
        'counts': 8,
        'score': {'-3': 1, '-2': 1, '-1': 2, '1': 1, '2': 2, '3': 1},
        'output': {'-3': [], '-2': [], '-1': [], '1': [], '2': [], '3': []}
    },
    {
        'level': 2,
        'counts': 10,
        'score': {'-3': 1, '-2': 2, '-1': 2, '1': 2, '2': 2, '3': 2},
        'output': {'-3': [], '-2': [], '-1': [], '1': [], '2': [], '3': []}
    },
    {
        'level': 3,
        'counts': 4,
        'score': {'-3': 0, '-2': 1, '-1': 1, '1': 1, '2': 0, '3': 1},
        'output': {'-3': [], '-2': [], '-1': [], '1': [], '2': [], '3': []}
    },
]

SCORE = {
    'min': 10,
    'max': 90,
    'stage': {
        '1': [0, 15],
        '2': [30, 45],
        '3': [60, 75],
        '-1': [-26, 0],
        '-2': [-52, -26],
        '-3': [-80, -52]
    },
}

SCORE_LEVEL = ['-3', '-2', '-1', '1', '2', '3']

totalOutput = []
for p in POLARITY:
    for scoreLevel in SCORE_LEVEL:
        totalNum = p['score'][scoreLevel]
        scoreRange = SCORE['stage'][scoreLevel]
        while totalNum > 0:
            scoreMin = randint(SCORE['min'], SCORE['max'])
            scoreMax = randint(SCORE['min'], SCORE['max'])
            if scoreMax - scoreMin > scoreRange[0]\
                and scoreMax - scoreMin <= scoreRange[1]:
                totalNum = totalNum - 1
                p['output'][scoreLevel].append({
                    'min': scoreMin,
                    'max': scoreMax
                })
        shuffle(p['output'][scoreLevel])
        totalOutput = totalOutput + p['output'][scoreLevel]

with open('allocation.json', 'w') as f:
    f.write(json.dumps(totalOutput, indent=4))
# Generate the stages