from collections import deque
import sys
input = sys.stdin.readline
print = sys.stdout.write

mapY, mapX = map(int, input().split(' '))
dx, dy = [0, 0, -1, 1], [-1, 1, 0, 0]
mapV = []
willVisit = deque()

for y in range(mapY):
    mapI = list(map(int, input().split(' ')))
    for x in range(mapX):
        if (mapI[x] == 0):
            mapI[x] = -2
        if (mapI[x] == 1):
            mapI[x] = -3
        if (mapI[x] == 2):
            willVisit.append([y, x])
            mapI[x] = 0
    mapV.extend([mapI])

while (len(willVisit) != 0):
    [y, x] = willVisit.popleft()
    min = 1000000
    for k in range(4):
        [findY, findX] = [y + dy[k], x + dx[k]]
        if (0 <= findX < mapX and 0 <= findY < mapY):
            if (min > mapV[findY][findX] and mapV[findY][findX] >= 0):
                min = mapV[findY][findX]
            if (mapV[findY][findX] == -3):
                willVisit.append([findY, findX])
                mapV[findY][findX] = -4
    if (mapV[y][x] != 0):
        mapV[y][x] = min + 1


for y in range(mapY):
    for x in range(mapX):
        if (mapV[y][x] == -3):
            mapV[y][x] = -1
        if (mapV[y][x] == -2):
            mapV[y][x] = 0
        print(str(mapV[y][x]) + " ")
    print("\n")
