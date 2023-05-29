import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
a = list(map(int, input().rstrip().split()))
b = list(map(int, input().rstrip().split()))
a.sort()
b.sort(reverse=True)
result = 0
for i in range(len(a)):
    result += a[i] * b[i]
print(f"{result}")
