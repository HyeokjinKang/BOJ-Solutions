import sys
from math import ceil
input = sys.stdin.readline
print = sys.stdout.write


def beerCount(a, b):
    return ceil((abs(b[1] - a[1]) + abs(b[0] - a[0])) / 50)


t = int(input())
for _ in range(t):
    n = int(input())
    conbini = [list(map(int, input().rstrip().split()))]  # first is home, last is pentaport
    for i in range(n + 1):
        x, y = map(int, input().rstrip().split())
        conbini.append([x, y])
    willVisit = [0]
    index = 0
    while index < len(willVisit):
        now = conbini[willVisit[index]]
        for i in range(1, n + 2):
            if not (i in willVisit):
                need = beerCount(now, conbini[i])
                if need <= 20:
                    willVisit.append(i)
        if (n + 1) in willVisit:
            break
        index += 1
    if index == len(willVisit):
        print("sad\n")
    else:
        print("happy\n")
