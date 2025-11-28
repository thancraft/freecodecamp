// =================== What's My Age Again? ===================
// Daily Coding Challenge - November 2025 by freecodecamp.org
// date: 2025-11-27
// link: https://www.codewars.com/kata/whats-my-age-again/train/javascript

function generateSignature(name, title, company) {
  const karakterPertama = (name[0] || '').toLowerCase();
  const output = `${name}, ${title} at ${company}`;
  if (karakterPertama >= 'a' && karakterPertama <= 'i') {
    return `>>${output}`;
  }
  if (karakterPertama >= 'j' && karakterPertama <= 'r') {
    return `--${output}`;
  }
  if (karakterPertama >= 's' && karakterPertama <= 'z') {
    return `::${output}`;
  }
}

// function calculateAge(birthday) {
//     let pisah = birthday.split('-')
//   if (pisah[1] <= '11'){
//     return 2025 - parseInt(pisah[0])
//   }else{
//     return 2025 - parseInt(pisah[0]) - 1
//   }
// }