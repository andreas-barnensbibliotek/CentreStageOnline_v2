import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class AppGlobalErrorHandler implements ErrorHandler {
    handleError(error) {
        //alert("Något blev fel i: Post");
        console.log("Post Global ERRORMESSAGE: " + error);  
    }
  }