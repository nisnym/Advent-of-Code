
f = open('day1.txt', 'r')

numbers = list(map(int, map(str.strip, f.readlines())))

# --- Part One ---
i = 0
while i < len(numbers):
    j = i
    while j < len(numbers):
        if numbers[i] + numbers[j] == 2020:
            print(numbers[i], '*', numbers[j], '=', numbers[i] * numbers[j])
        j += 1
    i += 1

# --- Part Two ---

i = 0
while i < len(numbers):
    j = i
    while j < len(numbers):
        k = j
        while k < len(numbers):
            if numbers[i] + numbers[j] + numbers[k] == 2020:
                print(numbers[i], '*', numbers[j], '+', numbers[k], '=', numbers[i] * numbers[j] * numbers[k])
            k += 1
        j += 1
    i += 1
