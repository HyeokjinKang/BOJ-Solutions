import sys
from math import sqrt, ceil
input = sys.stdin.readline
print = sys.stdout.write

s, e = map(int, input().rstrip().split())
max = ceil(sqrt(e))
count = 0
arr = [0] * (max + 1)
for i in range(2, max + 1):
    if (arr[i] == 0):
        mul = 1
        while (i * mul <= max):
            arr[i * mul] = 1
            mul += 1
        pow = i * i
        while (pow <= e):
            if (s <= pow):
                count += 1
            pow *= i
print(f'{count}')
