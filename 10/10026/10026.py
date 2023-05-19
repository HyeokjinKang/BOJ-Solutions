import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
data = [list(input()) for _ in range(n)]
close = [[0, 1], [0, -1], [1, 0], [-1, 0]]

willVisit = [[i, j, 0] for j in range(n) for i in range(n)]
area = data[n-1][n-1]
count = 0
visited = [[False for j in range(n)] for i in range(n)]
while (len(willVisit) > 0):
    now = willVisit.pop()
    if (now[2] == 0 and visited[now[1]][now[0]] == True):
        continue
    if (now[2] == 0):
        count += 1
        area = data[now[1]][now[0]]
    for i in range(4):
        x = now[0]+close[i][0]
        y = now[1]+close[i][1]
        if (x >= 0 and y >= 0 and x < n and y < n and data[y][x] == area and visited[y][x] == False):
            willVisit.append([x, y, 1])
            visited[y][x] = True
print(f"{count} ")

willVisit = [[i, j, 0] for j in range(n) for i in range(n)]
area = data[n-1][n-1]
count = 0
visited = [[False for j in range(n)] for i in range(n)]
while (len(willVisit) > 0):
    now = willVisit.pop()
    if (now[2] == 0 and visited[now[1]][now[0]] == True):
        continue
    if (now[2] == 0):
        count += 1
        area = data[now[1]][now[0]]
    for i in range(4):
        x = now[0]+close[i][0]
        y = now[1]+close[i][1]
        if (x >= 0 and y >= 0 and x < n and y < n and (data[y][x] == area or (area == "R" and data[y][x] == "G") or (area == "G" and data[y][x] == "R")) and visited[y][x] == False):
            willVisit.append([x, y, 1])
            visited[y][x] = True
print(f"{count}")
