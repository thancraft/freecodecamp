// =================== What's My Age Again? ===================
// Daily Coding Challenge - November 2025 by freecodecamp.org
// date: 2025-11-27
// link: https://www.codewars.com/kata/whats-my-age-again/train/javascript

function calculateAge(birthday) {
    let pisah = birthday.split('-')
    if (pisah[1] <= '11') {
        return 2025 - parseInt(pisah[0])
    } else {
        return 2025 - parseInt(pisah[0]) - 1
    }
}