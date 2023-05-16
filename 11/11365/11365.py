import sys
input = sys.stdin.readline
print = sys.stdout.write

while 1:
    text = input().rstrip()
    if text == "END":
        break
    print(f"{text[::-1]}\n")
