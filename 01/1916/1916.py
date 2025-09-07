import sys, math
input = sys.stdin.readline
print = sys.stdout.write

n = int(input()) # 도시
m = int(input()) # 버스
mtx = [[math.inf for j in range(n)] for i in range(n)] # i에서 j로 가는 비용

for i in range(n):
  mtx[i][i] = 0

for _ in range(m):
  a, b, c = map(int, input().rstrip().split())
  a -= 1
  b -= 1
  if mtx[a][b] == -1 or mtx[a][b] > c:
    mtx[a][b] = c

frm, to = map(int, input().rstrip().split())
frm -= 1
to -= 1

willVisit = [frm]
index = 0
while (len(willVisit) > index):
  i = willVisit[index]
  minimum = math.inf
  nextI = -1
  for j in range(n):
    mtx[frm][j] = min(mtx[frm][j], mtx[frm][i] + mtx[i][j])
    if (not j in willVisit) and minimum > mtx[frm][j]:
      nextI = j
      minimum = mtx[frm][j]
  if nextI != -1:
    willVisit.append(nextI)
  index += 1

print(f'{mtx[frm][to]}')