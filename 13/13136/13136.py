import sys
import math
input = sys.stdin.readline
print = sys.stdout.write

r, c, n = map(int, input().rstrip().split())

print(f"{math.ceil(r/n)*math.ceil(c/n)}")
