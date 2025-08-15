import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
  m = int(input())
  data = []
  dp = []
  for i in range(2):
    data.append(list(map(int, input().rstrip().split())))
    dp.append([0 for j in range(m)])
  for i in range(m):
    y = 0
    for j in range(2):
      now = data[y][m - i - 1]
      tmp = 0
      if i == 1:
        tmp = dp[1 - y][i - 1]
      elif i > 1:
        tmp = max(dp[1 - y][i - 1], dp[1 - y][i - 2])
      dp[y][i] = now + tmp
      y += 1
  rst = max(dp[0][m - 1], dp[1][m - 1])
  print(f'{rst}\n')
