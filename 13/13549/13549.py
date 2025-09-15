import sys, math
from collections import deque
input = sys.stdin.readline
print = sys.stdout.write

n, k = map(int, input().rstrip().split())

willVisit = deque([[n, 0]])
visited = [math.inf for _ in range(100002)]
visited[n] = 0

while True:
    [now, sec] = willVisit.popleft()
    if now == k:
        print(f'{sec}')
        break
    if now * 2 <= k + 1 and now > 0 and visited[now * 2] > sec:
        willVisit.appendleft([now * 2, sec])
        visited[now * 2] = sec
    sec += 1
    if now > 0 and visited[now - 1] > sec:
        willVisit.append([now - 1, sec])
        visited[now - 1] = sec
    if now < 100000 and visited[now + 1] > sec:
        willVisit.append([now + 1, sec])
        visited[now + 1] = sec