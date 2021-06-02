module.exports = {
    add: function(a, b) {
        if (arguments.length <= 1)
            throw 'Arguments missing.'
        if (typeof a === "undefined")
            throw "\"undefined\" is not a valid number [arg 0].";
        if (typeof b === "undefined")
            throw "\"undefined\" is not a valid number [arg 1].";
        if (a === null)
            throw "\"null\" is not a valid number [arg 0].";
        if (b === null)
            throw "\"null\" is not a valid number [arg 1].";
        if (isNaN(a))
            throw "a String is not a valid number [arg 0].";
        if (isNaN(b))
            throw "a String is not a valid number [arg 1].";

        return parseInt(a + b);
    }
};
