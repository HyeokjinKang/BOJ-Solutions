import sys
from math import sqrt
input = sys.stdin.readline

n = int(input())
for _ in range(n):
    t = int(input())
    if sqrt(t) % 1 == 0:
        r = int(str(t)[::-1])
        if sqrt(r) % 1 == 0:
            print("YES")
        else:
            print("NO")
    else:
        print("NO")
