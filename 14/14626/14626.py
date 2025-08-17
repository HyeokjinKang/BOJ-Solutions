import sys
input = sys.stdin.readline
print = sys.stdout.write

isbn = input().rstrip()
calc = 0
empty = -1

for i in range(13):
    if i == 12:
        calc %= 10
        if empty == -1:
            print(f'{10 - calc}')
        else:
            mul = 1 if empty % 2 == 0 else 3
            target = (10 - int(isbn[i])) % 10
            for j in range(10):
                if (calc + mul * j) % 10 == target:
                    print(f'{j}')
                    break
    elif isbn[i] == '*':
        empty = i
    else:
        calc += int(isbn[i]) * (1 if i % 2 == 0 else 3)
