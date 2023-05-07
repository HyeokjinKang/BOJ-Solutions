import sys
input = sys.stdin.readline
print = sys.stdout.write

while 1:
    n = int(input().strip())
    if n == 0:
        break
    for i in range(1, n+1):
        for j in range(0, i):
            print("*")
        print("\n")
