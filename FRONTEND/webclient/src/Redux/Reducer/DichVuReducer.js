import { SET_DANHSACH_DICHVU } from "../type/type";


const stateDefault = {
    // mangPhong: [{"maphong":5,"dientich":15,"loaiphong":1,"giaphong":"$1,400,000.00","succhua":5,"tinhtrangphong":false,"trangthai":true}],
    mangDichVu: []
}

const DichVuReducer = (state = stateDefault, action) => {
    console.log('action', action);
    switch (action.type) {
        case SET_DANHSACH_DICHVU: {
            state.mangDichVu = [...action.data]

            return { ...state }
        }
        default:
            return { ...state }
    }
}




export default DichVuReducer