class Square{
    static string_square(s){
        var ris
        console.log(typeof s)
        if( (typeof s) == "string"){
            ris = s.length * s.length
        }else{
            ris = -1
        }
        return ris
    }
};

module.exports = Square;