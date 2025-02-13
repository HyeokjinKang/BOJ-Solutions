import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
graph = [[] for _ in range(n + 1)]
for _ in range(n - 1):
    a, b = map(int, input().rstrip().split())
    graph[a].append(b)
    graph[b].append(a)
parent = {}
willVisit = [1]
visited = [0 for _ in range(n + 1)]
visited[1] = 1
index = 0
while len(parent) < n - 1:
    for nxt in graph[willVisit[index]]:
        if visited[nxt] == 0:
            parent[nxt] = willVisit[index]
            willVisit.append(nxt)
            visited[nxt] = 1
    index += 1
for i in range(2, n + 1):
    print(f'{parent[i]}\n')
