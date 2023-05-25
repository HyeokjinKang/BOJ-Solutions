import sys
input = sys.stdin.readline
print = sys.stdout.write


def akaraka(t):
    if (len(t) == 1):
        return True
    else:
        for i in range(len(t)//2):
            if t[i] != t[len(t)-i-1]:
                return False
        return akaraka(t[0:len(t)//2]) == True and akaraka(t[len(t)-len(t)//2:len(t)]) == True


print("AKARAKA" if akaraka(input().rstrip()) == True else "IPSELENTI")
