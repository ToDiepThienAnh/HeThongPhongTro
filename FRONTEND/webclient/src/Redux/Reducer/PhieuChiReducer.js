const stateDefault = {
    mangPhieuChi: [],
    PhieuChi: {
        values: {
            maphong: '',
            makhachhang: '',
            ngaylap: '',
            tienchi: 0
        },
        errors: {
            maphong: '',
            makhachhang: '',
            ngaylap: '',
            tienchi: 0
        }
    }
}

const PhieuChiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_DANHSACH_PHIEUCHI': {
            let newMangPhieuChi = [...action.data];



            state.mangPhieuChi = [...newMangPhieuChi]

            return { ...state }
        }
        case 'SET_PHIEUCHI': {
            state.PhieuChi = action.PhieuChi;
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default PhieuChiReducer