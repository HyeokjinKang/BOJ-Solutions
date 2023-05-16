import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
    num, a, b, c = map(int, input().rstrip().split())
    if (a+b+c >= 55 and a >= 10.5 and b >= 7.5 and c >= 12):
        print(f"{num} {a+b+c} PASS\n")
    else:
        print(f"{num} {a+b+c} FAIL\n")
