part2 = sum(sorted([sum([int(calorie) for calorie in calories]) for calories in [elf.split("\n") for elf in input.split("\n\n")]])[-3:])