import sys
import math
input = sys.stdin.readline

n, m = map(int, input().rstrip().split())
ncm = math.factorial(n) // (math.factorial(n-m)*math.factorial(m))
print(ncm)