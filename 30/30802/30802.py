import sys
from math import ceil, floor
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
[s, m, l, xl, xxl, xxxl] = map(int, input().rstrip().split())
[t, p] = map(int, input().rstrip().split())

print(str(ceil(s / t) + ceil(m / t) + ceil(l / t) + ceil(xl / t) + ceil(xxl / t) + ceil(xxxl / t)))
print(f'\n{floor(n / p)} {n % p}')
