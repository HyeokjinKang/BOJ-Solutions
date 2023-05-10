import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
cars = list(map(int, input().rstrip().split()))
print(str(cars.count(n)))
