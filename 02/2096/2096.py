import sys, copy
input = sys.stdin.readline
print = sys.stdout.write

mindp = [-1, -1, -1]
maxdp = [-1, -1, -1]

n = int(input())
for _ in range(n):
  lvl = list(map(int, input().rstrip().split()))
  if mindp[0] == -1:
    mindp = copy.deepcopy(lvl)
    maxdp = copy.deepcopy(lvl)
  else:
    min1 = min(mindp[0:2])
    min2 = min(mindp[1:3])
    max1 = max(maxdp[0:2])
    max2 = max(maxdp[1:3])
    mindp[0] = lvl[0] + min1
    mindp[1] = lvl[1] + min(min1, min2)
    mindp[2] = lvl[2] + min2
    maxdp[0] = lvl[0] + max1
    maxdp[1] = lvl[1] + max(max1, max2)
    maxdp[2] = lvl[2] + max2

print(f'{max(maxdp)} {min(mindp)}')