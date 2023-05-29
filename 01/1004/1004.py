import sys
import math
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
    count = 0
    x,y,tx,ty = map(int, input().rstrip().split())
    m = int(input())
    for _ in range(m):
        cx,cy,r = map(int, input().rstrip().split())
        dist1 = math.sqrt((cx-x)**2+(cy-y)**2)
        dist2 = math.sqrt((cx-tx)**2+(cy-ty)**2)
        if (dist1 <= r):
            if (dist2 > r):
                count += 1
        elif (dist2 <= r):
            if (dist1 > r):
                count += 1
    print(f"{count}\n")
        