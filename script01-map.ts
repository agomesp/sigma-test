interface NodeList {
    map(callback: Function): any[];
}

NodeList.prototype.map = function map(callback: Function): any[]  {
    const newArray: any[] = [];
    for (let i: number = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}