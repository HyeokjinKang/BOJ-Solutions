import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
    num = int(input().rstrip())
    rst = "even" if num % 2 == 0 else "odd"
    print(f"{num} is {rst}\n")
