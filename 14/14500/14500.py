import sys
input = sys.stdin.readline
print = sys.stdout.write

[dx, dy] = [[0, 1, -1], [1, 0, 0]]


def visit(y, x, visited, index):
    visitedCopy = visited.copy()
    if 0 <= y < mapY and 0 <= x < mapX:
        visitedCopy.append([y, x])
        max = 0
        if index != 4:
            for coordinate in visitedCopy:
                for k in range(3):
                    now = [coordinate[0] + dy[k], coordinate[1] + dx[k]]
                    if (not now in visitedCopy):
                        sum = visit(now[0], now[1], visitedCopy, index + 1)
                        if (sum > max):
                            max = sum
        return max + matrix[y][x]
    else:
        return 0


mapY, mapX = map(int, input().rstrip().split())
matrix = []

for _ in range(mapY):
    matrix.append(list(map(int, input().rstrip().split())))

max = 0
for i in range(mapY):
    for j in range(mapX):
        sum = visit(i, j, [], 1)
        if (sum > max):
            max = sum

print(str(max))
