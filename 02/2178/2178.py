import sys
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())

data = [list(input().rstrip()) for _ in range(n)]
close = [[-1, 0], [1, 0], [0, -1], [0, 1]]

willVisit = [[0, 0]]
visitCount = 1
nextCount = 0
countUp = 1
index = 0

while (not (willVisit[index][0] == m-1 and willVisit[index][1] == n-1)):
    location = willVisit[index]
    data[location[1]][location[0]] = 0
    c = 0
    for i in range(4):
        x = location[0] + close[i][0]
        y = location[1] + close[i][1]
        if x >= 0 and x < m and y >= 0 and y < n and data[y][x] == "1":
            data[y][x] = 0
            c += 1
            willVisit.append([x, y])
    nextCount += c
    visitCount -= 1
    if (visitCount == 0):
        visitCount = nextCount
        countUp += 1
        nextCount = 0
    index += 1

print(f"{countUp}")
