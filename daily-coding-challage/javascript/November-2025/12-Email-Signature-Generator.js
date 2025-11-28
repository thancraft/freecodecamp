// =================== Email ===================

// date: 2025-11-12
// link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-12

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