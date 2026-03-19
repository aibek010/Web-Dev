def second_lowest(students):
    grades = sorted(set([s[1] for s in students]))
    second = grades[1]
    names = [s[0] for s in students if s[1] == second]
    names.sort()
    for name in names:
        print(name)

n = int(input())
students = []

for _ in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])

second_lowest(students)