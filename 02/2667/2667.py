import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
data = [list(input()) for _ in range(n)]
close = [[0, 1], [0, -1], [1, 0], [-1, 0]]

willVisit = [[i, j, 0] for j in range(n) for i in range(n)]
area = -1
visited = [[False for j in range(n)] for i in range(n)]
memory = []
while (len(willVisit) > 0):
    now = willVisit.pop()
    if ((now[2] == 0 and visited[now[1]][now[0]] == True) or data[now[1]][now[0]] == "0"):
        continue
    if (now[2] == 0):
        visited[now[1]][now[0]] = True
        area += 1
        memory.append(0)
    memory[area] += 1
    for i in range(4):
        x = now[0]+close[i][0]
        y = now[1]+close[i][1]
        if (x >= 0 and y >= 0 and x < n and y < n and visited[y][x] == False and data[y][x] == "1"):
            willVisit.append([x, y, 1])
            visited[y][x] = True
print(f"{area+1}\n")
memory.sort()
for n in memory:
    print(f"{n}\n")
