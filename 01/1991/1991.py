import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
left = {}
right = {}

for _ in range(n):
  [a, b, c] = input().rstrip().split()
  if b != '.':
    left[a] = b
  if c != '.':
    right[a] = c

def pre_order(head):
  print(head)
  if head in left:
    pre_order(left[head])
  if head in right:
    pre_order(right[head])

def in_order(head):
  if head in left:
    in_order(left[head])
  print(head)
  if head in right:
    in_order(right[head])

def post_order(head):
  if head in left:
    post_order(left[head])
  if head in right:
    post_order(right[head])
  print(head)
  
pre_order('A')
print('\n')
in_order('A')
print('\n')
post_order('A')
