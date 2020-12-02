# --- Part One ---

def main1():
    count = 0
    sum = 0
    file = open("input.txt", "r")
    for row in file:
        item = row.split(' ')
        low = int(item[0].split('-')[0])
        high = int(item[0].split('-')[1])
        letter = item[1][:-1]
        word = item[2].strip()
        count = word.count(letter)
        if count >= low and count <= high:
            sum += 1
    print(sum)

# --- Part Two ---

def main2():
    count = 0
    sum = 0
    file = open("input.txt", "r")
    for row in file:
        item = row.split(' ')
        low = int(item[0].split('-')[0]) - 1
        high = int(item[0].split('-')[1]) - 1
        letter = item[1][:-1]
        word = item[2].strip()
        if low <= len(word) :
            if word[low] == letter:
                count += 1
        if high <= len(word) :
            if word[high] == letter:
                count += 1
        if count == 1:
            sum += 1
        count = 0
    print(sum)

if __name__ == "__main__":

    main1()
    main2()
