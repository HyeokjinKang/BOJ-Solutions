import sys
from collections import deque
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())
moveTo = {}
willVisit = deque([[1, 0]])
visited = deque([1])
visit = 0

for _ in range(n + m):
    x, y = map(int, input().rstrip().split())
    moveTo[x] = y

while True:
    now = willVisit[visit][0]
    index = willVisit[visit][1]
    if now >= 100:
        print(f'{index}')
        break
    for i in range(1, 7):
        move = now + i
        if move in moveTo:
            move = moveTo[move]
        if not (move in visited):
            visited.append(move)
            willVisit.append([move, index + 1])
    visit += 1
