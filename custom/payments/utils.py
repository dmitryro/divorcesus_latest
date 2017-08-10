import random
import string

def randomDigits(digits):
    """ Return a number of size 'digits' generated randomly """
    lower = 10**(digits-1)
    upper = 10**digits - 1
    return random.randint(lower, upper)

def getPaymentProcessing():
    """ Get Payment Processing Number generated at random """

    letter_a = random.choice(string.ascii_letters)
    letter_b = random.choice(string.ascii_letters)
    prefix = (letter_a+letter_b).upper()
    suffix = str(randomDigits(6))

    ppn = prefix+suffix

    return ppn
