function validerMotDePasse(password) {
    const longueurMin = 8;
    const regexMajuscule = /[A-Z]/;
    const regexMinuscule = /[a-z]/;
    const regexChiffre = /[0-9]/;
    const regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < longueurMin) {
        return "❌ Mot de passe trop court (min 8 caractères)";
    }
    if (!regexMajuscule.test(password)) {
        return "❌ Doit contenir au moins une lettre majuscule";
    }
    if (!regexMinuscule.test(password)) {
        return "❌ Doit contenir au moins une lettre minuscule";
    }
    if (!regexChiffre.test(password)) {
        return "❌ Doit contenir au moins un chiffre";
    }
    if (!regexSpecial.test(password)) {
        return "❌ Doit contenir au moins un caractère spécial (!@#$%^&*...)";
    }

    return "✅ Mot de passe valide";
}

// Exemples de test
console.log(validerMotDePasse("abc")); // Trop court
console.log(validerMotDePasse("Abcdefgh")); // Manque un chiffre et un caractère spécial
console.log(validerMotDePasse("Abcd1234")); // Manque un caractère spécial
console.log(validerMotDePasse("Abcd1234!")); // Mot de passe valide
