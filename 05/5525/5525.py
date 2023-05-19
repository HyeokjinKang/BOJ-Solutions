import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
length = int(input())
string = input()
count = 0
oi = 0
i = 0

while i < length:
    if (oi > 0 or string[i-1:i] == "I") and string[i:i+2] == "OI":
        oi += 1
        i += 2
        if oi >= n:
            count += 1
    else:
        oi = 0
        i += 1

print(f"{count}")
