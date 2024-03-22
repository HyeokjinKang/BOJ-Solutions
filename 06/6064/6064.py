import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())

for _ in range(n):
    m, n, x, y = map(int, input().rstrip().split())
    year = x
    first = [x, x % n if x % n != 0 else n]
    result = -1
    while (True):
        b = year % n if year % n != 0 else n
        if (b == y):
            result = year
            break
        year += m
        b = year % n if year % n != 0 else n
        if ([x, b] == first):
            break
    print(str(result) + "\n")
