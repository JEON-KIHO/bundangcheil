import { BARCODE_LARGE_STATE } from "./types";

export const barcodeLargeState = (barcodeLarge) => {
    return {
        type: BARCODE_LARGE_STATE,
        barcodeLarge
    }
}