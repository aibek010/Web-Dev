x = input()

result = 0
power = 0

for digit in reversed(x):
    result += int(digit) * (2 ** power)
    power += 1

print(result)