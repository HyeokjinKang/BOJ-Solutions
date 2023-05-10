import sys
input = sys.stdin.readline
print = sys.stdout.write

data = input()
for i in range(0, 26):
    print(f"{data.count(chr(97+i))} ")
