import sys
input = sys.stdin.readline

m = int(input())
bit = 0

for i in range(0, m):
    command = input().strip().split(" ")
    if command[0] == "all":
        bit = 0b111111111111111111111
    elif command[0] == "empty":
        bit = 0
    else:
        command[1] = int(command[1])
        if command[0] == "add":
            bit |= (1 << command[1])
        elif command[0] == "remove":
            bit &= ~(1 << command[1])
        elif command[0] == "check":
            if(bit & (1 << command[1])):
                sys.stdout.write("1\n")
            else:
                sys.stdout.write("0\n")
        elif command[0] == "toggle":
            bit ^= (1 << command[1])