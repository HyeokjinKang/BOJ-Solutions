import sys
import math
input = sys.stdin.readline
print = sys.stdout.write

n = int(input().rstrip())
if n <= 5:
    print(str(math.factorial(n) % 10))
else:
    print("0")
