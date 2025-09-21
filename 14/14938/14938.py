import sys, math
from copy import deepcopy
input = sys.stdin.readline
print = sys.stdout.write

N, M, R = map(int, input().rstrip().split())
items = list(map(int, input().rstrip().split()))
init = [[math.inf for _ in range(N)] for n in range(N)]

for i in range(N):
    init[i][i] = 0

for _ in range(R):
    a, b, l = map(int, input().rstrip().split())
    a -= 1
    b -= 1
    if init[a][b] > l:
        init[a][b] = l
    if init[b][a] > l:
        init[b][a] = l

maxsum = 0
for n in range(N):
    mtx = deepcopy(init)
    visited = [n]
    index = 0
    while len(visited) > index:
        now = visited[index]
        low = math.inf
        nextI = -1
        for i in range(N):
            mtx[n][i] = min(mtx[n][i], mtx[n][now] + mtx[now][i])
            if (not i in visited) and low > mtx[n][i]:
                low = mtx[n][i]
                nextI = i
        if nextI != -1:
            visited.append(nextI)
        index += 1
    
    summary = 0
    for i in range(N):
        if mtx[n][i] <= M:
            summary += items[i]
    if maxsum < summary:
        maxsum = summary

print(f'{maxsum}')