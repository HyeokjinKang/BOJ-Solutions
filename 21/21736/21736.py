from collections import deque
import sys
input = sys.stdin.readline
print = sys.stdout.write

mapY, mapX = map(int, input().split(' '))
dx, dy = [0, 0, -1, 1], [-1, 1, 0, 0]
mapArr = deque()
willVisit = deque()
count = 0

for y in range(mapY):
    row = list(input())
    for x in range(mapX):
        if (row[x] == "I"):
            willVisit.append([y, x])
            row[x] = "X"
    mapArr.extend([row])

while (len(willVisit) != 0):
    [y, x] = willVisit.popleft()
    for k in range(4):
        [findY, findX] = [y + dy[k], x + dx[k]]
        if (0 <= findX < mapX and 0 <= findY < mapY and mapArr[findY][findX] != "X"):
            willVisit.append([findY, findX])
            if (mapArr[findY][findX] == "P"):
                count += 1
            mapArr[findY][findX] = "X"

if count == 0:
    print("TT")
else:
    print(str(count))
