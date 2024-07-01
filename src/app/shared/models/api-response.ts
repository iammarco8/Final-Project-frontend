export interface ApiResponse<T = any> {
    status: 'success' | 'error',
    results?: number,   //question mark for un required feilds
    data?: {[index:string]: T }
    // Errors
    message?:string,
}
