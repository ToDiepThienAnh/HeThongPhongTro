import { SET_DANHSACH_NHANVIEN } from "../type/type";


const stateDefault = {
    // mangPhong: [{"maphong":5,"dientich":15,"loaiphong":1,"giaphong":"$1,400,000.00","succhua":5,"tinhtrangphong":false,"trangthai":true}],
    mangNhanVien: []
}

const NhanVienReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_DANHSACH_NHANVIEN: {
            let newMangNhanVien = [];

            newMangNhanVien = action.data.map(nhanvien => ({
                ...nhanvien,
                key: nhanvien.manhanvien,
                options: {}
            }))

            state.mangNhanVien = [...newMangNhanVien]

            return { ...state }
        }
        default:
            return { ...state }
    }
}




export default NhanVienReducer