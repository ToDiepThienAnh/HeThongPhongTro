

const stateDefault = {
    // mangPhong: [{"maphong":5,"dientich":15,"loaiphong":1,"giaphong":"$1,400,000.00","succhua":5,"tinhtrangphong":false,"trangthai":true}],
    mangPhong: []
}

const PhongReducer = (state = stateDefault,action) => {
    
    switch(action.type){
        case "GET_DANHSACH_PHONG":{
            state.mangPhong = {...action.data}
            return {...state}
        }
    }
    return {...state}
}




export default PhongReducer