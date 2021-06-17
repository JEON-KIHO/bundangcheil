import { BARCODE_LARGE_STATE } from "./types";
import { barcodeState } from '../state';

const barcodeReducer = (state = barcodeState, action) => {
    switch(action.type) {
        case BARCODE_LARGE_STATE :
        return {
            ...state,
            barcodeLarge: action.barcodeLarge
        }
        default : return state
    }
}

export default barcodeReducer