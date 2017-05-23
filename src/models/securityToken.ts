import * as _ from 'lodash';

///<reference path="../../../../../typings/lodash/lodash.d.ts" />

export class SecurityToken {
    publicSecret:string;
    securityLevel:string;
    constructor(token:{publicSecret:string,securityLevel:string}) {
        _.assignIn(this, token);
    }
    isEncoding(encoding:string):boolean {
        return this.securityLevel
            && this.securityLevel === encoding;
    }
}
