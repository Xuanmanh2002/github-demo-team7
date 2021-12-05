const NGU_TOC = 'NGU_TOC'
const XA_TOC = 'XA_TOC'
const DIEU_TOC = 'DIEU_TOC'

function checkCanJoin(type) {
    let result = false

    if(type === 'XA_TOC' || type === 'DIEU_TOC'){
        result = true;
    } else if(type === 'NGU_TOC') {
        result = false;
    }

    return result
}