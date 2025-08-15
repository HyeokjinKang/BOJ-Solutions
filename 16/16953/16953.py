import sys
input = sys.stdin.readline
print = sys.stdout.write

a, b = map(int, input().rstrip().split())
cnt = 1

while b > a:
  cnt += 1
  if b % 2 == 0:
    b /= 2
  elif b % 10 == 1:
    b = int(b / 10)
  else:
    break

if b == a:
  print(f'{cnt}')
else:
  print("-1")
