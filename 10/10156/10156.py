import sys
input = sys.stdin.readline

k, n, m = list(map(int, input().rstrip().split()))

print(k*n-m if k*n-m >= 0 else 0)
