import sys, math
from collections import deque
input = sys.stdin.readline
print = sys.stdout.write

n, k = map(int, input().rstrip().split())

willVisit = deque([[n, 0]])
visited = [math.inf for _ in range(100002)]
visited[n] = 0
mintime = math.inf
count = 0

while len(willVisit):
    [now, sec] = willVisit.popleft()
    if sec > mintime:
        continue
    if now == k:
        if mintime > sec:
            mintime = sec
            count = 0
        if mintime == sec:
            count += 1
        continue
    sec += 1
    if now * 2 <= k + 1 and now > 0 and visited[now * 2] >= sec:
        willVisit.append([now * 2, sec])
        visited[now * 2] = sec
    if now > 0 and visited[now - 1] >= sec:
        willVisit.append([now - 1, sec])
        visited[now - 1] = sec
    if now < 100000 and visited[now + 1] >= sec:
        willVisit.append([now + 1, sec])
        visited[now + 1] = sec

print(f'{mintime}\n{count}')