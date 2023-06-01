import sys
input = sys.stdin.readline
print = sys.stdout.write

data = [int(input()) for _ in range(5)]
data.sort()
print(f"{sum(data)//5}\n{data[2]}")
