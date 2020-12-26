import { SET_DANHSACH_DICHVU, SET_DICHVU, UPDATE_CHISO } from "../type/type";


const stateDefault = {
    // mangPhong: [{"maphong":5,"dientich":15,"loaiphong":1,"giaphong":"$1,400,000.00","succhua":5,"tinhtrangphong":false,"trangthai":true}],
    mangDichVu: []
}

const DichVuReducer = (state = stateDefault, action) => {
    // console.log('action', action);
    switch (action.type) {
        case SET_DANHSACH_DICHVU: {
            const newMangDichvu = action.data.map(dichVu => ({
                ...dichVu,
                key: dichVu.madichvu,
                options: dichVu.madichvu,
                chiso: 0,
                tongtiendichvu: 0
            }))

            state.mangDichVu = [...newMangDichvu]

            return { ...state }
        }
        case UPDATE_CHISO: {
            const newMangDichvu = [...state.mangDichVu]
            const { index, value } = action.data;

            newMangDichvu[index].chiso = value
            newMangDichvu[index].tongtiendichvu = value * newMangDichvu[index].giadichvu
            console.log("DichVuReducer -> newMangDichvu", newMangDichvu)
            state.mangDichVu = newMangDichvu

            return { ...state }

        }
        case SET_DICHVU: {
            state.DichVu = { ...action.DichVu }
            return { ...state }
        }
        default:
            return { ...state }
    }
}




export default DichVuReducer