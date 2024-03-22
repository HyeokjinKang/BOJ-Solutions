import sys
from collections import deque
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
matrix = []

for _ in range(n):
    matrix.append(list(map(int, input().rstrip().split())))

for i in range(n):
    willVisit = deque([i])
    visited = []
    while (len(willVisit) != 0):
        now = willVisit.popleft()
        for j in range(n):
            if (matrix[now][j] == 1 and not (j in visited)):
                willVisit.append(j)
                visited.append(j)
    for j in range(n):
        if (j in visited):
            print("1 ")
        else:
            print("0 ")
    print("\n")
