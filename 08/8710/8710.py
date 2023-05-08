import sys
import math
input = sys.stdin.readline
print = sys.stdout.write

k, w, m = map(int, input().rstrip().split())
print(str(math.ceil((w-k)/m)))
