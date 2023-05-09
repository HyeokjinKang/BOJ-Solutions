import sys
input = sys.stdin.readline

case = 1
while 1:
    data = list(map(int, input().rstrip().split()))
    if data[0] == 0:
        break
    if len(data) % 2 == 0:
        print(f"Case {case}: {data[len(data)//2]:.1f}")
    else:
        print(
            f"Case {case}: {((data[len(data)//2]+data[len(data)//2+1])/2):.1f}")
    case += 1
