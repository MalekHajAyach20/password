const validerMotDePasse = require('./validerMotDePasse');

test('Mot de passe trop court', () => {
    expect(validerMotDePasse("abc")).toBe("❌ Mot de passe trop court (min 8 caractères)");
});

test('Manque une majuscule', () => {
    expect(validerMotDePasse("abcdefg1!")).toBe("❌ Doit contenir au moins une lettre majuscule");
});

test('Manque un chiffre', () => {
    expect(validerMotDePasse("Abcdefgh!")).toBe("❌ Doit contenir au moins un chiffre");
});

test('Manque un caractère spécial', () => {
    expect(validerMotDePasse("Abcdefgh1")).toBe("❌ Doit contenir au moins un caractère spécial (!@#$%^&*...)");
});

test('Mot de passe valide', () => {
    expect(validerMotDePasse("Abcd1234!")).toBe("✅ Mot de passe valide");
});


// Changement pour déclencher le commit
