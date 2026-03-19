def average_marks(records, name):
    marks = records[name]
    return sum(marks) / len(marks)

n = int(input())
records = {}

for _ in range(n):
    data = input().split()
    name = data[0]
    scores = list(map(float, data[1:]))
    records[name] = scores

query_name = input()

print(f"{average_marks(records, query_name):.2f}")