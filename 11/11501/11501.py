import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
    length = int(input())
    data = list(map(int, input().rstrip().split()))
    revenue = 0
    highest = 0
    for i in range(length - 1, -1, -1):
        if data[i] > highest:
            highest = data[i]
        else:
            revenue += highest - data[i]
    print(f'{revenue}\n')
