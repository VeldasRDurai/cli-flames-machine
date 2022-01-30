const PASS = (name1, name2, char) => {
    switch(char){
        case 'F': case 'f':
            return `FRIENDS`;
        case 'L': case 'l':
            return `LOVER`;
        case 'A': case 'a':
            return `AFFECTION`;
        case 'M': case 'm':
            return `MARRAGE`;
        case 'E': case 'e':
            return `ENIMIES`;
        case 'S': case 's':
            return `SISTER`;
        default:
            return `EXCEPTION`
    }
}
const FAIL = (name1, name2, char) => {
    switch(char){
        case 'F': case 'f':
            return `${name1} and ${name2} are not FRIENDS`;
        case 'L': case 'l':
            return `${name1} and ${name2} are not LOVERS`;
        case 'A': case 'a':
            return `${name1} and ${name2} are not AFFECTIONATE`;
        case 'M': case 'm':
            return `${name1} will not MARRY ${name2}`;
        case 'E': case 'e':
            return `${name1} and ${name2} are not ENIMIES`;
        case 'S': case 's':
            return `${name1}/${name2} is not the SISTER of ${name2}/${name1}`;
        default:
            return `EXCEPTION`
    }
}

export { PASS, FAIL } ;