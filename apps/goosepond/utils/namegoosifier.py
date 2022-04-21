from collections import defaultdict
from nltk.tokenize.sonority_sequencing import SyllableTokenizer
import random

tokenizer = SyllableTokenizer()

gooseterms = [
    "goose", "honk", "bill", "waddle", "gander", "duck",
    "pond", "swan", "gosling", "fowl", "peck", "bite",
    "swim", "cronk", "therapy", "bonk", "down", "confit",
]

goosedict = defaultdict(list)

for term in gooseterms:
    goosedict[term[0]].append(term)

def goosify(goose_input: str):
    tokenized_input = [tokenizer.tokenize(word) for word in goose_input.split()]
    goosier_name = ""
    # Find the first letter of the input
    for index, word in enumerate(tokenized_input):
        word_modified = False
        for syllable in word:
            first_letter = syllable[0]
            # Check if first letter is capitalized and match it
            if first_letter.lower() in goosedict and not word_modified and random.random() > 0.35:
                if first_letter.isupper():
                    goosier_name += random.choice(goosedict[first_letter.lower()]).title()
                    word_modified = True
                else:
                    goosier_name += random.choice(goosedict[first_letter.lower()])
                    word_modified = True
            else:
                goosier_name += syllable
        if index != (len(tokenized_input) - 1):       
            goosier_name += ' '

            
    return goosier_name

if __name__ == "__main__":
    print(goosify(goose_input="Bruce Springsteen"))