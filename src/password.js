class Password {
    //---------- le " | " est considéré comme une addition dans binaire
                             // Valeur binaire
    static brackets = 1;        // 00001
    static symbols = 2;         // 00010
    static upper = 4;           // 00100
    static lower = 8;           // 01000
    static num = 16;            // 10000

    static all = Password.brackets |
        Password.symbols |
        Password.upper |
        Password.lower |
        Password.num;           // 11111


    constructor() {
        //la table pour stocker le choix d'utilisateur
        this.data = [

            { name: 'brackets', range: Password.brackets, chars: '{}[]()<>' },
            { name: 'symbols', range: Password.symbols, chars: '?.,%@$=+-' },
            { name: 'upper', range: Password.upper, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
            { name: 'lower', range: Password.lower, chars: 'abcdefghijklmnopqrstuvwxyz' },
            { name: 'num', range: Password.num, chars: '0123456789' },
        ];

        // Le choix de la rangé de caractère par l'utilisateur
        this.setRange(Password.all);

    }

    setRange(valeurRange) {
        // initialisation du range
        this.range = valeurRange;
    }


    exclude(valeurRange) {
        this.range &= ~valeurRange;
    }

    include(valeurRange) {
        this.range |= valeurRange;
    }


    // recupéré les caractères choisi par l'utilisateur
    getChars() {
        let chars = '';
        this.data.forEach(obj => {
            if (obj.range & this.range) {
                chars += obj.chars;
            }

        });
        return chars;
    }


    generate(i = 16) {
        if (this.range === 0){
            this.setRange(Password.all);
        }

        let str = '';
        const chars = this.getChars();
        
        for (let j = 0; j < i; j++) {
            str += chars[Math.floor(Math.random()*chars.length)] // aller chercher la taille de mon tableau
        }


        return str;
        /* 
        let mdp = '';

        for (let j = 0; j < i; j++) {
            chiffreAleatoire =  Math.floor(Math.random()*25);
            lettreAleatoire = this.getChars()[chiffreAleatoire];
            mdp += lettreAleatoire;

        }

        return mdp;
 */

    }
}