import sys
input = sys.stdin.readline
print = sys.stdout.write

a, b, c = map(int, input().rstrip().split())

def d_pow(n, x, y):
  if x == 1:
    return n % y
  tmp = d_pow(n, x // 2, y)
  if x % 2 == 0:
    return (tmp * tmp) % y
  else:
    return (n * tmp * tmp) % y

print(f'{d_pow(a, b, c)}')
