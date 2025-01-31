import sys
input = sys.stdin.readline
print = sys.stdout.write

for i in range(3):
    num = input().rstrip()
    if num.isdigit():
        break

nxt = int(num) + 3 - i
if (nxt % 3 == 0) and (nxt % 5 == 0):
    print("FizzBuzz")
elif (nxt % 3 == 0):
    print('Fizz')
elif nxt % 5 == 0:
    print('Buzz')
else:
    print(f'{nxt}')
