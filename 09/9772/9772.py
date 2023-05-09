import sys
input = sys.stdin.readline

while 1:
    x, y = map(float, input().rstrip().split())
    if x > 0 and y > 0:
        print("Q1")
    elif x < 0 and y > 0:
        print("Q2")
    elif x < 0 and y < 0:
        print("Q3")
    elif x > 0 and y < 0:
        print("Q4")
    else:
        print("AXIS")
    if x == 0 and y == 0:
        break
