import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
p = int(input())
data = [list(map(int, input().split(' '))) for _ in range(p)]
tree = {}
for i in range(p):
    if data[i][0] in tree:
        tree[data[i][0]].add(data[i][1])
    else:
        tree[data[i][0]] = set([data[i][1]])
    if data[i][1] in tree:
        tree[data[i][1]].add(data[i][0])
    else:
        tree[data[i][1]] = set([data[i][0]])
if (not 1 in tree):
    print("0")
    exit()
visited = []
willVisit = [1]
while (len(willVisit) != 0):
    now = willVisit.pop()
    if (now in visited):
        continue
    visited.append(now)
    willVisit.extend(list(tree[now]))
print(str(len(visited) - 1))
