import sys
input = sys.stdin.readline
print = sys.stdout.write

s = input()
if s.find("M") != -1 and s.find("O") != -1 and s.find("B") != -1 and s.find("I") != -1 and s.find("S") != -1:
    print("YES")
else:
    print("NO")
