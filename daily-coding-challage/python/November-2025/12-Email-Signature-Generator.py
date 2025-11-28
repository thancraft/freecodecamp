# =================== Email ===================

# date: 2025-11-12
# link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-12

def generate_signature(name, title, company):
    karakterPertama = (name[0] or '').lower()
    output = f'{name}, {title} at {company}'
    if karakterPertama >= 'a' and karakterPertama <= 'i': 
        return f'>>{output}';
    
    if karakterPertama >= 'j' and karakterPertama <= 'r':
        return f'--{output}'
    
    if karakterPertama >= 's' and karakterPertama <= 'z':
        return f'::{output}';
    
    return name