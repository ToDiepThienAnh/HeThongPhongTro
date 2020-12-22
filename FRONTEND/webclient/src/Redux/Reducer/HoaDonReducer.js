import { SET_DANHSACH_HOADON } from "../type/type";


const stateDefault = {
    // mangPhong: [{"maphong":5,"dientich":15,"loaiphong":1,"giaphong":"$1,400,000.00","succhua":5,"tinhtrangphong":false,"trangthai":true}],
    mangHoaDon: []
}

const HoaDonReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_DANHSACH_HOADON: {
            let newMangHoaDon = [];

            newMangHoaDon = action.data.map(hoadon => ({
                ...hoadon,
                key: hoadon.mahoadon,
                options: {}
            }))

            state.mangHoaDon = [...newMangHoaDon]

            return { ...state }
        }
        default:
            return { ...state }
    }
}




export default HoaDonReducer