// numeral.js language configuration
// language : french (fr)
// author : Adam Draper : https://github.com/adamwdraper
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'ème';
        },
        money: {
            symbol: '€'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('fr', language);
    }
}());