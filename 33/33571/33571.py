data = input()
count = 0

for l in data:
    if l == '@' or l == 'A' or l == 'a' or l == 'b' or l == 'D' or l == 'd' or l == 'e' or l == 'g' or l == 'O' or l == 'o' or l == 'P' or l == 'p' or l == 'Q' or l == 'q' or l == 'R':
        count += 1
    elif l == 'B':
        count += 2

print(count)
