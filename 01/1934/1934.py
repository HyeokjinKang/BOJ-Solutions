import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
    a, b = map(int, input().rstrip().split())
    mul = a * b
    if b > a:
        a, b = b, a
    while b > 0:
        a = a % b
        a, b = b, a
    print(f'{int(mul / a)}\n')
