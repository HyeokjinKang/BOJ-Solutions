import sys
input = sys.stdin.readline
print = sys.stdout.write

first = [int(input()) for _ in range(4)]
second = [int(input()) for _ in range(2)]
first.sort()
second.sort()
print(f"{first[3]+first[2]+first[1]+second[1]}")
