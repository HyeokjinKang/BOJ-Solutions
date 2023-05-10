import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
    x, y = map(int, input().rstrip().split())
    for i in range(y):
        for j in range(x):
            print("X")
        print("\n")
    print("\n")
