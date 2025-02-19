import sys
from collections import deque
input = sys.stdin.readline
print = sys.stdout.write

m, n = map(int, input().rstrip().split())
matrix = []
willVisit = deque([])
visited = [[False for _ in range(n)] for __ in range(m)]
for y in range(m):
    matrix.append(list(input().rstrip()))
    for x in range(n):
        if matrix[y][x] == '2':
            willVisit.append([x, y])
            visited[y][x] = True

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]
nextCount = 0
count = 1
level = 0
found = False
while len(willVisit) > 0:
    x, y = willVisit.popleft()
    if matrix[y][x] != '0' and matrix[y][x] != '2':
        print(f'TAK\n{level}')
        found = True
        break
    else:
        for i in range(4):
            findX = x + dx[i]
            findY = y + dy[i]
            if 0 <= findX and findX < n and 0 <= findY and findY < m:
                if visited[findY][findX] == False and matrix[findY][findX] != '1':
                    willVisit.append([findX, findY])
                    visited[findY][findX] = True
                    nextCount += 1
    count -= 1
    if count == 0:
        level += 1
        count = nextCount
        nextCount = 0
if not found:
    print('NIE')
