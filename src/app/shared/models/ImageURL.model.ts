export class ImageURL {

    // Default Placeholder Picture for Products
    private url: string  = 'https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg';
    
    //private regex:RegExp = /^(ftp|http|https):\/\/[^ "]+$.(jpg|jpeg|png|gif))/;

    // Regex for local and absolute images url
    private regex:RegExp = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif|webp))/i;
    
    constructor(url: string) {
        if(!this.regex.test(url)) {
            throw 'NOT VALID IMAGE URL';
        }
        this.url = url;
    }

    public getURL(): string {
        return this.url;
    }
}