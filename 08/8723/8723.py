import sys
input = sys.stdin.readline
print = sys.stdout.write

num = list(map(int, input().rstrip().split()))
num.sort()

if num[2]**2 == num[1]**2 + num[0]**2:
    print("1")
elif num[0] == num[1] and num[1] == num[2]:
    print("2")
else:
    print("0")
