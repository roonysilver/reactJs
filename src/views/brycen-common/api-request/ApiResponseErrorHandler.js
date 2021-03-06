/**
 * API response error handling function
 * @param api_response_error_object
 * @returns array
 */
export const ApiResponseErrorHandler = (response) => {
    let err = []; let obj;

    if (response.data.type === 'application/json'){
        // when api response header is `blob` type, then handle error with Promise
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsBinaryString(response.data);
            reader.onload = () => {
                obj = (JSON.parse(reader.result));
                if(obj.status === "NG"){
                    if(typeof(obj.message) === 'object'){
                        //422 error validate from back end
                        for (let i in obj.message) {
                            if(response.status === 422){
                                err.push(obj.message[i])
                            }else{
                                if(typeof (obj.message[i]) === "object"){
                                    err.push(obj.message[i][0])
                                }else{
                                    err.push(obj.message[i])
                                }
                            }   
                        }
                    }else{
                        err.push(obj.message);
                    }
                    resolve(err);
                }else{
                    resolve(true);
                }
            }
        });
    }else{
        return new Promise((resolve, reject) => {
            obj = response.data;
            if(obj.status === "NG"){
                if(typeof(obj.message) === 'object'){
                    //422 error validate from back end
                    for(let i in obj.message){
                        if(response.status === 422){                                                       
                            err.push(obj.message[i]) 
                        }else{
                            if(typeof (obj.message[i]) === "object"){
                                err.push(obj.message[i][0])
                            }else{
                                err.push(obj.message[i])
                            }
                        }               
                    }
                }else{
                    err.push(obj.message);
                }
                resolve(err);
            }else{
                resolve(true);
            }
        });
    }
};
