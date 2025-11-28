# =================== What's My Age Again? ===================
# Daily Coding Challenge - November 2025 by freecodecamp.org
# date: 2025-11-27
# link: https://www.codewars.com/kata/whats-my-age-again/train/javascript

def calculate_age(birthday):
    pisah = birthday.split('-')
    if pisah[1] <= '11':
        return 2025 - int(pisah[0])
    else:
        return 2025 - int(pisah[0]) - 1
    return birthday